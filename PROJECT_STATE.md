# Project State — Twickenham Osteopath Website

> Single source of truth. The chat is the working session; this file is the memory; Git is the audit trail.
> Read this file at the start of every session. Update it when project facts change. Never rely on chat memory.

## Metadata

- **Project:** Static informational website for a newly established osteopath based in Twickenham, UK — HTML/CSS/Bootstrap individual project
- **Owner:** Junior developer (mentored); client = the osteopath ("the client")
- **Last updated:** 2026-11-16
- **Current stage:** Stage 2 — Constraints and boundaries
- **Stage status:** D-003 recorded — **proposed, awaiting confirmation**
- **Next action:** Junior confirms Stage 2 is closed; on confirmation, mark D-003 confirmed, update status, and open Stage 3 (User and context)

## Source Documents

- `source/assessment-summaries.md` — binding summaries of the LO PDF and the CHK PDF (see the recorded one-page / three-page discrepancy)

## Project Charter

- **Primary purpose (Stage 1):** To help a newly established Twickenham osteopath build a client base by giving local potential clients enough clear, credible, and relevant information that they are more likely to book an appointment.
- **Primary visitor outcome:** The visitor becomes more likely to book an appointment.
- **Remembered visitor idea:** "This osteopath seems like a credible, promising option in my area."
- **Scope assumption:** "Booking" means the visitor is more likely to take a next step toward booking; the site does not implement automated booking.
- **Technical boundary:** Static informational website.
- **Deadline:** Monday afternoon → Sunday night; cannot be late; the junior's main task of the week.

## Decision Log

### D-001 — Stage 0: Process agreement
- **Stage:** 0
- **Question:** How will we work through this project?
- **Decision:** Fixed sequence of decision stages; complete and confirm one stage before opening the next; no stage is skipped; no page layouts, content, design, or code before the relevant stage is reached.
- **Rationale:** Multiple interdependent constraints (health-related content, accessibility, validation, responsiveness, deployment, documentation, AI reflection, one-week deadline) — decisions made out of order will need to be revisited.
- **Status:** Confirmed
- **Superseded by:** none

### D-002 — Stage 1: Problem and purpose
- **Stage:** 1
- **Question:** Why does this website exist, and what is the one thing it must achieve for the person who lands on it?
- **Decision:** The website exists to help a newly established Twickenham osteopath build a client base by giving local potential clients enough clear, credible, and relevant information that they are more likely to book an appointment. Primary outcome: a visitor becomes more likely to book. Remembered idea: "This osteopath seems like a credible, promising option in my area."
- **Assumption accepted:** "Booking" = the visitor is more likely to take a next step toward booking; no automated booking on a static site.
- **Carried forward:** Professional, regulatory, or ethical expectations for osteopathy content → Stage 4.
- **Rationale:** The client is new to the area, has no website, is one practitioner at one location; all trust-building goals serve the main goal of attracting clients.
- **Status:** Confirmed
- **Superseded by:** none

### D-003 — Stage 2: Constraints and boundaries
- **Stage:** 2
- **Question:** What are the hard and soft limits — technical, assessment, scope, and deadline — such that every later stage can make decisions without reopening the boundaries?
- **Decision:** The project proceeds as a **three-page website** (minimum three distinct pages, each designed to differentiate structure and style). The LO PDF's "one-page application" language is recorded as a **non-operative discrepancy**; the Submission Checklist is the operative submission document (junior-confirmed). Hard constraints H1–H13, boundaries B1–B4, soft items S1–S5, and confirmed exclusions are recorded in the Constraints section. Key targets: zero validation errors/warnings; no WCAG errors + contrast + alt text (WCAG 2.1 AA as reference aim); Lighthouse completed, reviewed, evidenced; GitHub Pages working default; no unreviewable custom JavaScript; English only.
- **Rationale:** The assessment documents define the graded bar; the JavaScript and deadline constraints define what one person can safely build in one week; the exclusion list keeps the project inside that bar. Recording every boundary now means later stages never renegotiate what is allowed, and the page-count conflict is resolved on the record.
- **Status:** Proposed — awaiting confirmation
- **Superseded by:** none

## Constraints

Recorded by D-003 (proposed — pending confirmation).

### Hard constraints (assessed — non-negotiable)

- **H1 — Page count:** Three distinct pages, each designed to differentiate structure and style (CHK). The LO PDF's "one-page application" language is a **non-operative discrepancy**; the Submission Checklist is the operative submission document (junior-confirmed).
- **H2 — Framework / responsive techniques:** Bootstrap required; custom CSS can and should supplement it; at least one CSS media query expected; Flexbox or Grid expected unless an excellent justification exists.
- **H3 — Responsiveness:** Layout adapts to different screen sizes; mobile-friendly is essential; no major errors or loss of functionality on resize.
- **H4 — Validation:** Custom HTML passes W3C; custom CSS passes W3C Jigsaw; target is **zero errors and zero warnings** absent a strong documented justification.
- **H5 — Accessibility:** No WCAG errors; appropriate colour contrast; alt text for all non-text elements. WCAG 2.1 AA is the reference aim, not a certification commitment.
- **H6 — Lighthouse:** Completed; Accessibility, Best Practices, SEO, and Performance scores reviewed; evidence in README. No explicit minimum score in the provided summaries; aim high, particularly Accessibility and Performance.
- **H7 — Deployment:** Final version deployed to a cloud platform, matching the development version, no discrepancies. Any cloud platform acceptable; GitHub Pages is the working default.
- **H8 — Version control:** Git + GitHub; clear commit history; clean, commented code; commented-out code removed before deployment; all internal links and interactive elements functional. No branch strategy or commit convention specified (settle in Stage 12 if needed).
- **H9 — README:** Live link at top; table of contents; purpose; feature descriptions with user benefits; deployment procedure; screenshots of all pages in desktop and mobile views; validation and Lighthouse evidence; bugs/errors section; attribution for external sources; AI declaration plus reflection covering code generation, debugging, optimisation, and workflow impact.
- **H10 — Deadline:** Monday afternoon → Sunday night. It cannot be late.
- **H11 — JavaScript boundary:** No unreviewable *custom* JavaScript. Bootstrap's own JavaScript and easy third-party front-end JavaScript are acceptable provided they do not create custom JS the junior cannot review, edit, or debug.
- **H12 — Language:** English only; translation not required (easy translation may be revisited later).
- **H13 — Content:** No client content yet; content may be created or sourced from freely available, properly licensed resources; attribution in the README is required.

