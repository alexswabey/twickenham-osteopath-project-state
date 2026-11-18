#!/usr/bin/env node
/**
 * Repeatable Chrome-free Playwright QA & screenshot runner for ../meadowside-clinic.
 * Runs against Playwright's cached WebKit (Safari engine) and bundled Chromium headless shell
 * without needing Google Chrome installed.
 *
 * Usage:
 *   node .agents/skills/clinic-qa/scripts/playwright_qa.mjs
 *   node .agents/skills/clinic-qa/scripts/playwright_qa.mjs --browsers=webkit,chromium --screenshots=/tmp/meadowside-shots
 */

import fs from "node:fs";
import http from "node:http";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PAGES = [
  "index.html",
  "about.html",
  "treatments.html",
  "visiting.html",
  "contact.html",
  "thank-you.html",
];

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_STATE_ROOT = path.resolve(__dirname, "../../../..");
const DEFAULT_SITE_DIR = path.resolve(PROJECT_STATE_ROOT, "../meadowside-clinic");

/** Resolve Playwright from workspace node_modules or ~/node_modules without duplicating installs. */
function loadPlaywright() {
  const require = createRequire(import.meta.url);
  const candidates = [
    path.join(PROJECT_STATE_ROOT, "node_modules/playwright"),
    path.join(os.homedir(), "node_modules/playwright"),
    "playwright",
  ];
  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch {
      // Try next installation path.
    }
  }
  throw new Error(
    "Could not locate 'playwright'. Ensure ~/node_modules/playwright or workspace node_modules/playwright is available."
  );
}

