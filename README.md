# twickenham-osteopath-project-state

Project state and scoping notes for the **Twickenham Osteopath website** — a multi-page (minimum 3 pages) static HTML/CSS/Bootstrap individual project for the AI Augmented FullStack Bootcamp.

## Files

| Path | Purpose |
|---|---|
| `AGENTS.md` | Auto-loaded Antigravity rules, mentoring style, site guardrails, and Modern Web Guidance policy |
| `.agents/skills/clinic-qa/` | Repeatable QA runbook (`SKILL.md`), `:root` contrast verifier (`scripts/check_contrast.py`), and Chrome-free Playwright QA runner (`scripts/playwright_qa.mjs`) |
| `meadowside-clinic.code-workspace` | VS Code multi-root workspace mounting project docs alongside `../meadowside-clinic` |
| `PROJECT_STATE.md` | Single source of truth: current phase, goal, architecture, confirmed palette tokens, and open questions |
| `TASKS.md` | Design refinement workstreams (A–F) and Phase 5 validation, QA & ship checklist (G–I) |
| `PROJECT_BRIEF.md` | Assessor-facing project brief using the bootcamp brief template |
| `EXAMPLE_SITES.md` | Links to 4 previous cohort example projects (Pass, Merit, Distinction, Outstanding) |
| `OSTEOPATH_BENCHMARKS.md` | Curated real-world osteopath & clinic websites (Selected Inspirations + Olie's London benchmarks) |
| `source/assessment-summaries.md` | Binding summaries of the bootcamp Learning Outcomes and Submission Checklist |
| `STARTER_PROMPT.md` | Legacy/portable session prompt (for non-Antigravity tools that do not auto-load `AGENTS.md`) |

## Working Rules

- Open `meadowside-clinic.code-workspace` in VS Code so both repos are active workspaces and `AGENTS.md` auto-loads everywhere.
- Keep facts single-sourced in `PROJECT_STATE.md`; commit state changes to `main` so Git history stays an audit trail.
- Keep scope focused on passing the assessment within the one-week deadline (Monday afternoon → Sunday night).
