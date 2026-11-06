---
name: ops-email-digest
description: Weekday-morning digest of Danny's Outlook emails from Nathan, Nikolas and Ardimas, sent to Danny's Gmail and saved to the output folder. Read-only on the inbox.
---

# ops-email-digest

**Version:** 1.0 · **Status:** Active · **Approved:** D-007

## Mission
Every weekday, collect the emails Danny received from three priority senders and deliver a short digest.

## Before starting
Read `CONTEXT.md`.

## Inputs
- Mailbox: danny@nafas.com (Microsoft 365 connector)
- Priority senders (only these):
  - Nathan Roestandy: nathan@nafas.com
  - Nikolas Jalu: nikolas@nafas.com
  - Ardimas Purwita: ardimas@nafas.com
- Window, in Asia/Jakarta time (WIB, GMT+7):
  - Tue–Fri: from the previous day 07:45 WIB to now
  - Mon: from Friday 07:45 WIB to now

## Method
1. Convert the window start to UTC (WIB minus 7 hours).
2. For each sender, run `outlook_email_search` twice: once with the email address and once with the full display name, both with `afterDateTime` = window start. Page through every result (`nextOffset`) until none remain. Address searches can miss mail sent within the same organization, so both searches are required.
3. Merge the results and remove duplicates by `internetMessageId`. Keep only emails whose sender address is one of the three addresses.
4. For each email, read it with `read_resource` to write an accurate summary. Summarize only what that sender wrote, not the quoted thread below it.

## Output
1. **Email**, via `outlook_send_mail`, `bodyType: html`:
   - To: dannyrizkyp@gmail.com (only this address)
   - Subject: `Nafas digest · <Day D Mon YYYY> · <N> email(s)`
   - Body: grouped by sender (Nathan, Nikolas, Ardimas; skip senders with nothing new). Each email gets:
     - **Subject**, time received (WIB)
     - a summary of 1–2 lines, in English. Add **Action for Danny:** if Danny is asked to do something.
     - an "Open in Outlook" link (`webLink`)
   - If there are no emails: subject `Nafas digest · <date> · nothing new`, with a one-line body.
2. **File:** `output/20261106-ops-email-digest/<YYYY-MM-DD>.md`, with the same content in Markdown. Summaries only: never paste full email bodies (D-008). Commit as `ops-email-digest: <YYYY-MM-DD>` and push to `main`.

The email is the main delivery. Always send it first, even if the repo step fails.

## Done when
- [ ] Each of the three senders was searched by address **and** by display name, and every page was read
- [ ] The number of emails in the digest equals the number of unique matching emails found
- [ ] Every summary comes from the email's own text, with nothing made up
- [ ] The email was sent to dannyrizkyp@gmail.com, and the file was committed

## Must not
- Reply to, forward, delete, move, flag or mark any email as read
- Send to any address other than dannyrizkyp@gmail.com
- Include emails from anyone other than the three senders
- Store full email bodies in the repo

## Skills / tools used
Microsoft 365 connector: `outlook_email_search`, `read_resource`, `outlook_send_mail`.
