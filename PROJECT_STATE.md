# Project State — Twickenham Osteopath Website

> Single source of truth for Meadowside Clinic facts, brief decisions, and open choices.

## Status

- **Site repo:** `alexswabey/meadowside-clinic` (`../meadowside-clinic`), currently holding the prior iteration on `main` at **`f7103b9`** (`https://alexswabey.github.io/meadowside-clinic/`).
- **Direction:** **Fresh-start rebuild on a feature branch** — preserve `f7103b9` as `archive/v4-custom-css`, keep live `main` intact while building the new Bootstrap-first iteration on a new branch, and merge when ready.
- **Phase:** Guided design workshop — Bootstrap showcase selection & page-by-page structure (`last updated 2026-11-18`).
- **Next:** Complete **Guided Decision 1** (pick Bootstrap 5 components from the 1–13 menu below), then walk **page by page** (`Home` → `About` → `Treatments` → `Visiting` → `Booking` → `Contact` → `Thank You`) to lock layout + image-slot intent before font previews and coding.

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
- **Header & interactive defaults:** Simplified header (no dark top utility bar); Bootstrap `.accordion` (`data-bs-*`) for FAQs; HTML5 + Bootstrap validation feedback (`contact.html` → `thank-you.html`).
- **Location visual (`visiting.html`):** Minimal line-drawing map showing Meadowside Clinic's location on Twickenham Green, paired with a Google Maps link.

## Open Decisions

- **Guided Decision 1 — Bootstrap 5 showcase menu (next session):**
  - *Nav:* (1) `.navbar` collapse vs `.offcanvas` mobile drawer; (2) `.breadcrumb` on subpages.
  - *Layout & Trust:* (3) asymmetric grid + `.order-lg-*` + `.ratio`; (4) horizontal `.card` (`row g-0`) + `.stretched-link`; (5) `.list-group-flush` / `.list-group-numbered`; (6) `.figure` + `.blockquote` + `.blockquote-footer`; (7) `.badge.rounded-pill` + `.alert` / `border-start` callouts.
  - *Interactive `data-bs-*` (zero JS):* (8) `.accordion` / `.accordion-flush` (`data-bs-parent` choice); (9) `.nav-tabs` / `.nav-pills` vs stacked content trade-off; (10) optional `.modal`; (11) `.carousel` (adopt vs consciously reject for accessibility).
  - *Forms & Buttons:* (12) `.form-floating` vs stacked `.form-label` + `.form-text`; (13) `.input-group`, `.form-switch`, `.d-grid` responsive buttons.
- **Guided Decision 2 — Page structure & image intent:** Walk page by page after Decision 1 to lock section layout and what each image slot must communicate before sourcing visuals.
- **Typography:** Preview font pairings informed by [OSTEOPATH_BENCHMARKS.md](OSTEOPATH_BENCHMARKS.md) (e.g., serif+sans, modern sans, slab+sans, vs all-serif) before the visual polish pass.
- **Booking integration (back burner):** Evaluate free, zero-custom-code booking tools to wire into `booking.html` once structure is locked.
- **QA script alignment:** Update hardcoded DOM/CSS assertions in `.agents/skills/clinic-qa/scripts/` once the new Bootstrap-first markup is scaffolded.
