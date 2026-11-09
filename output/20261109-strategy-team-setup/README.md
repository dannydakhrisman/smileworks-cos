# Team setup: projects, hiring rules, first reviewer

**Request (Danny, 2026-11-09):** Smileworks stays the only leader. Nafas and every side project sit under it. Keep the team simple: most work is adaptive and on request, not scheduled.

**Assigned:** Chief of Staff
**Status:** Approved by Danny on 2026-11-09 (D-010 to D-016). Trial until 2026-11-23.

## What changes

| File | Change |
|---|---|
| `PROJECTS.md` (new) | One row per project: what it is, where it lives, what to read first, status. GitHub account rule. Nafas data rule. |
| `OPERATING-MODEL.md` | §2 step 1: read the project's row first. §4 Hiring: the new rules below. |
| `CONTEXT.md` | Side projects now point to `PROJECTS.md`. |
| `ROSTER.md` | `review-quality-check` added as a pending proposal. |
| `README.md` | `PROJECTS.md` added to the file table. |

## Proposed decisions (added to `DECISIONS.md` only after approval)

| ID | Decision | Why |
|---|---|---|
| D-010 | Projects live in `PROJECTS.md`. A new project adds a row, never an agent | Many side projects without a growing team |
| D-011 | Hiring: third repeat gets a playbook first; hire an agent only for a job that must run on its own or review independently; per job, never per project; cap of 5 active agents; pause after 30 days unused | Most work is adaptive, which the Chief of Staff handles directly. Matches Anthropic's "start simple" guidance and Lauren Tan's pstack |
| D-012 | GitHub account follows the repo owner: `dannydakhrisman/*` uses dannydakhrisman, `nafas-id/*` uses nafas-danny. Nafas files stay in `nafas-danny-ai` on the Mac | Nafas pushes never come from a personal account; Nafas data stays off the personal GitHub |
| D-013 | Hire `review-quality-check` v1.0, on request, evidence required for every issue (see `proposals.md`) | D-001 separates makers from reviewers, but no reviewer exists yet |
| D-014 | Corrected twice becomes a written rule (Read first file, playbook or `CONTEXT.md`) | The same mistake is never corrected a third time |
| D-015 | This setup is on trial until 2026-11-23, then reviewed rule by rule | Danny keeps only what actually helps |
| D-016 | Retire `ops-email-digest`. Its scheduled task (`trig_016MKk9M7drvVZ5QcWpMUFZZ`) was paused on 2026-11-09; the agent file and past outputs stay in git history | Danny doesn't need it |

## Change log

- 2026-11-09: Draft created.
- 2026-11-09: Added playbooks before agents, evidence rule for reviews, lessons rule and the 2-week trial (D-014, D-015).
- 2026-11-09: Dropped the offline Nafas skills decision (Danny: too early). Nafas work still reads `nafas-danny-ai/CLAUDE.md` first, which covers it. Renumbered to D-010 to D-016.
