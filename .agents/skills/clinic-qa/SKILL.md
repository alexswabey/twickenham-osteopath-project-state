---
name: clinic-qa
description: >-
  Run repeatable quality assurance for the Meadowside Clinic website (`../meadowside-clinic`),
  covering WCAG contrast verification, W3C Nu HTML and Jigsaw CSS 0/0 validation,
  Chrome-free Playwright QA (WebKit & headless Chromium), Lighthouse/CWV audits,
  and bootcamp submission checklist verification. Use after modifying site HTML, CSS, or SVGs.
---

# Meadowside Clinic QA Runbook

Run these checks from `twickenham-osteopath-project-state` (or with both folders mounted via `meadowside-clinic.code-workspace`) after editing files in `../meadowside-clinic`.

## 1. Contrast Sanity Check

Verify `:root` palette contrast ratios against WCAG AA (`>= 4.5:1` body text, `>= 3:1` UI borders & focus rings):

```sh
python3 .agents/skills/clinic-qa/scripts/check_contrast.py
```

Expected: all checked pairs pass (`exit code 0`).

## 2. W3C Validation Gate (Target: 0 Errors / 0 Warnings)

Validate all 6 HTML pages against W3C Nu HTML Validator:

```sh
for f in index.html about.html treatments.html visiting.html contact.html thank-you.html; do
  echo "=== $f ==="
  curl -sS -H "Content-Type: text/html; charset=utf-8" --data-binary "@../meadowside-clinic/$f" "https://validator.w3.org/nu/?out=json"
  echo ""
done
```

Expected: `"messages":[]` on all 6 pages.

Validate CSS against W3C Jigsaw (`css3svg`, all warnings enabled):

```sh
curl -sS -F "file=@../meadowside-clinic/assets/css/style.css" -F "profile=css3svg" -F "warning=2" -F "output=json" https://jigsaw.w3.org/css-validator/validator
```

Expected: `"validity": true`, `"errorcount": 0`, `"warningcount": 0`.

Confirm deterministic Modern Web Guidance scan stays clean:

```sh
npx -y modern-web-guidance@latest legacy-scan ../meadowside-clinic --json
```

## 3. Chrome-Free Playwright & Browser QA

Run the automated Playwright QA runner (launches an ephemeral local server on `127.0.0.1` and uses Playwright's pre-cached WebKit + bundled headless Chromium shell — no Google Chrome install required):

```sh
node .agents/skills/clinic-qa/scripts/playwright_qa.mjs --browsers=webkit,chromium
```

Pass `--screenshots=<dir>` (outside the repo, e.g., an artifacts folder, unless capturing submission screenshots) to save full-page PNGs across `desktop-1440` (`1440x900`) and `mobile-390` (`390x844`):
- **Media, SVGs & overflow:** All `<img>` elements decode cleanly (`naturalWidth > 0`, including standalone SVGs), zero zero-width `<svg>` graphics, `.trust-metrics` column layout (`1` at `320px`, `3` at `>=480px`), and zero horizontal overflow (`scrollWidth <= innerWidth`) across `1440px`, `390px`, and `320px`.
- **Navbar, anchors & interactive checks:** Shared `brand-mark.svg` loads on all 6 pages; mobile `.navbar-toggler` expands/collapses; `#faq` and `#accessibility` clear the sticky header; `<details>` FAQs (`#homeFaq`, `#clinicFaq`) toggle non-exclusively; `:user-invalid` validation hides errors initially, reveals `.form-error-msg` after invalid interaction, and routes valid `GET` submissions to `thank-you.html`; zero console/page errors.
- **Manual visual pass (Firefox / Safari):** When needed, run `python3 -m http.server 8765 --bind 127.0.0.1 --directory ../meadowside-clinic`, open `http://127.0.0.1:8765/` in Firefox or Safari (remember Safari's **Develop -> Disable Caches** / hard reload when inspecting local SVG or CSS updates), and verify keyboard `:focus-visible` rings on both light cards and dark `.utility-bar` / `.site-footer` links.

## 4. Phase 5 Readiness (`source/assessment-summaries.md`)

Before declaring submission ready:
- Capture validator pass screenshots and desktop/mobile screenshots (`docs/screenshots/`, e.g., via `playwright_qa.mjs --screenshots=../meadowside-clinic/docs/screenshots` or Firefox/Safari).
- Run Lighthouse / Core Web Vitals (Mobile & Desktop) on the live GitHub Pages deployment via PageSpeed Insights (`https://pagespeed.web.dev/`) or Playwright's bundled headless Chromium — no Google Chrome install needed.
- Verify `../meadowside-clinic/README.md` covers all LO4/LO5 and CHK sections.
