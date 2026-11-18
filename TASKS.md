# TASKS — Design Refinement → Validate, Deploy & README

> **Updated:** 2026-11-18 (Wednesday) · **Phase:** 4.5 — Design pass, then 5
> **Hard deadline:** Sunday night (22 Nov) · **Time available:** ~3.5 days
>
> ## Why this list exists
>
> The palette + Modern Web Guidance conformance pass (`d267cc9`) and Playwright SVG/`320px` navbar fixes (`f7103b9`) are committed and
> pushed to `main` (v3 `0734936` remains in Git history if needed), **but layout
> refinement isn't done yet**. Shipping final validation screenshots and a README
> around an unreviewed layout would polish the wrong layer, so this list puts a
> structured **design refinement pass** first, and keeps final validation /
> deployment / README work at the end, intact.
>
> ## What we know so far (code-level review, 2026-11-18)
>
> Pre-layout modernisation & bugfixes are pushed in `f7103b9` *(following `d267cc9`; full specs live in `PROJECT_STATE.md`)*. Remaining design hypotheses to test visually in **Phase A**:
>
> 1. **A crowded hero.** Eyebrow, H1, lead, two CTAs, a phone line, a
>    3-column trust-metrics bar, and a large illustration all compete in the
>    first viewport. There's no single focal point.
> 2. **Templated page openers.** Every page starts the same way
>    (`.page-intro`: eyebrow → H1 with italic accent → lead → two-column row).
>    Flipping through all six, they may read as one page repeated.
> 3. **Palette swap completed (`d267cc9` ✅):** Visually confirm the Clinical
>    Teal + Rosewood balance (see `PROJECT_STATE.md` for tokens) across Playwright screenshots / Firefox or Safari during Phase A.
> 4. **The illustrations.** All SVGs now use the Clinical Teal + Rosewood palette,
>    but need visual scoring (via Playwright screenshots / Firefox or Safari) to judge whether they stay or become WebP photos.
>
> ## How to work through this
>
> - **Phase A is mandatory and cheap** — it's looking, not building. It forces
>   the "not there yet" feeling into specific, actionable notes. Do not skip it;
>   it's the difference between fixing the design and redressing it.
> - **Phases B–E are workstreams.** After Phase A, pick **1–2 as primary** and
>   treat the rest as stretch. Don't try to do all five in a day.
> - **Commit after each workstream** with a descriptive message (e.g.
>   "Design: hero focal point — text-led, trust metrics moved to bio section").
>   Clean commit history is a graded requirement *and* your undo stack.
> - **Regress after each change** (Phase F) before moving on.
> - The Phase A screenshots double as **"before" evidence** for the README's
>   process narrative later — keep them.

---

## A. Diagnose (½ hour, mandatory)

- [ ] **Capture & review the Chrome-free visual baseline** — Run `node .agents/skills/clinic-qa/scripts/playwright_qa.mjs --browsers=webkit,chromium --screenshots=../meadowside-clinic/docs/design/before` against `f7103b9` (saving WebKit/headless-Chromium `1440px` + `390px` PNGs; plus optional v3 `0734936` comparison from Git history) and review in Firefox/Safari alongside the screenshots to inspect the Clinical Teal + Rosewood balance, `:user-invalid` form validation, and `<details>` FAQs.
- [ ] **Write the note list.** Looking at the baseline (and live site), write down 3–5 *specific* "not there yet" notes. Concrete beats vibes: "hero feels cramped at 1440px, no focal point" ✅ · "it just feels off" ❌. Check hypotheses #1, #2, and #4 (and confirm the new teal + rosewood feel).
- [x] **Lock & apply the calibrated clinical-teal hue & non-orange accent** — Confirmed & pushed in `d267cc9` *(see `PROJECT_STATE.md`)*.
- [ ] **Compare against the benchmarks** (3 Selected Inspirations + 3 London Benchmarks from Olie — see `OSTEOPATH_BENCHMARKS.md`): do we balance *clean clinical credibility* with *human warmth* (differentiating from *Maris*/*Body Evolve*'s standard blues while matching *Wellthy*/*Sora*'s poise and *Muna*'s lightness)? Name the gap in one sentence.
- [ ] **Score the four SVG artworks** (treatment room, portrait, map, cranial diagram) 1–5 each against: style consistency with each other, palette harmony, and "does this make the site feel finished?". Note which 1–2, if any, are weakest.
- [ ] **Set priorities.** Mark 1–2 workstreams (B–E) as **PRIMARY** in the note list; the rest become stretch. State the single sentence that describes what "done" looks like (e.g. *"the site should feel like one calm, premium practice, not a Bootstrap template with a palette swap"*).

