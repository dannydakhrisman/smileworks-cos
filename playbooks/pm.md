# Playbook: PM

For product work on any project, Nafas or freelance.

Two docs per project:
- **Discovery doc:** the thinking. Context, ideas, and how we picked one.
- **PRD:** the decision. What we build, for the winning idea only.

Small tasks (a copy change, a bug) skip this playbook. Just do the work.

## 1. Understand
- Read the project's `CLAUDE.md`.
- Run `/in-your-own-words` and wait for h0ney's yes.

## 2. Discovery doc
Start the doc, then fill it step by step. Keep every idea in it, also
the ones that lose.

1. **Background:** what's going on, and why now
2. **Problem:** the problem in 2 to 3 sentences, plus how we'll know it's
   fixed (1 to 3 signals)
3. **Research** (only when users or the problem are unclear):
   - Research questions: 3 to 5 things we need to find out
   - Interview questions: 8 to 12 open questions, and who to ask.
     Ask about past behavior ("When did you last...?", "How do you
     handle it today?"), not opinions about our idea ("Would you
     use...?"). Aim for at least 5 interviews per user type.
   → h0ney runs the interviews and shares their notes. Add the findings.
4. **Ideas:** 6 to 10 solutions, one line each
5. **Impact and effort:** a simple table, one row per idea. No matrix
   picture.
   - Impact (high or low): which pirate metric it moves (Acquisition,
     Activation, Retention, Referral, Revenue) and how much. One line
     of reason.
   - Effort (high or low): the technical development work to build it
     (screens, backend, integrations, data). One line of reason.
6. **Effort:** ask h0ney what effort is OK this time (quick wins only,
   big projects OK, or no limit). h0ney moves any idea they think is
   placed wrong. Write their answer down.
7. **Prototypes:** build the top 2 to 3 ideas at the same time, one
   agent each. Quick prototypes only (clickable wireframe or one-page
   concept). For each: link, screenshot, what we learned.
8. **Decision:** recommend one (or a mix of the best parts) against the
   problem in 2. h0ney chooses. Mark every idea:
   - Winner: why
   - Parked: why not now, and when to look again
   - Dropped: why

## 3. PRD (for the winner)
1. Current problem: what's wrong today, with evidence
2. Problem we solve: the one problem this fixes
3. What we build: the solution in plain words, plus one line on what's
   out of scope. Add: "Other options: see Discovery doc, section 8."
4. Deliverable: exactly what gets delivered
5. Timeline: milestones with dates
6. Success: 1 to 3 signals that show it worked (e.g. "50% of users finish
   onboarding in week 1"). Check each signal is measured today. If not,
   the tracking is part of the deliverable.
7. Open questions (if any)

## 4. Check before showing h0ney
- [ ] Every claim has a source or is marked "to verify"
- [ ] No made-up numbers
- [ ] Readable in 5 minutes
- [ ] Ran `/unslop` and `/technical-writing`

## 5. Save and show
- Write every doc in English, even when h0ney asks in Indonesian.
- Nafas → Microsoft 365 (a Word doc in OneDrive).
- h0ney's own work → Google Docs.
- Discovery doc and PRD sit in the same folder.
- Version line under the title ("v1.0 · 9 Nov 2026") and a short change
  log at the end. Each approved update gets the next version. To go
  back, use the doc's built-in version history, with h0ney's yes.
- Send h0ney the link. Done when h0ney approves.
- After approval, ask h0ney: "Share this with anyone yet?" Share only
  with the people they name. Never share without their yes.
- Next version of a product: start from the Parked ideas in the
  Discovery doc, not from zero.
