# Playbook: PM

For product work on any project, Nafas or freelance.

Two docs per project:
- **Discovery doc:** the thinking. Context, ideas, and how we picked one.
- **PRD:** the decision. What we build, for the winning idea only.

Small tasks (a copy change, a bug) skip this playbook. Just do the work.

## 1. Understand
- Read the project's `CLAUDE.md`.
- Run `/in-your-own-words` and wait for Danny's yes.

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
   → Danny runs the interviews and shares his notes. Add the findings.
4. **Ideas:** 6 to 10 solutions, one line each
5. **Matrix:** place each idea on impact and effort, with a one-line
   reason. Quick wins (high impact, low effort), Big projects (high,
   high), Fill-ins (low, low), Thankless (low impact, high effort).
   Show it as a picture.
6. **Effort:** ask Danny what effort is OK this time (quick wins only,
   big projects OK, or no limit). Danny moves any idea he thinks is
   placed wrong. Write his answer down.
7. **Prototypes:** build the top 2 to 3 ideas at the same time, one
   agent each. Quick prototypes only (clickable wireframe or one-page
   concept). For each: link, screenshot, what we learned.
8. **Decision:** recommend one (or a mix of the best parts) against the
   problem in 2. Danny chooses. Mark every idea:
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
   onboarding in week 1")
7. Open questions (if any)

## 4. Check before showing Danny
- [ ] Every claim has a source or is marked "to verify"
- [ ] No made-up numbers
- [ ] Readable in 5 minutes
- [ ] Ran `/unslop` and `/technical-writing`

## 5. Save and show
- Write every doc in English, even when Danny asks in Indonesian.
- Nafas → Microsoft 365 (a Word doc in OneDrive).
- Danny's own work → Google Docs.
- Discovery doc and PRD sit in the same folder.
- Version line under the title ("v1.0 · 9 Nov 2026") and a short change
  log at the end. Each approved update gets the next version. To go
  back, use the doc's built-in version history, with Danny's yes.
- Send Danny the link. Done when Danny approves.
- After approval, ask Danny: "Share this with anyone yet?" Share only
  with the people he names. Never share without his yes.
- Next version of a product: start from the Parked ideas in the
  Discovery doc, not from zero.
