# Project State — Twickenham Osteopath Website

> Single source of truth. Update in place when facts change; Git tracks history.

## Status

- **Project:** Static multi-page informational website (minimum 3 distinct pages; 5 main pages + `thank-you.html`) for a newly established cranial osteopath in Twickenham, UK (fictional clinic for bootcamp assessment)
- **Owner:** Junior developer (mentored); client = fictional GOsC-registered cranial osteopath
- **Last updated:** 2026-11-18
- **Deadline:** Monday afternoon → Sunday night (hard; cannot be late)
- **Current phase:** Phase 4 — Build / Phase 4.5 Refinement & Modernisation (Phase 3 complete)
- **Next action:** Enable Chrome remote debugging (`chrome://inspect/#remote-debugging`), run a visual + interactive QA sweep across `d267cc9` (`1440px`, `390px`, `320px`, `:user-invalid` form errors, `<details>` FAQs, focus rings), and run **Phase A** of `TASKS.md` → 1–2 primary workstreams (`B`/`C`/`D`) before Phase 5 (post-edit W3C/Jigsaw re-validation + screenshots, Lighthouse, `meadowside-clinic/README.md`, final push). Workstreams stay sequenced so final ship tasks follow layout refinement; old `TOMORROW_TASKS.md` was replaced by `TASKS.md` on 2026-11-18.

## Goal & Scope

- **Purpose:** Help a newly established, GOsC-registered cranial osteopath in Twickenham build a client base by giving potential clients clear, credible information so they are more likely to take a next step toward booking.
- **Audience & context:** Primarily adults booking for themselves (mostly relatively local, open to anyone willing to visit Twickenham) with non-urgent musculoskeletal issues, while welcoming all life stages (adults, babies/children, pregnancy/postnatal, older adults). Mobile-first, designed with older visitors' accessibility needs in mind.
- **Visitor takeaway:** *"This osteopath seems like a credible, promising option I can easily visit."*
- **In scope (static site):** 5 main pages + `thank-you.html` with responsive navigation, practitioner bio, treatment cards (cranial osteopathy & appointment expectations with durations/details, no fees), "Visiting the Clinic" page (simplified map image + Google Maps link, parking advice, physical accessibility), native FAQ disclosures (`<details>`/`<summary>`), sample testimonials, and contact form with immediate feedback.
- **Content & ethical boundary:** Fictional clinic/practitioner details and sample testimonials are permitted, and copy should be broadly relatable and inclusive across life stages so varied visitors feel seen, **but zero false or exaggerated medical/professional claims about osteopathy** (accurate GOsC framing only).
- **Out of scope:** Fees/pricing, embedded interactive map iframe, opening hours (visits are appointment-based), automated booking, user accounts/login, payments, patient records, CMS, dashboards, personalisation, translation, and dark mode.

## Site Structure (Phase 2 — Confirmed Option B)

1. **`index.html` (Home):** Hero banner with sunlit treatment room illustration + trust metrics, *"Meet Your Osteopath"* bio intro directly below the hero (`lydia-selby-portrait.svg`), 4 life-stage cards with metadata tags, *"What Meadowside Clinic is — and what we aren't"* clinical honesty panels, 3-question FAQ preview (`<details>`/`<summary>`), sample `<figure>`/`<blockquote>` testimonials, and multi-channel booking/chat CTA.
2. **`about.html` (About):** Practitioner bio (`lydia-selby-portrait.svg`, `fetchpriority="high"`), GOsC registration & credentials, 3-principle clinical philosophy, clear GP signposting boundaries, and sample `<figure>`/`<blockquote>` testimonials.
3. **`treatments.html` (Treatments & FAQ):** Whole-body cranial osteopathy overview + custom educational diagram, 3 appointment cards (durations & what to expect; no fees), 4-stage first-visit flow, and 7-item searchable native `<details>`/`<summary>` FAQ.
4. **`visiting.html` (Visiting the Clinic):** Twickenham Green clinic location (`14 Meadowside Mews, Twickenham TW2 5QA`), custom simplified SVG map (`twickenham-map.svg`) + Google Maps directions link, bus/train/parking cards, and physical & sensory accessibility grid.
5. **`contact.html` (Contact):** Accessible HTML5-validated `GET` enquiry form *(submits to `thank-you.html`)*, appointment-based scheduling note, friendly-chat phone guidance, and non-urgent NHS 111/999 notice.
6. **`thank-you.html` (Confirmation):** Clear confirmation message, 3-step reply timeline, and navigation back to the main site after form submission.

