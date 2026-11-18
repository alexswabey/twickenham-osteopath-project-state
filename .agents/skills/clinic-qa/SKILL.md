---
name: clinic-qa
description: >-
  Run repeatable quality assurance for the Meadowside Clinic website (`../meadowside-clinic`),
  covering WCAG contrast verification, legacy color/placeholder scans, W3C Nu HTML and Jigsaw CSS
  0/0 validation, responsive Chrome inspection, Lighthouse audits, and bootcamp submission
  checklist verification. Use during Phase A, F, G, H, or after modifying site HTML, CSS, or SVGs.
---

# Meadowside Clinic QA Runbook

Run these checks from `twickenham-osteopath-project-state` (or with both folders mounted via `meadowside-clinic.code-workspace`) after editing files in `../meadowside-clinic`.

## 1. Local Code & Contrast Sanity Checks

Check for leftover legacy emerald/coral hexes (`144D46`, `F16344`, `C24129`, `E6F4EC`, `96b5a5`) or accidental Bootstrap `.accordion` markup:

```sh
grep -rnE "144[dD]46|[fF]16344|[cC]24129|[eE]6[fF]4[eE][cC]|96[bB]5[aA]5|accordion" ../meadowside-clinic --exclude-dir=.git
```

Expected: zero matches (`exit code 1`).

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

## 3. Chrome Visual, Responsive & Interactive QA

Start a local static server for previewing:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory ../meadowside-clinic
```

Inspect `http://127.0.0.1:8765/` in Chrome (`chrome://inspect/#remote-debugging` if driving via browser tool) at desktop (`1440x900`) and mobile (`390x844`, `320x700`):
- **No horizontal overflow:** `document.documentElement.scrollWidth <= window.innerWidth` at every width; `.trust-metrics` stacks cleanly below `30em`.
- **Navbar & anchors:** Shared `brand-mark.svg` loads (`naturalWidth > 0`) on all 6 pages; active `[aria-current="page"]` indicator shows cleanly; `#appointments`, `#faq`, `#accessibility`, and `#main-content` clear the sticky header.
- **Native `<details>` FAQs (`index.html`, `treatments.html`):** Non-exclusive toggling works via mouse and keyboard; closed answers remain searchable via Find-in-Page.
- **Contact form (`contact.html`):** Zero errors visible on initial load; leaving required fields invalid after interaction shows `:user-invalid` inline `.form-error-msg` guidance; valid submit routes via `GET` to `thank-you.html`.
- **Keyboard & console:** Visible `:focus-visible` ring on light cards AND dark `.utility-bar` / `.site-footer` links; zero browser console errors.

## 4. Phase 5 Readiness (`source/assessment-summaries.md`)

Before declaring submission ready:
- Capture validator pass screenshots and desktop/mobile screenshots (`docs/screenshots/`).
- Run Lighthouse (Mobile & Desktop) on the live GitHub Pages deployment.
- Verify `../meadowside-clinic/README.md` covers all LO4/LO5 and CHK sections.
