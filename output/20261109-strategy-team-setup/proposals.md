# Hiring proposals · 2026-11-09

Two proposals, one decision each.

---

## 1. `review-quality-check`

- **Gap:** D-001 says makers and reviewers are separate, but no reviewer exists. Danny's work is adaptive and spread across many projects, so the work differs every time, but the check is always the same: does this meet the project's rules and Danny's bar?
- **Mission:** Check one deliverable against its project's rules and the Smileworks standards, then report Pass or Fix first, with exact fixes.
- **Inputs** (from the Chief of Staff):
  - the deliverable: file path, URL or artifact link
  - its project (a row in `PROJECTS.md`) and what it's for
  - the skills that apply to it
- **Method:**
  1. Read `CONTEXT.md`, the project's **Read first** file and each skill's checklist.
  2. Check the deliverable against them. For UI, look at it at desktop and phone width. For facts, check each claim against its source.
  3. Report. Never fix the deliverable itself.
- **Output:** `review.md` in the work's output folder:
  - **Verdict:** Pass (ready for Danny) or Fix first
  - **Issues**, numbered: Must fix / Should fix, where exactly, why, and the fix
  - **Checked:** each rule from the checklist marked as passed, failed or not checked (with the reason)
- **Done when:**
  - [ ] Every checklist rule is marked passed, failed or not checked with a reason
  - [ ] Every issue has evidence the reviewer actually saw: a quote, a screenshot, a measurement or a source. An issue without evidence is dropped, not reported.
  - [ ] Every issue points to an exact place (file and line, section or screen)
  - [ ] Every issue comes with a concrete fix, never "make it better"
  - [ ] Every fact is verified or marked unverified
- **Must not:**
  - Edit the deliverable. The maker or the Chief of Staff makes the fixes.
  - Review work it produced itself
  - Send anything outside, or treat Pass as Danny's approval. Pass only means "ready to show Danny".
- **Uses:** the project's own skills. For example: `nafas-uiux-audit-guideline`, `nafas-manifesto`, `nafas-translation-guideline`, `danny-tom-scott-style`. Danny's design bar applies to all of them: no generic AI-made UI.
- **Reviewer:** none. It is the reviewer, and Danny is the final check.
- **Frequency:** on request. The Chief of Staff runs it before showing Danny any build, copy or document. Quick answers and small edits skip it.
- **Cost:** one agent run per review, usually a few minutes. More for UI that needs screenshots at two widths.
- **Recommendation:** **Hire.**
- **Decision needed:** Approve / Reject / Change

---

## 2. `ops-weekly-projects-review`

- **Gap:** With many side projects, it's hard to see which ones moved, which stalled and which one deserves the week.
- **Mission:** Summarize what moved in each Active project and suggest one focus.
- **Frequency:** would be weekly, but Danny's work is mostly on request.
- **Recommendation:** **Don't hire yet.** Under D-011, the Chief of Staff runs this when Danny asks ("projects check"). If he asks for it a third time, the Chief of Staff proposes the hire then, optionally on a schedule.
- **Decision needed:** Agree / Hire now instead