## Design & Technical Approach (Phase 3 — Confirmed)

- **Visual aesthetic (2026-11-18 Clinical Teal + Rosewood migration pushed in `d267cc9`):** Rejected v3's leafy emerald (`#144D46`, `172.6°`) and rusty coral (`#C24129` / `#F16344`) in favour of calibrated **`190°` Clinical Mineral Teal (`#12525E` / `#0C3C45`)**, **Porcelain (`#FAFCFD`)**, **Sea-Glass Mist (`#EAF3F5` / `#F3F8F9`)**, **Warm Linen (`#F5F2ED`)**, and **Rosewood (`#8A3C54` / `#6E2C40`)**. All `:root` CSS tokens, hardcoded stylesheet values, shared emblem (`brand-mark.svg`), and inline/external SVGs are migrated with full WCAG AA/AAA & `1.4.11` (`3.66:1` input borders, white focus ring on dark bars, `@media (forced-colors: active)`) compliance.
- **Typography:** Serif throughout — pairing *Instrument Serif* (expressive editorial display headings with fluid `clamp()` scale and `text-wrap: balance`) with *Source Serif 4* (`18px` / `1.125rem` body, `1.72` line-height, `font-size-adjust: from-font` for older visitors' readability).
- **Framework & layout:** Bootstrap 5 (navbar collapse, responsive grid, form controls) + custom CSS (`assets/css/style.css` with `em` breakpoints, Flexbox/Grid, `100dvh`, `scroll-padding-top` / `scroll-margin-top`, `@media (pointer: coarse)` 44px touch targets, `@media (forced-colors: active)`, and `@media (prefers-reduced-motion: no-preference)`). Zero custom JavaScript; FAQs use native `<details>`/`<summary>`.
- **Contact form:** Strictly zero-JS HTML5 validated `GET` form on `contact.html` submitting to `thank-you.html`, enhanced with CSS `:user-invalid` inline error messages, `<span aria-hidden="true">*</span>` required markers, format hints placed above inputs, `resize: vertical`, and `disabled selected` empty select option.
- **Location map:** Custom simplified Twickenham Green area SVG (with descriptive `alt` text / accessible title) + *"Open in Google Maps"* link on `visiting.html` (no embedded iframe).

## User Stories (Phase 1)

1. **Prospective adult patient:** *As an adult with non-urgent musculoskeletal discomfort, I want clear, welcoming information on cranial osteopathy and who it can help, so that I feel seen and confident considering treatment.*
2. **Trust-seeking visitor:** *As a first-time visitor, I want to read the osteopath's bio and see her GOsC registration, so that I trust she is qualified and reputable.*
3. **Appointment planner:** *As someone considering booking, I want to understand what different appointments involve and what to expect when visiting the Twickenham clinic (location, parking, accessibility), so that I know how to prepare.*
4. **Older or mobile visitor:** *As a visitor browsing on a phone or needing strong readability, I want clear navigation, high-contrast text, and an easy enquiry form with clear feedback, so that I can get in touch without frustration.*

## Key Guardrails

Full assessment criteria live in `source/assessment-summaries.md`. Project-specific guardrails:

- **Page count (CHK):** Minimum three distinct pages (no upper limit; 5 main pages + `thank-you.html` planned), each with differentiated structure and style (LO's "one-page" wording is a non-operative discrepancy).
- **Tech stack:** HTML, custom CSS (with media query + Flexbox/Grid + CSS colour variables), and Bootstrap. No unreviewable custom JavaScript (Bootstrap JS and simple third-party front-end tools are fine).
- **Quality & Accessibility:** Zero W3C HTML and Jigsaw CSS errors/warnings; no WCAG errors, high contrast, clear font sizes/tap targets, and alt text on all non-text elements (WCAG 2.1 AA as reference aim).
- **Performance & Hosting:** Lighthouse run and reviewed across all categories; deployed to GitHub Pages matching the local build.
- **Content & Attribution:** English only; created/sourced content must be properly attributed in `README.md` (along with screenshots, validation/Lighthouse evidence, and AI reflection).

## Open Questions

### Phase 4 — Build & Design Refinement
- **Website repo:** `alexswabey/meadowside-clinic` cloned to `/Users/alexs/Library/Mobile Documents/com~apple~CloudDocs/VSCode/meadowside-clinic`; committed & pushed to `origin/main` at **`d267cc9`** (`https://alexswabey.github.io/meadowside-clinic/`; earlier emerald/coral v3 build `0734936` stays in Git history if pre-teal comparison screenshots are desired). Passes W3C Nu HTML (`0/0` across all 6 pages), W3C Jigsaw CSS (`0/0`), and `modern-web-guidance legacy-scan` (`0` findings).
- **Calibrated clinical-teal palette (Decided & Pushed — 2026-11-18):** Confirmed and shipped **`190°` Clinical Teal (`#12525E`)** + **Rosewood (`#8A3C54`)** alongside `#FAFCFD` porcelain, `#EAF3F5` mist tint, and `#F5F2ED` warm linen across `:root`, `brand-mark.svg`, and all 4 illustrations.
- **Clinic location & fictional address:** 14 Meadowside Mews, Twickenham Green, Twickenham TW2 5QA (phone `020 8555 0142`, email `enquiries@meadowsideclinic.example`).
- **Fictional clinic identity (Confirmed):** **Meadowside Clinic**; practitioner **Lydia Selby, M.Ost.** (used in full for formal credentials/bio; **Lydia** in conversational body copy; GOsC-registered cranial osteopath).
- **Assets & performance:** Extracted navbar emblem to `assets/images/brand-mark.svg` (resolved stale double-SVG drift in `visiting.html`). All bespoke SVG artworks (`twickenham-map.svg`, `lydia-selby-portrait.svg`, plus inline room & cranial illustrations) are recoloured to the Clinical Teal + Rosewood palette; `about.html` and `visiting.html` primary illustrations use `fetchpriority="high"` while below-the-fold `index.html` portrait retains `loading="lazy"`. Deciding whether to replace any SVG with royalty-free WebP photos stays open for Phase A/D.
- **Tooling & unfinished QA (2026-11-18):** **Modern Web Guidance** Antigravity plugin installed and repo cloned at `/Users/alexs/Library/Mobile Documents/com~apple~CloudDocs/VSCode/modern-web-guidance`. Remaining open work: live Chrome visual/interactive QA (blocked on 2026-11-18 because Chrome remote debugging was off), Phase A–D layout/hero/page-differentiation refinement, Lighthouse mobile/desktop runs, post-refinement W3C/Jigsaw screenshot gate, and creating `meadowside-clinic/README.md`. *(Note: `bootstrap.bundle.min.js` is now only used for mobile navbar collapse since FAQs use native `<details>`—fine to keep per Bootstrap stack, or optional cleanup note.)*

## Benchmark Takeaways (`EXAMPLE_SITES.md` & `OSTEOPATH_BENCHMARKS.md`)

- **Complete > large (zero live leaks):** Keep all planned pages finished with zero `#` placeholder or `under-construction.html` links, and avoid the real-world pitfalls seen in Olie's London benchmarks (*Body Evolve*'s `"Google review code to be added here"` / `"Address line one"` placeholders; *The Maris Practice*'s leaked author timestamps and staging CSS link).
- **Clean clinical teal over generic blue or botanical green:** Differentiate from local clinics' standard corporate blues/bright teals (*Maris* `#1A80B6`, *Body Evolve* `#0EA0A0`) without reverting to leafy green or rusty orange; keep colour contrast clear (WCAG AA/AAA) across all sections.
- **Practitioner visibility & first-visit honesty:** Surface Lydia Selby's name, bio, and GOsC credentials prominently (*Sora*, *Wellthy*, *Evolution* — avoiding *Body Evolve*'s unnamed *"About me"* page), alongside *Sora*'s *"What we aren't"* boundaries and *Maris*'s clear appointment/clothing/consent/chaperone details.
- **Component patterns:** Use native non-exclusive `<details>`/`<summary>` FAQ disclosures (Find-in-Page searchable, zero JS) and HTML5 + `:user-invalid` CSS contact validation (`GET` -> `thank-you.html`) with above-input hints and `aria-hidden` required asterisks.
- **Quality checks per page:** Verify navbar consistency, zero JS console errors, full `alt` text on all non-text elements (unlike the high missing/empty-`alt` counts on *Wellthy*, *Maris*, *Body Evolve*, and *Evolution*), and 0 W3C HTML/CSS errors/warnings on every page (using `.visually-hidden` headings where needed).
- **Documentation (`README.md` + optional `TESTING.md`):** Include User Stories, palette/wireframes, desktop/mobile screenshots, W3C/Jigsaw & Lighthouse before/after evidence, **plus** the LO5 AI-use reflection required by our rubric.
