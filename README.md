# twickenham-osteopath-project-state

Structured project state for the **Twickenham Osteopath website** — an HTML/CSS/Bootstrap individual project assessed in the AI Augmented FullStack Bootcamp.

This repository holds the **single source of truth** for the LLM-assisted scoping session:

> The conversation is the working session.
> `PROJECT_STATE.md` is the memory.
> Git is the audit trail.

## Contents

| Path | Purpose |
|---|---|
| `PROJECT_STATE.md` | The state file: metadata, charter, decision log, constraints, assumptions, open questions, risks, change log |
| `source/assessment-summaries.md` | Binding summaries of the two assessment PDFs (Learning Outcomes, Submission Checklist) |

## Ground rules

1. One stage at a time, in the fixed stage sequence (Stage 1 Problem and purpose → Stage 13 Proposal assembly).
2. A stage only opens once the previous stage is **confirmed closed**.
3. Decisions are append-only records with stable IDs (`D-001`, `D-002`, …) and an explicit status: `proposed` → `confirmed` or `superseded`.
4. A decision is marked `confirmed` **only** after the junior developer explicitly confirms it.
5. Changed decisions are never rewritten — a new decision supersedes the old one.
6. Every assistant response ends with `State updated: <sections>` or `No state update.`
7. Commit rhythm: one commit per confirmed stage or major constraint change.

## State management protocol

- `PROJECT_STATE.md` is the single source of truth for project progress.
- Do not rely on prior conversation memory as the source of truth.
- At the start of a session: read this repository before acting.
- When new information changes the project state, update the relevant section in `PROJECT_STATE.md`.
- Keep the document concise and current.
- Do not rewrite old decision records. Append new decisions instead.
- If a decision changes, add a new decision that supersedes the old one.
- Update Current stage / Stage status / Next action whenever they change.
- After every response, state either "State updated: <sections changed>" or "No state update."
- A decision is only marked confirmed after the user explicitly confirms it.

## Current status

See **Current Position** in [`PROJECT_STATE.md`](PROJECT_STATE.md).
