# Project State — Twickenham Osteopath Website

> Single source of truth. Update in place when facts change; Git tracks history.

## Status

- **Project:** Static multi-page informational website (minimum 3 distinct pages; 5 main pages + `thank-you.html`) for a newly established cranial osteopath in Twickenham, UK (fictional clinic for bootcamp assessment)
- **Owner:** Junior developer (mentored); client = fictional GOsC-registered cranial osteopath
- **Last updated:** 2026-11-17
- **Deadline:** Monday afternoon → Sunday night (hard; cannot be late)
- **Current phase:** Phase 4 — Build (Phase 3 complete)
- **Next action:** Review the v3 luminous redesign of `meadowside-clinic` locally, commit & push it to update GitHub Pages (currently serving initial scaffold `d4f4883`), decide whether to swap in real WebP photos or keep the custom SVG illustrations, and proceed to Phase 5 validation.

## Goal & Scope

- **Purpose:** Help a newly established, GOsC-registered cranial osteopath in Twickenham build a client base by giving potential clients clear, credible information so they are more likely to take a next step toward booking.
- **Audience & context:** Primarily adults booking for themselves (mostly relatively local, open to anyone willing to visit Twickenham) with non-urgent musculoskeletal issues, while welcoming all life stages (adults, babies/children, pregnancy/postnatal, older adults). Mobile-first, designed with older visitors' accessibility needs in mind.
- **Visitor takeaway:** *"This osteopath seems like a credible, promising option I can easily visit."*
- **In scope (static site):** 5 main pages + `thank-you.html` with responsive navigation, practitioner bio, treatment cards (cranial osteopathy & appointment expectations with durations/details, no fees), "Visiting the Clinic" page (simplified map image + Google Maps link, parking advice, physical accessibility), FAQ accordion, sample testimonials, and contact form with immediate feedback.
- **Content & ethical boundary:** Fictional clinic/practitioner details and sample testimonials are permitted, and copy should be broadly relatable and inclusive across life stages so varied visitors feel seen, **but zero false or exaggerated medical/professional claims about osteopathy** (accurate GOsC framing only).
- **Out of scope:** Fees/pricing, embedded interactive map iframe, opening hours (visits are appointment-based), automated booking, user accounts/login, payments, patient records, CMS, dashboards, personalisation, translation, and dark mode.

## Site Structure (Phase 2 — Confirmed Option B)

1. **`index.html` (Home):** Hero banner with sunlit treatment room illustration + trust metrics, *"Meet Your Osteopath"* bio intro directly below the hero (`lydia-selby-portrait.svg`), 4 life-stage cards with metadata tags, *"What Meadowside Clinic is — and what we aren't"* clinical honesty panels, 3-question FAQ preview accordion, sample testimonials, and multi-channel booking/chat CTA.
2. **`about.html` (About):** Practitioner bio (`lydia-selby-portrait.svg`), GOsC registration & credentials, 3-principle clinical philosophy, clear GP signposting boundaries, and sample testimonials.
3. **`treatments.html` (Treatments & FAQ):** Whole-body cranial osteopathy overview + custom educational diagram, 3 appointment cards (durations & what to expect; no fees), 4-stage first-visit flow, and 7-item FAQ accordion.
4. **`visiting.html` (Visiting the Clinic):** Twickenham Green clinic location (`14 Meadowside Mews, Twickenham TW2 5QA`), custom simplified SVG map (`twickenham-map.svg`) + Google Maps directions link, bus/train/parking cards, and physical & sensory accessibility grid.
5. **`contact.html` (Contact):** Accessible HTML5-validated `GET` enquiry form *(submits to `thank-you.html`)*, appointment-based scheduling note, friendly-chat phone guidance, and non-urgent NHS 111/999 notice.
6. **`thank-you.html` (Confirmation):** Clear confirmation message, 3-step reply timeline, and navigation back to the main site after form submission.

## Design & Technical Approach (Phase 3 — Confirmed)

- **Visual aesthetic:** Halfway between medical and natural/holistic — bright, uplifting light palette inspired by *Wellthy Clinic*, *Muna Osteopathy & Wellness*, and *Sora Health*: anchored in crisp **Sunlit Ivory (`#FFFDF9`)**, **Pure White (`#FFFFFF`)** cards, **Fresh Mint (`#E6F4EC` / `#F2FAF5`)** washes, **Emerald Spruce (`#144D46`)** primary anchors, and vibrant **Warm Coral (`#C24129` / `#F16344`)** accents using CSS colour variables throughout per CHK.
- **Typography:** Serif throughout — pairing *Instrument Serif* (expressive editorial display headings with italic emphasis) with *Source Serif 4* (`18px` / `1.125rem` body, `1.72` line-height for older visitors' readability).
- **Framework & layout:** Bootstrap 5 (navbar, responsive grid, cards, FAQ accordion, form controls) + custom CSS (`assets/css/style.css` with media query + Flexbox/Grid + CSS variables). No unreviewable custom JS.
- **Contact form:** HTML5 validated `GET` form on `contact.html` submitting to `thank-you.html` (zero custom JS, satisfies immediate feedback requirement; may revisit later if desired).
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

### Phase 4 — Build
- **Website repo:** `alexswabey/meadowside-clinic` (public GitHub repo) cloned to `/Users/alexs/Library/Mobile Documents/com~apple~CloudDocs/VSCode/meadowside-clinic` and added to workspace; GitHub Pages enabled at https://alexswabey.github.io/meadowside-clinic/ (live build currently on `d4f4883`; v3 redesign ready locally to commit & push).
- **Clinic location & fictional address:** 14 Meadowside Mews, Twickenham Green, Twickenham TW2 5QA (phone `020 8555 0142`, email `enquiries@meadowsideclinic.example`).
- **Fictional clinic identity (Confirmed):** **Meadowside Clinic**; practitioner **Lydia Selby, M.Ost.** (used in full for formal credentials/bio; **Lydia** in conversational body copy; GOsC-registered cranial osteopath).
- **Assets & performance:** Bespoke SVG artworks (`twickenham-map.svg`, `lydia-selby-portrait.svg`, plus inline treatment room & cranial contact illustrations) are currently wired in with `loading="lazy"` on below-the-fold `<img>` elements. Real royalty-free photos (converted to WebP & attributed in `README.md`) remain preferred if sourced before Phase 5; otherwise custom SVGs are complete and lightweight.

## Benchmark Takeaways (`EXAMPLE_SITES.md` & `OSTEOPATH_BENCHMARKS.md`)

- **Complete > large:** Keep all planned pages finished with zero `#` placeholder or `under-construction.html` links.
- **High-contrast light palette:** Avoid dark-on-dark contrast traps; keep colour contrast clear across all sections.
- **Component patterns:** Use a Bootstrap Accordion for the FAQ (avoids uneven card heights) and `contact.html` → `thank-you.html` (`GET`) for static submission feedback without fragile JS.
- **Quality checks per page:** Verify navbar consistency, zero JS console errors, and 0 W3C HTML/CSS errors/warnings on every page (using `.visually-hidden` headings where needed).
- **Documentation (`README.md` + optional `TESTING.md`):** Include User Stories, palette/wireframes, desktop/mobile screenshots, W3C/Jigsaw & Lighthouse before/after evidence, **plus** the LO5 AI-use reflection required by our rubric.
