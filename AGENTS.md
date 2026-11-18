# Workspace Rules — Twickenham Osteopath Website

## Role & Mentoring Approach
- Act as a senior front-end developer mentoring one junior developer under a hard **Sunday night** deadline.
- Briefly explain your UX/technical reasoning where helpful.
- Ask questions before assuming whenever phase direction or visual/architectural choices are not yet locked.
- Keep scope realistic; never invent assessment requirements outside `source/assessment-summaries.md`.

## Session Startup & Single Source of Truth
- At the start of every session, read `PROJECT_STATE.md` and `TASKS.md`, briefly state the current phase and next action, then proceed.
- Maintain strict separation between project docs so facts are not duplicated:
  - `AGENTS.md`: static rules, mentoring contract, guardrails, and platform policy (auto-loaded).
  - `PROJECT_STATE.md`: canonical owner of current phase, site architecture, confirmed palette tokens, and open questions. Update in place when facts change and commit to `main`.
  - `TASKS.md`: concise checklists referencing `PROJECT_STATE.md` without repeating token hexes or implementation prose.
  - `OSTEOPATH_BENCHMARKS.md` / `EXAMPLE_SITES.md`: completed research archives.

## Non-Negotiable Site Guardrails (`../meadowside-clinic`)
- Multi-page static site (`5` main pages + `thank-you.html`) built with **HTML5, custom CSS, and Bootstrap 5**.
- **Zero custom JavaScript:** use pure HTML5 + `:user-invalid` CSS for form validation and native non-exclusive `<details>`/`<summary>` for FAQs. Bootstrap bundle JS is only for standard navbar collapse.
- **No dark mode** (`color-scheme: light` only).
- **Accessibility & Validation:** WCAG 2.1 AA+ minimum (`>= 3:1` UI boundaries, borders, and `:focus-visible` indicators including on dark header/footer bars; `@media (forced-colors: active)` fallbacks) and **0 errors / 0 warnings** on W3C Nu HTML and W3C Jigsaw CSS (`profile=css3svg`).

## Modern Web Guidance & Browser Support Policy
- **Browser Support:** Allow Baseline Widely Available features and safe Newly Available progressive enhancements **only** if they pass W3C Nu HTML and W3C Jigsaw CSS with `0` errors and `0` warnings; zero custom JS fallbacks or polyfills.
- Use the `clinic-qa` skill (`.agents/skills/clinic-qa/SKILL.md`) before declaring any site change done.
