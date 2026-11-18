# twickenham-osteopath-project-state

Project state and scoping notes for the **Twickenham Osteopath website** — a multi-page (minimum 3 pages) static HTML/CSS/Bootstrap individual project for the AI Augmented FullStack Bootcamp.

## Files

| Path | Purpose |
|---|---|
| `AGENTS.md` | Auto-loaded Antigravity rules, mentoring style, site guardrails, and Modern Web Guidance policy |
| `.agents/skills/clinic-qa/` | Repeatable QA runbook (`SKILL.md`), `:root` contrast verifier (`scripts/check_contrast.py`), and Chrome-free Playwright QA runner (`scripts/playwright_qa.mjs`) |
| `meadowside-clinic.code-workspace` | VS Code multi-root workspace mounting project docs alongside `../meadowside-clinic` |
| `PROJECT_STATE.md` | Single source of truth: current phase, goal, architecture, confirmed palette tokens, and open questions |
| `TASKS.md` | Currently active tasks only, updated for quick review |
| `EXAMPLE_SITES.md` | Links to 4 previous cohort example projects (Pass, Merit, Distinction, Outstanding) |
| `OSTEOPATH_BENCHMARKS.md` | Reference audit of 6 real-world osteopath & clinic benchmark sites |
| `source/assessment-summaries.md` | Binding summaries of the bootcamp Learning Outcomes and Submission Checklist |

## Working Rules

- Open `meadowside-clinic.code-workspace` in VS Code so both repos are active workspaces and `AGENTS.md` auto-loads everywhere.
- Keep facts single-sourced in `PROJECT_STATE.md`; commit state changes to `main` so Git history stays an audit trail.
- Keep scope focused on passing the assessment cleanly.
