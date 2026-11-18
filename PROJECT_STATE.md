# Project State — Twickenham Osteopath Website

> Single source of truth for Meadowside Clinic facts, brief decisions, and open choices.

## Status

- **Site repo:** `alexswabey/meadowside-clinic` (`../meadowside-clinic`), currently holding the prior iteration at commit **`f7103b9`** (`https://alexswabey.github.io/meadowside-clinic/`).
- **Direction:** **Fresh-start rebuild** — set the old custom-CSS layout aside (preserve in Git history/archive branch) and build a clean, Bootstrap-first iteration from scratch.
- **Phase:** New-iteration brief & structure planning (`last updated 2026-11-18`).
- **Next:** Research anti-"Bootstrap look" pitfalls, outline 6-page structure + image intent (structure first, embellishment later), and prepare benchmark-informed typography previews.

## Client Brief & Content Direction

- **Clinic identity:** **Meadowside Clinic** · **Lydia Selby, M.Ost.** (Twickenham Green: `14 Meadowside Mews, Twickenham TW2 5QA`, `020 8555 0142`, `enquiries@meadowsideclinic.example`).
- **Core message & tone:** Positive, reassuring focus on the **patient experience** and the calm, welcoming clinic environment. Avoid negative *"what we aren't"* framing.
- **Audience framing:** De-emphasise segmented demographic callouts (adults, pregnancy, babies, older adults); mention varied visitors naturally in passing within copy.
- **Trust signals:** Include strong **patient-experience trust signals** across every page—especially **Home** and **About**—keeping GOsC registration and qualifications as quiet background credibility rather than the headline focus. *(Use realistic patient reflections paired with clear fictional-practice disclosure in the footer/confirmation page.)*
- **Scope & exclusions:** Keep the 6-page baseline (`index.html`, `about.html`, `treatments.html`, `visiting.html`, `contact.html`, `thank-you.html`). Keep fees/pricing, opening hours, embedded interactive map iframes, and online booking/accounts out of scope.

## Architecture & Visual Direction

- **Bootstrap-first codebase:** Use **Bootstrap 5** extensively (grid, utility classes, `.navbar`, `.card`, `.accordion`, `.list-group`/`.badge`, forms, and `--bs-*` custom properties). Avoid custom CSS whenever Bootstrap (lightly customised if needed) can do the job cleanly.
- **Avoid the "Bootstrap look":** Intentionally counter common Bootstrap defaults (generic blue, uniform boxy card grids, unstyled default spacing/borders) with thoughtful layout rhythm, custom palette tokens, and typography—without bloated CSS.
- **Readability & mentoring:** Author clean, scannable HTML/CSS with helpful explanatory comments so every line is easy to review and learn from in a code editor *(strip dead commented-out code before final deployment)*.
- **Build sequence:** Lock page structure and **intent of each image slot** first → source matching photography/imagery → layer typography and visual polish once structure is solid.
- **Colour palette (Locked):** `190°` Clinical Mineral Teal (`#12525E` / `#0C3C45`), Porcelain (`#FAFCFD`), Sea-Glass Mist (`#EAF3F5` / `#F3F8F9`), Warm Linen (`#F5F2ED`), and Rosewood (`#8A3C54` / `#6E2C40`).
- **Header & interactive defaults:** Simplify header (drop the extra dark top utility bar); use Bootstrap `.accordion` (`data-bs-*`) for FAQs and HTML5 + Bootstrap validation feedback (`contact.html` → `thank-you.html`).

## Open Decisions

- **Typography:** Preview font pairings informed by [OSTEOPATH_BENCHMARKS.md](OSTEOPATH_BENCHMARKS.md) (e.g., serif+sans, modern sans, slab+sans, vs all-serif) and select one before the styling/embellishment pass.
- **Page structure & image intent:** Define the section-by-section structure and the purpose of each image across the 6 pages before sourcing visuals.
- **QA script alignment:** Update hardcoded DOM/CSS assertions in `.agents/skills/clinic-qa/scripts/` once the new Bootstrap-first markup is scaffolded.
