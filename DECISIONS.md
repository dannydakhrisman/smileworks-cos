# Decision Log

Newest first. Every entry was approved by Danny.

| ID | Date | Decision | Why |
|---|---|---|---|
| D-016 | 2026-11-09 | Retired `ops-email-digest`. Its scheduled task (`trig_016MKk9M7drvVZ5QcWpMUFZZ`) is paused; the agent file and past outputs stay in git history. The `nafas-danny-ai` morning brief no longer summarizes email either | Danny doesn't need email summaries |
| D-015 | 2026-11-09 | This setup (D-010 to D-015) is on trial until 2026-11-23, then reviewed rule by rule | Danny keeps only what actually helps |
| D-014 | 2026-11-09 | Corrected twice becomes a written rule: in the project's Read first file, a playbook or `CONTEXT.md` | The same mistake is never corrected a third time |
| D-013 | 2026-11-09 | Hired `review-quality-check` v1.0: on request, report only, evidence required for every issue | D-001 separates makers from reviewers, but no reviewer existed |
| D-012 | 2026-11-09 | GitHub account follows the repo owner: `dannydakhrisman/*` uses dannydakhrisman, `nafas-id/*` uses nafas-danny. Nafas files stay in `nafas-danny-ai` on the Mac | Nafas pushes never come from a personal account; Nafas data stays off the personal GitHub |
| D-011 | 2026-11-09 | Hiring: third repeat gets a playbook first; hire an agent only for a job that must run on its own or review independently; per job, never per project; cap of 5 active agents; pause after 30 days unused | Most work is adaptive, which the Chief of Staff handles directly. Based on Anthropic's "start simple" guidance and Lauren Tan's pstack |
| D-010 | 2026-11-09 | Projects live in `PROJECTS.md`. A new project adds a row, never an agent | Many side projects without a growing team |
| D-009 | 2026-11-06 | `ops-email-digest` v1.0 format approved after the test email (it landed in the Gmail inbox, not spam) | Danny reviewed the real output |
| D-008 | 2026-11-06 | The repo stores email summaries only, never full bodies | Limits how much Nafas data sits outside Outlook |
| D-007 | 2026-11-06 | Hired `ops-email-digest`: weekdays 07:45 WIB, emails from Nathan, Nikolas and Ardimas, sent to dannyrizkyp@gmail.com, no reviewer | Daily triage of the three priority senders |
| D-006 | 2026-11-06 | Outputs live in the GitHub repo; synced to laptop via `git clone` / `git pull` | One source of truth that's reachable from anywhere |
| D-005 | 2026-11-06 | Every decision needs Danny's approval | Danny stays in control |
| D-004 | 2026-11-06 | All outputs go to `output/yyyymmdd-category-title/`; updates stay in the same folder | Every deliverable is easy to find and has one history |
| D-003 | 2026-11-06 | Agent naming: `category-specifictask` | The roster sorts itself by area |
| D-002 | 2026-11-06 | Categories approved: research, content, design, ops, comms, strategy, review (can change later) | Consistent naming |
| D-001 | 2026-11-06 | Operating model: Chief of Staff handles every request; one agent = one job; makers separate from reviewers; hiring proposal whenever no agent fits | Modular agents with traceable, easy-to-fix output |