## B. Workstream — Hero & first impression (index.html)

*Primary candidate. The hero is the one viewport that decides "credible option" or "bounce".*

- [ ] **Pick the hero's focal point: text-led or image-led** (and commit to it). If text-led, the illustration steps down in size/placement; if image-led, the headline moves over or beside it with a calmer treatment.
- [ ] **Resolve the trust-metrics bar.** Three metrics stacked under the CTAs is a lot of first-viewport furniture. Either integrate one metric subtly, or move the metrics into the "Meet Your Osteopath" section where they support the bio.
- [ ] **Re-tune the H1 treatment** — size, line breaks, which word gets the italic accent colour. The line should read in under five seconds: *who, what, where*.
- [ ] **Check the sub-CTA row** (call + email links) — is it adding warmth or clutter? If clutter, drop to one quiet line.
- [ ] **Run Phase F regress**, then commit ("Design: hero reworked — …").

## C. Workstream — Page differentiation

*Primary candidate if Phase A shows the "templated" problem. Also directly serves the CHK requirement that each page differentiate structure and style.*

- [ ] **Map the six page openers** — they all currently use `.page-intro`. Deliberately vary 2–3 of them, e.g.: *About* — portrait-forward opener (portrait as the dominant element, text beside); *Treatments* — opener that previews the 4-stage first-visit flow; *Visiting* — map-forward opener with the address card overlapping or beside it.
- [ ] **Give each page one signature element** it's known for — home: life-stage cards; about: the credential box / 3-principle philosophy; treatments: the 4-stage flow + full FAQ; visiting: the map + accessibility grid; contact: the form + NHS notice. Confirm each is actually visually distinct (not just different copy).
- [ ] **Use section surfaces for rhythm** — check that `.section-sage`, `.section-warm`, and plain backgrounds alternate with intention on each page (no two adjacent sections in the same wash; no page that's one unbroken white expanse).
- [ ] **Vary the closing CTA band** so the final call-to-action isn't pixel-identical on all five main pages (one accent treatment change is enough — background, button emphasis, or layout).
- [ ] **Run Phase F regress**, then commit per page touched.

## D. Workstream — Artwork

*This is where the old "WebP vs SVG" decision actually gets made — now as a design judgement per artwork, not a blanket call.*

- [ ] **For each of the four SVGs, decide: iterate, keep, or replace.** Use the Phase A scores. Keep what's working; don't rework everything out of hand-wringing.
- [x] **Initial recolouring done (`d267cc9`):** All 4 illustrations, `brand-mark.svg`, and `thank-you.html` checkmark updated to the locked palette *(see `PROJECT_STATE.md`)*. Evaluate geometry/polish after Phase A scoring.
- [ ] **If replacing with photos:** choose royalty-free treatment-room / interior shots (avoid stock portraits — they can't be Lydia and risk reading as a false claim), convert to **WebP**, keep `width`/`height` (`fetchpriority="high"` on LCP, `loading="lazy"` below the fold), and note attribution for the README.
- [ ] **Re-verify alt text** on every changed/replaced image so it still describes what's actually shown.
- [ ] **Run Phase F regress**, then commit with the per-artwork decisions in the message.

## E. Workstream — Polish, rhythm & clean clinical warmth (stretch)

- [ ] **Vertical rhythm pass** — section padding (currently 3.75–4.5rem) and card inner padding: tighten or open up *deliberately*, so whitespace reads as calm, not accidental.
- [x] **Type scale check** — Switched `h1`/`h2` to fluid `clamp()` sizing with `text-wrap: balance` and `font-size-adjust: from-font`; still check editorial spacing visually in Playwright screenshots / Firefox or Safari.
- [x] **Apply & balance the calibrated clinical-teal palette (`d267cc9`)** — CSS `:root` tokens and SVGs updated *(see `PROJECT_STATE.md`)*; verify final visual balance in Playwright screenshots / Firefox or Safari.
- [ ] **Buttons & pills** — the full-radius pill buttons are a strong choice; confirm they're consistent everywhere (no straight Bootstrap `btn` leaking through) and that the primary/accent CTA treatment highlights the *one* most important action per section, not several.
- [ ] **Utility bar & footer density** — the top clinical-teal utility bar above the navbar: is it earning its place on every page, or does it read as noise? Same check for footer column density.
- [ ] **Run Phase F regress**, then commit.

## F. Regress (after every workstream, ~15 min)

- [x] **Resize the touched pages (`f7103b9` baseline verified 2026-11-18)** — Verified `1440px`, `390px`, and `320px` across all 6 pages in Playwright (`webkit`, headless `chromium`) with zero horizontal overflow; **re-run after each Phase B–E edit**.
- [x] **Contrast check (palette math verified 2026-11-18)** — Verified WCAG AA/AAA across `#12525E` + `#8A3C54` tokens (`3.66:1` input border, `8.77:1+` white focus on dark bars, `6.53:1` Rosewood on mist); re-verify after any B–E layout edits.
- [ ] **Keyboard & visual browser pass on touched pages** — Verify desktop + mobile visual polish and visible `:focus-visible` rings in Firefox/Safari after each B–E edit (automated `<details>` FAQ + `:user-invalid` form + anchor clearance checks covered by `playwright_qa.mjs`).
- [x] **Console check (`f7103b9` baseline verified 2026-11-18)** — zero console/page errors across all 6 pages in Playwright `webkit` + headless `chromium`; **re-run after each Phase B–E edit**.

## G. Validate (the gate — from the previous task list)

> *W3C HTML + Jigsaw CSS with zero errors and zero warnings on every page. LO2 / CHK "Testing & Validation".*
> *Pre-refinement baseline (2026-11-18): W3C Nu HTML `0/0` across all 6 pages and W3C Jigsaw CSS `0/0` verified locally. Re-run and screenshot after finishing B–E.*

- [ ] **Final W3C HTML (Nu) validation on all 6 pages** (re-run after Phase B–E edits).
- [ ] **Fix to 0/0 on all 6 pages**, re-run to confirm.
- [ ] **Final Jigsaw CSS validation on `assets/css/style.css`** *(after any B–E CSS edits)*.
- [ ] **Fix to 0/0**, re-run to confirm.
- [ ] **Screenshot both validators' pass results** for README evidence.

## H. Performance, accessibility & QA (from the previous task list)

- [ ] **Lighthouse / Core Web Vitals (mobile + desktop) on the deployed site** (via PageSpeed Insights `pagespeed.web.dev` or Playwright headless Chromium — no Chrome install needed), note all four category scores.
- [ ] **Fix the actionable findings** (image sizing, font `display`, stray a11y flags) and re-run.
- [ ] **Full a11y sweep on every page** — contrast, tap targets ≥ 44px, focus visibility, meaningful alt/ARIA on all non-text elements.
- [ ] **Cross-page sweep** — click every internal link (no `#`, no dead ends), navbar identical & functional on all 6 pages, contact form → `thank-you.html` flow works end-to-end, zero console errors, remove any commented-out code *(note: Bootstrap JS is now only needed for mobile navbar collapse)*, and verify zero placeholder text, staging URLs, or stale timestamps (lessons from Olie's London benchmarks in `OSTEOPATH_BENCHMARKS.md`).

## I. Final ship & README

- [ ] **Capture the final screenshots** — all 6 pages, desktop + mobile → `docs/screenshots/`. (The Phase A `before/` shots now document the design evolution.)
- [ ] **Commit the design refinement** (if not already committed per workstream) and **push to `main`**; confirm GitHub Pages rebuilds and the live site matches local.
- [ ] **Write `README.md`** — live link + ToC at top · purpose & the 4 user stories · per-page features + user value · deployment procedure · desktop/mobile screenshots with descriptions · W3C/Jigsaw + Lighthouse evidence (with before/after if scores improved) · Bugs/Errors section · attribution (Bootstrap, Instrument Serif & Source Serif 4, any photos) · **AI-use declaration (LO5)**: brief, outcome-focused reflections on AI in code creation, debugging, performance/UX, and workflow.
- [ ] **Update `PROJECT_STATE.md`** — mark the design pass + Phase 5 complete, record final commit hash + live URL, close the artwork open question.
- [ ] **Final requirements sweep** — walk LO (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1–5.4) and the CHK line by line; confirm each is evidenced.

---

## Time allocation (Wed → Sun)

| When | Focus |
|---|---|
| Wed (rest of today) | Phase A diagnose + start **B** (hero) |
| Thu | Finish **B**, do **C** and/or **D** (your primary workstreams); regress after each |
| Fri | **E** polish (if time), then **G + H** — validation, Lighthouse, QA sweep |
| Sat | Fix whatever G/H surfaced, final screenshots, write the **README** |
| Sun | Push, verify live build matches, final requirements sweep, buffer |

> If time runs short: cut **E** first (it's marked stretch), then the optional
> photo replacements in **D**. **Never** cut G, H, or the README — those are
> the explicitly graded requirements, and a *good-enough* design that
> validates clean beats a beautiful design with a broken submission.