### Boundaries (fixed now, mechanism decided later)

- **B1 — Contact form:** Essential; as conformant with best practice as a static site allows (clear labels, appropriate input types, client-side HTML validation, immediate feedback on submission); no unreviewable custom JS. Acceptable mechanisms: client-side-only handling, third-party front-end form service, mailto fallback. **Mechanism → Stage 9.**
- **B2 — Third-party front-end services:** Permitted; setup must be simple and fast enough to not jeopardise H10.
- **B3 — Map:** Optional enhancement (not required); inclusion decision deferred to later content/technical stages.
- **B4 — Client priority ranking:** Deferred until client confirmation. Working assumption: trust and credibility, appointment-type clarity, and contact prominence rank highest (serving the Stage 1 outcome) — pending confirmation.

### Soft items / priorities

- **S1 — Dark mode:** `could` (strong junior preference; not assessed). Must not jeopardise validation, accessibility, responsiveness, deployment, or the deadline. Decision in Stage 8.
- **S2 — FAQ:** Requirement (recorded per the junior).
- **S3 — Opening hours, reviews / testimonials:** Optional additions, likely useful; pending client confirmation; decided at content strategy (Stage 7).
- **S4 — Immediate feedback:** Required for user actions (e.g. form submission); must be satisfied within H11.
- **S5 — Content sourcing:** Create or source with attribution (see H13).

### Exclusions (confirmed)

No booking system · no user accounts · no personalisation · no CMS · no payment/login/patient records/dashboard · no translation.

## Active Assumptions

- **A-001:** "Booking" means the visitor is more likely to take a next step toward booking, not that the static site processes bookings (accepted in D-002).
- **A-002:** The Submission Checklist is the operative submission document; the LO PDF's "one-page application" language is a non-operative discrepancy (basis of H1).
- **A-003:** Validation target = zero errors and zero warnings (CHK wording).
- **A-004:** Accessibility target = "no WCAG errors" + contrast + alt text, with WCAG 2.1 AA as reference aim (not full AA certification).
- **A-005:** No explicit minimum Lighthouse score in the provided summaries; completion + review + README evidence is the requirement.
- **A-006:** GitHub Pages is the working default host (junior-indifferent; CHK example).
- **A-007:** No Git branch strategy or commit convention is required by the assessment.
- **A-008:** The contact form mechanism can be decided in Stage 9 within B1 without reopening Stage 2.
- **A-009:** Dark mode is a `could` — a preference, not a requirement (S1).
- **A-010:** Content created/sourced by the junior is acceptable for submission, subject to attribution (H13) and client sanity-check before launch (see R-004).

## Open Questions

All fifteen Stage 2 questions resolved or explicitly recorded by D-003. Carried forward:

- **Q-001 — Client priority ranking** (B4): deferred until client confirmation.
- **Q-002 — Opening hours / testimonials** (S3): pending client confirmation; decided at Stage 7.
- **Q-003 — Map** (B3): inclusion decision deferred (content/technical stages).
- **Q-004 — Contact form mechanism** (B1): Stage 9.
- **Q-005 — Third-party setup time limit** (B2): soft; no exact limit; managed against H10.

## Risks / Blockers

- **R-001 — Deadline (hard):** Monday afternoon → Sunday night; cannot be late; the junior's main task of the week.
- **R-002 — Validation workload:** Zero errors / zero warnings across three pages plus Bootstrap plus custom CSS; validate early and often, not only at the end.
- **R-003 — JavaScript boundary:** Form and UX requirements (B1, S4) must be met without unreviewable custom JS; if no acceptable mechanism is found at Stage 9, form scope must shrink.
- **R-004 — Content verification:** No client content exists; created/sourced content for a real business (credentials, reviews, hours) must be sanity-checked with the client before launch. Inventing reviews or credentials is a professional and ethical risk — handled in Stage 4.
- **R-005 — Dark mode scope creep:** Managed by the S1 conditionality.

## Change Log

- 2026-11-16 — Repository initialised; state transcribed from the working session (D-001, D-002 confirmed; Stage 1 closed)
- 2026-11-16 — Stage 2 opened; junior's answers recorded (assessment, technical, scope, exclusion, and client-asset questions)
- 2026-11-16 — D-003 (Stage 2: constraints and boundaries) recorded — **proposed, awaiting confirmation**; all fifteen Stage 2 questions resolved or recorded; one-page/three-page discrepancy resolved (H1)
