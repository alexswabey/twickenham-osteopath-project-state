# Project State — Twickenham Osteopath Website

> Single source of truth for Meadowside Clinic facts, brief decisions, and open choices.

## Status

- **Site repo:** `alexswabey/meadowside-clinic` (`../meadowside-clinic`), currently holding the prior iteration on `main` at **`f7103b9`** (`https://alexswabey.github.io/meadowside-clinic/`).
- **Direction:** **Fresh-start rebuild on `feat/bootstrap-rebuild`** (`dad98fc`) — `f7103b9` preserved as `archive/v4-custom-css` and live `main` kept intact until the rebuild is ready to merge.
- **Phase:** Clean 7-page Bootstrap 5.3.9 scaffold + minimal Twickenham SVG map committed on `feat/bootstrap-rebuild` (`dad98fc`, W3C 0/0 verified `2026-11-19`).
- **Next:** Source WebP photos matching the locked image-slot intents and review the **typography preview shortlist** informed by [OSTEOPATH_BENCHMARKS.md](OSTEOPATH_BENCHMARKS.md).

## Client Brief & Content Direction

- **Clinic identity:** **Meadowside Clinic** · **Lydia Selby, M.Ost.** (Twickenham Green: `14 Meadowside Mews, Twickenham TW2 5QA`, `020 8555 0142`, `enquiries@meadowsideclinic.example`).
- **Core message & tone:** Positive, reassuring focus on the **patient experience** and the calm, welcoming clinic environment. Avoid negative *"what we aren't"* framing.
- **Audience framing:** De-emphasise segmented demographic callouts (adults, pregnancy, babies, older adults); mention varied visitors naturally in passing within copy.
- **Trust signals:** Include strong **patient-experience trust signals** across every page—especially **Home** and **About**—keeping GOsC registration and qualifications as quiet background credibility rather than the headline focus. *(Use realistic patient reflections paired with clear fictional-practice disclosure in the footer/confirmation page.)*
- **Primary CTA & booking direction:** Site-wide primary CTA is **"Book an Appointment"** / **"Book"**, pointing to a new **`booking.html` placeholder** page for now. Evaluating a free, third-party booking integration sits on the **back burner** until core Bootstrap structure is done.
- **Appointments framing:** Streamline services down to **Initial Consultation** and **Follow-Up Session** (mentioning varied ages in passing rather than separate demographic cards).
- **Scope & exclusions:** Baseline pages: `index.html`, `about.html`, `treatments.html`, `visiting.html`, `booking.html` (placeholder), `contact.html`, and `thank-you.html`. Keep fees/pricing, opening hours, embedded interactive map iframes, user accounts, and payments out of scope.

## Architecture & Visual Direction

- **Bootstrap-first codebase:** Use **Bootstrap 5** extensively (grid, utilities, `.navbar`, `.card`, `.accordion`, `.list-group`/`.badge`, forms, and `--bs-*` custom properties). Avoid custom CSS whenever Bootstrap (lightly customised if needed) can do the job cleanly.
- **Anti-generic Bootstrap guidelines:**
  - *Dual-layer `--bs-*` theming:* Updating `:root` tokens (`--bs-primary`, `--bs-primary-rgb`, `--bs-body-bg`, `--bs-body-color`, `--bs-border-radius`, `--bs-link-color`) is not enough on its own—compiled Bootstrap components (`.btn-primary`, `.card`, `.accordion`, `.form-control:focus`) also need component-scoped `--bs-btn-*`, `--bs-card-*`, `--bs-accordion-*` overrides loaded after Bootstrap.
  - *Break box monotony:* Do not wrap every section in uniform 3-column `.card` grids—alternate `.list-group-flush`, open asymmetric splits (`col-lg-7`/`col-lg-5`, `offset-lg-1`, `order-lg-2`), editorial `figure`/`blockquote` quotes, and generous vertical rhythm (`py-5`, `gy-5`).
  - *Replace default tells:* Eliminate `#0d6efd` blue, generic system-font feel, uniform `0.375rem` corners/hairlines, and cloned subpage opener banners.