/** Parse --site=..., --browsers=..., and --screenshots=... flags cleanly. */
function parseArgs(argv) {
  const opts = {
    siteDir: DEFAULT_SITE_DIR,
    browsers: ["webkit", "chromium"],
    screenshotsDir: null,
  };
  for (const arg of argv) {
    if (arg.startsWith("--site=")) {
      opts.siteDir = path.resolve(arg.slice("--site=".length));
    } else if (arg.startsWith("--browsers=")) {
      opts.browsers = arg
        .slice("--browsers=".length)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else if (arg.startsWith("--screenshots=")) {
      opts.screenshotsDir = path.resolve(arg.slice("--screenshots=".length));
    }
  }
  return opts;
}

/** Start a read-only local HTTP server bound to 127.0.0.1 on an ephemeral port. */
function startStaticServer(rootDir) {
  const server = http.createServer((req, res) => {
    const rawPath = (req.url || "/").split("?")[0];
    const relPath = rawPath === "/" ? "index.html" : decodeURIComponent(rawPath).replace(/^\/+/, "");
    const absPath = path.resolve(rootDir, relPath);
    if (!absPath.startsWith(rootDir + path.sep) && absPath !== rootDir) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    fs.readFile(absPath, (err, content) => {
      if (err) {
        res.writeHead(404).end("Not found");
        return;
      }
      const ext = path.extname(absPath).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
      res.end(content);
    });
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${address.port}` });
    });
  });
}

/** Force below-the-fold lazy images to load & decode before full-page screenshot and image assertions. */
async function revealAllImages(page) {
  const count = await page.locator("img").count();
  for (let i = 0; i < count; i++) {
    await page.locator("img").nth(i).scrollIntoViewIfNeeded();
  }
  try {
    await page.waitForFunction(
      () => Array.from(document.querySelectorAll("img")).every((img) => img.complete && img.naturalWidth > 0),
      null,
      { timeout: 4000 }
    );
  } catch {
    // Let checkPagesAtViewport report which specific image failed to load.
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(150);
}

/** Run layout, image, console, and reflow checks across all pages for one viewport profile. */
async function checkPagesAtViewport(browser, baseUrl, profile, screenshotsDir, browserName) {
  const failures = [];
  const context = await browser.newContext({
    viewport: profile.viewport,
    hasTouch: profile.hasTouch,
  });

  try {
    for (const pageFile of PAGES) {
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("pageerror", (err) => pageErrors.push(err.message));

      await page.goto(`${baseUrl}/${pageFile}`, { waitUntil: "networkidle" });
      await revealAllImages(page);

      const metrics = await page.evaluate(() => {
        const vw = window.innerWidth;
        const overflow = document.documentElement.scrollWidth - vw;
        const overflowingEls = overflow > 0
          ? Array.from(document.querySelectorAll("*"))
              .filter((el) => {
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.right > vw + 1;
              })
              .slice(0, 5)
              .map((el) => `${el.tagName.toLowerCase()}${el.className ? "." + String(el.className).trim().replace(/\s+/g, ".") : ""}(${Math.round(el.getBoundingClientRect().right)}px)`)
          : [];
        const brokenImages = Array.from(document.querySelectorAll("img"))
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute("src") || "(inline img)");
        const zeroSizedSvgs = Array.from(document.querySelectorAll("main svg"))
          .filter((svg) => svg.getBoundingClientRect().width === 0)
          .length;
        return { overflow, overflowingEls, brokenImages, zeroSizedSvgs };
      });

      if (consoleErrors.length) failures.push(`${browserName} ${profile.name} ${pageFile}: console errors: ${consoleErrors.join(" | ")}`);
      if (pageErrors.length) failures.push(`${browserName} ${profile.name} ${pageFile}: page errors: ${pageErrors.join(" | ")}`);
      if (metrics.overflow > 0) {
        failures.push(`${browserName} ${profile.name} ${pageFile}: horizontal overflow +${metrics.overflow}px [${metrics.overflowingEls.join(", ")}]`);
      }
      if (metrics.brokenImages.length) failures.push(`${browserName} ${profile.name} ${pageFile}: broken images: ${metrics.brokenImages.join(", ")}`);
      if (metrics.zeroSizedSvgs > 0) failures.push(`${browserName} ${profile.name} ${pageFile}: ${metrics.zeroSizedSvgs} zero-width <svg>`);

      if (pageFile === "index.html") {
        const gridCols = await page.evaluate(() => {
          const el = document.querySelector(".trust-metrics");
          return el ? getComputedStyle(el).gridTemplateColumns.trim().split(/\s+/).length : 0;
        });
        const expectedCols = profile.viewport.width < 480 ? 1 : 3;
        if (gridCols !== expectedCols) {
          failures.push(`${browserName} ${profile.name} index.html: .trust-metrics columns=${gridCols}, expected ${expectedCols}`);
        }
      }

      if (screenshotsDir && profile.captureScreenshots) {
        const outDir = path.join(screenshotsDir, browserName, profile.name);
        fs.mkdirSync(outDir, { recursive: true });
        await page.screenshot({
          path: path.join(outDir, `${pageFile.replace(".html", "")}.png`),
          fullPage: true,
        });
      }

      await page.close();
    }
  } finally {
    await context.close();
  }
  return failures;
}

/** Verify anchor clearance, native non-exclusive <details> FAQs, mobile nav collapse, and :user-invalid form flow. */
async function checkInteractions(browser, baseUrl, browserName) {
  const failures = [];
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  try {
    // 1. Sticky-header clearance on fragment jumps
    for (const [pageFile, anchorId] of [
      ["visiting.html", "accessibility"],
      ["treatments.html", "faq"],
    ]) {
      await page.goto(`${baseUrl}/${pageFile}#${anchorId}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(350);
      const clearance = await page.evaluate((id) => {
        const header = document.querySelector(".site-header");
        const target = document.getElementById(id);
        if (!header || !target) return { ok: false, reason: "missing header or anchor" };
        const headerBottom = header.getBoundingClientRect().bottom;
        const targetTop = target.getBoundingClientRect().top;
        return { ok: targetTop >= headerBottom - 2, headerBottom, targetTop };
      }, anchorId);
      if (!clearance.ok) {
        failures.push(
          `${browserName} ${pageFile}#${anchorId}: obscured by sticky header (top=${clearance.targetTop}, headerBottom=${clearance.headerBottom})`
        );
      }
    }

    // 2. Native <details> non-exclusive FAQs on index.html and treatments.html
    for (const [pageFile, listSelector] of [
      ["index.html", "#homeFaq"],
      ["treatments.html", "#clinicFaq"],
    ]) {
      await page.goto(`${baseUrl}/${pageFile}`, { waitUntil: "networkidle" });
      const summaries = page.locator(`${listSelector} details > summary`);
      await summaries.nth(1).click();
      const openStates = await page.evaluate(
        (sel) => Array.from(document.querySelectorAll(`${sel} > details`)).map((d) => d.open),
        listSelector
      );
      if (!(openStates[0] && openStates[1])) {
        failures.push(`${browserName} ${pageFile} ${listSelector}: expected first two FAQs open non-exclusively, got ${JSON.stringify(openStates)}`);
      }
    }

    // 3. Contact form :user-invalid errors & submission flow
    await page.goto(`${baseUrl}/contact.html`, { waitUntil: "networkidle" });
    const initiallyShownErrors = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".form-error-msg")).filter(
        (el) => getComputedStyle(el).display !== "none"
      ).length
    );
    if (initiallyShownErrors !== 0) {
      failures.push(`${browserName} contact.html: ${initiallyShownErrors} error message(s) shown before interaction`);
    }

    await page.fill("#fullName", "A");
    await page.locator("#fullName").blur();
    const fullNameErrorVisible = await page.evaluate(
      () => getComputedStyle(document.querySelector("#fullName ~ .form-error-msg")).display !== "none"
    );
    if (!fullNameErrorVisible) {
      failures.push(`${browserName} contact.html: :user-invalid failed to reveal #fullName inline error after invalid input + blur`);
    }

    await page.fill("#fullName", "Jane Doe");
    await page.fill("#email", "jane@example.com");
    await page.selectOption("#enquiryType", "adult");
    await page.fill("#message", "Neck tension for two weeks, afternoons preferred.");
    await page.check("#consentCheck");
    await Promise.all([
      page.waitForURL("**/thank-you.html*"),
      page.click('button[type="submit"]'),
    ]);
  } finally {
    await context.close();
  }

  // 4. Mobile Bootstrap navbar toggle sanity check
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const mobilePage = await mobileCtx.newPage();
  try {
    await mobilePage.goto(`${baseUrl}/index.html`, { waitUntil: "networkidle" });
    await mobilePage.click(".navbar-toggler");
    await mobilePage.waitForSelector("#mainNav.show", { timeout: 3000 });
  } catch (err) {
    failures.push(`${browserName} mobile-390 navbar toggle failed: ${err.message}`);
  } finally {
    await mobileCtx.close();
  }

  return failures;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const playwright = loadPlaywright();
  const { server, baseUrl } = await startStaticServer(opts.siteDir);
  const allFailures = [];

  const viewportProfiles = [
    { name: "desktop-1440", viewport: { width: 1440, height: 900 }, hasTouch: false, captureScreenshots: true },
    { name: "mobile-390", viewport: { width: 390, height: 844 }, hasTouch: true, captureScreenshots: true },
    { name: "mobile-320", viewport: { width: 320, height: 700 }, hasTouch: true, captureScreenshots: false },
  ];

  try {
    for (const browserName of opts.browsers) {
      const browserType = playwright[browserName];
      if (!browserType) {
        allFailures.push(`Unknown Playwright browser engine: ${browserName}`);
        continue;
      }
      console.log(`\n=== Running Playwright QA (${browserName}) against ${baseUrl} ===`);
      let browser;
      try {
        browser = await browserType.launch({ headless: true });
        for (const profile of viewportProfiles) {
          const vpFailures = await checkPagesAtViewport(
            browser,
            baseUrl,
            profile,
            opts.screenshotsDir,
            browserName
          );
          allFailures.push(...vpFailures);
        }
        const interactionFailures = await checkInteractions(browser, baseUrl, browserName);
        allFailures.push(...interactionFailures);
        console.log(`[DONE] ${browserName} checks complete.`);
      } catch (err) {
        allFailures.push(`${browserName} engine error: ${err.message}`);
      } finally {
        await browser?.close();
      }
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }

  if (allFailures.length) {
    console.error("\nPlaywright QA Failures:");
    for (const msg of allFailures) console.error(` - ${msg}`);
    process.exit(1);
  }
  console.log(`\n[PASS] All Playwright checks passed across: ${opts.browsers.join(", ")}`);
  if (opts.screenshotsDir) console.log(`Screenshots saved under: ${opts.screenshotsDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
