# Project State — Twickenham Osteopath Website

> Single source of truth for Meadowside Clinic facts and decisions.

## Status

- **Site repo:** `alexswabey/meadowside-clinic` (`../meadowside-clinic`), live at `https://alexswabey.github.io/meadowside-clinic/` on commit **`f7103b9`** *(Clinical Teal migration `d267cc9`; earlier v3 `0734936` in Git history)*.
- **Phase:** Refinement & Pre-Submission QA (`last updated 2026-11-18`).
- **Verified baseline (`f7103b9`):** W3C Nu HTML `0/0` across all 6 pages, W3C Jigsaw CSS `0/0`, `check_contrast.py` `24/24`, and Chrome-free Playwright QA (`webkit` + headless `chromium`: decoded SVGs, `320px`–`1440px` zero overflow, `<details>` FAQs, `:user-invalid` form validation, zero console errors).
- **Open:** Layout/visual refinement, deciding whether any SVG becomes a royalty-free WebP photo, final W3C/Jigsaw & Lighthouse verification, and writing `meadowside-clinic/README.md`.

## Clinic Identity, Goal & Scope

- **Practice & practitioner:** **Meadowside Clinic** · **Lydia Selby, M.Ost.** (full name in formal credentials/bio; **Lydia** in conversational body copy; fictional GOsC-registered cranial osteopath).
- **Location & contact:** `14 Meadowside Mews, Twickenham Green, Twickenham TW2 5QA` · `020 8555 0142` · `enquiries@meadowsideclinic.example`.
- **Goal & audience:** Give prospective clients clear, credible information on non-urgent cranial osteopathy across all life stages (adults, babies/children, pregnancy/postnatal, older adults) so they feel confident taking a next step toward booking. Mobile-first, designed with older visitors' readability in mind.
- **Content boundary:** Fictional clinic/practitioner details and sample testimonials are permitted; **zero false or exaggerated medical claims** (accurate GOsC framing only).
- **Out of scope:** Fees/pricing, embedded interactive map iframe, opening hours (appointment-based), automated booking, accounts/login, payments, patient records, CMS, dashboards, personalisation, and translation.
- **User stories:** (1) Prospective adult patient seeking clear cranial osteopathy info; (2) First-time visitor checking Lydia's bio & GOsC registration; (3) Appointment planner checking visit expectations, parking & accessibility; (4) Older or mobile visitor needing clear navigation, high contrast & easy enquiry feedback.

## Site Map (6 Pages)

1. **`index.html`:** Hero with sunlit treatment room illustration + trust metrics, *"Meet Your Osteopath"* bio (`lydia-selby-portrait.svg`, `loading="lazy"`), 4 life-stage cards, *"What Meadowside Clinic is — and what we aren't"* panels, 3-item `<details>` FAQ preview, sample testimonials, and multi-channel CTA.
2. **`about.html`:** Practitioner bio (`lydia-selby-portrait.svg`, `fetchpriority="high"`), GOsC registration & credentials, 3-principle clinical philosophy, GP signposting boundaries, and sample testimonials.
3. **`treatments.html`:** Cranial osteopathy overview + educational diagram, 3 appointment cards (durations & what to expect; no fees), 4-stage first-visit flow, and 7-item `<details>` FAQ.
4. **`visiting.html`:** Twickenham Green address, `twickenham-map.svg` (`fetchpriority="high"`) + Google Maps directions link (no iframe), bus/train/parking cards, and physical & sensory accessibility grid.
5. **`contact.html`:** HTML5-validated `GET` enquiry form submitting to `thank-you.html` (`:user-invalid` inline errors, `<span aria-hidden="true">*</span>`, hints above inputs, `resize: vertical`, `disabled selected` empty select), scheduling note, phone-chat guidance, and NHS 111/999 notice.
6. **`thank-you.html`:** Submission confirmation, 3-step reply timeline, and return links.

## Locked Visual & Technical Specs

- **Palette (`190°` Clinical Mineral Teal + Rosewood):**
  - Primary: `#12525E` / `#0C3C45`
  - Surfaces: `#FAFCFD` (porcelain), `#EAF3F5` / `#F3F8F9` (sea-glass mist), `#F5F2ED` (warm linen)
  - Accent (Rosewood): `#8A3C54` / `#6E2C40`
  - Contrast details: `3.66:1` input borders, white `:focus-visible` ring on dark bars, `@media (forced-colors: active)` fallbacks.
- **Typography:** *Instrument Serif* headings (fluid `clamp()`, `text-wrap: balance`) + *Source Serif 4* body (`18px` / `1.125rem`, `1.72` line-height, `font-size-adjust: from-font`).
- **Stack & assets:** Bootstrap 5 (`bootstrap.bundle.min.js` currently only used for mobile navbar collapse) + `assets/css/style.css` (`em` breakpoints, `100dvh`, `scroll-padding-top`/`scroll-margin-top`, `@media (pointer: coarse)` 44px touch targets, `@media (prefers-reduced-motion: no-preference)`); shared emblem `assets/images/brand-mark.svg`; 4 recoloured SVG illustrations.