- **Readability & mentoring:** Author clean, scannable HTML/CSS with helpful explanatory comments so every line is easy to review and learn from in a code editor, and explain Bootstrap features and nuances as we build *(strip dead commented-out code before final deployment)*.
- **Build sequence:** Lock Bootstrap component toolkit → lock page structure + **image-slot intent** (slot, emotional job, what to avoid) → archive `f7103b9` & scaffold clean branch → source imagery → typography preview & visual polish.
- **Colour palette (Locked):** `190°` Clinical Mineral Teal (`#12525E` / `#0C3C45`), Porcelain (`#FAFCFD`), Sea-Glass Mist (`#EAF3F5` / `#F3F8F9`), Warm Linen (`#F5F2ED`), and Rosewood (`#8A3C54` / `#6E2C40`).
- **Locked Bootstrap 5 toolkit (Guided Decision 1):**
  - *Nav:* Deep **Mineral Teal (`#12525E`)** simplified header (`data-bs-theme="dark"`, no dark top utility bar) using **`.offcanvas-lg.offcanvas-end`** (`navbar-expand-lg`) for mobile slide-over navigation; **omit `.breadcrumb`** on subpages.
  - *Layout & Trust:* Asymmetric grid (`col-lg-7`/`col-lg-5`, `offset-lg-1`) + `.order-lg-*` + `.ratio`; horizontal `.card` (`row g-0`) + `.stretched-link` (ideal for the 2 appointment pathways); **`.list-group-flush`** hairline lists (drop `.list-group-numbered`); editorial **`.figure` + `.blockquote` + `.blockquote-footer`**; restrained **`.badge.rounded-pill`** + **`border-start` callouts** (reject default `.alert` banners).
  - *Interactive `data-bs-*` (zero JS):* **Boxed `.accordion`** with **stay-open** behaviour (omit `data-bs-parent`); **`.nav-pills` / tabs only for dense wordy parallel blocks** (keep shorter content stacked); **omit `.modal`**; **reject `.carousel`** for accessibility (WCAG 2.2.2) and content visibility.
  - *Forms & Buttons:* **Stacked `.form-label` + `.form-control` + `.form-text`** (reject `.form-floating`) with native HTML5 validation + `method="get" action="thank-you.html"` (no hardcoded `.was-validated`); **omit `.input-group`**; clear **`.form-check` radios/checkboxes** over `.form-switch`; **`.d-grid.gap-2.d-sm-flex`** responsive button groups.
- **Location visual (`visiting.html`):** Minimal line-drawing SVG map showing Meadowside Clinic's location on Twickenham Green (clean label clearance with zero road-stroke clashes), paired with a Google Maps link.
- **Locked page structure & image-slot intent (Guided Decision 2):**
  - `index.html` (*Home*): `7/5` hero split (eager sunlit clinic room `.ratio-4x3` — calm exhalation, no clinical/pain clichés) → `5 + offset-1 + 6` Meet Lydia portrait (`loading="lazy"`, approachable daylight) + `.list-group-flush` experience points → `Sea-Glass Mist` 2 horizontal `.card`s (`row g-0` + `.stretched-link` + calm detail photos, `90 mins` / `45 mins` pills, linking to `treatments.html` before booking) → `Warm Linen` `.figure`/`.blockquote` patient reflection → closing `.d-grid` CTA band.
  - `about.html` (*About*): Plain-English editorial text lead (no `M.Ost.`/`GOsC` abbreviations in hero) above wide `16:9` Lydia-in-clinic scene (eager, warmth in motion) → `Warm Linen` philosophy split + `.list-group-flush` → `Porcelain` 1 deep `.figure`/`.blockquote` + `.list-group-flush` *"What visitors mention"* → `Sea-Glass Mist` quiet `border-start` credentials note (`M.Ost.`, `GOsC`, insured) + `.d-grid` CTA.
  - `treatments.html` (*Treatments*): `Sea-Glass Mist` text opener (no hero photo) + interactive **`.nav-pills`** (**Initial Consultation · 90 mins** vs **Follow-Up Session · 45 mins**; each pane has `5/7` `.ratio-4x3` photo + `.list-group-flush`) → dedicated centered `col-lg-8` **boxed stay-open `.accordion` FAQ** → full-width `Warm Linen` `.figure`/`.blockquote` + `.d-grid` CTA band.
  - `visiting.html` (*Visiting*): `5/7` address (`14 Meadowside Mews, Twickenham TW2 5QA`) + Google Maps link + minimal Twickenham Green line-drawing SVG map (eager) → `Sea-Glass Mist` interactive **`.nav-pills`** (`Rail & Bus` | `By Car` | `Step-Free Access`) → `Warm Linen` mews entrance/waiting photo (`.ratio-4x3`, `loading="lazy"`) + arrival `.figure`/`.blockquote` + CTA.
  - `booking.html` (*Booking placeholder*): Centered `col-lg-8` embed-ready hub (photo-free, **no duration reminder**, `border-start` enquiry + `020 8555 0142` phone actions ready for a future booking widget) → `Warm Linen` `.figure`/`.blockquote` trust band.
  - `contact.html` (*Contact*): Photo-free `7/4` split — stacked `.form-label` + `.form-control` + `.form-text` (Name, Email, optional Phone, Preferred Reply `.form-check` radios, Message; native HTML5 validation + `method="get" action="thank-you.html"`) + `.list-group-flush` direct details & `border-start` reply-pace sidebar → `Warm Linen` `.figure`/`.blockquote` trust band.
  - `thank-you.html` (*Thank You*): Photo-free centered `col-lg-8` confirmation (`Message Received` pill, `<h1>`, 2-row `.list-group-flush` next steps, `border-start` **Fictional-Practice Educational Disclosure**, `.d-grid` return CTAs).

## Open Decisions

- **Typography:** Preview font pairings informed by [OSTEOPATH_BENCHMARKS.md](OSTEOPATH_BENCHMARKS.md) (e.g., serif+sans, modern sans, slab+sans, vs all-serif) before scaffolding & visual polish.
- **Booking integration (back burner):** Evaluate free, zero-custom-code booking tools to wire into `booking.html` once structure is locked.
- **QA script alignment:** Update hardcoded DOM/CSS assertions in `.agents/skills/clinic-qa/scripts/` once the new Bootstrap-first markup is scaffolded.
