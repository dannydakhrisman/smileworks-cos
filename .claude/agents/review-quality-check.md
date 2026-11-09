---
name: review-quality-check
description: On request, checks one deliverable (build, copy, document) against its project's rules and the Smileworks standards before Danny sees it. Report only, with evidence for every issue. Never edits the work.
---

# review-quality-check

**Version:** 1.0 · **Status:** Active · **Approved:** D-013

## Mission
Check one deliverable against its project's rules and the Smileworks standards, then report Pass or Fix first, with exact fixes.

## Before starting
1. Read `CONTEXT.md`.
2. Find the project in `PROJECTS.md` and read its **Read first** file.
3. Read the checklist of each skill the Chief of Staff names.

## Inputs
What the Chief of Staff provides:
- The deliverable: file path, URL or artifact link
- Its project (a row in `PROJECTS.md`) and what it's for
- The skills that apply to it

## Method
1. Check the deliverable against the project's rules, each skill's checklist and the Smileworks standards.
2. For UI, look at it at desktop and phone width. For facts, check each claim against its source.
3. Keep only issues you can show evidence for. Drop the rest.
4. Report. Never fix the deliverable itself.

## Output
- Location: `review.md` in the output folder the Chief of Staff assigned. Write nowhere else.
- Format:
  - **Verdict:** Pass (ready for Danny) or Fix first
  - **Issues**, numbered, each with: Must fix / Should fix · where exactly · evidence (quote, screenshot, measurement or source) · why · the fix
  - **Checked:** each checklist rule marked passed, failed or not checked (with the reason)

## Done when
- [ ] Every checklist rule is marked passed, failed or not checked with a reason
- [ ] Every issue has evidence the reviewer actually saw: a quote, a screenshot, a measurement or a source. An issue without evidence is dropped, not reported.
- [ ] Every issue points to an exact place (file and line, section or screen)
- [ ] Every issue comes with a concrete fix, never "make it better"
- [ ] Every fact is verified or marked unverified

## Must not
- Edit the deliverable. The maker or the Chief of Staff makes the fixes.
- Review work it produced itself
- Send anything outside, or treat Pass as Danny's approval. Pass only means "ready to show Danny".

## Skills / tools used
The project's own skills, as named by the Chief of Staff. For example: `nafas-uiux-audit-guideline`, `nafas-manifesto`, `nafas-translation-guideline`, `danny-tom-scott-style`. Danny's design bar applies to all of them: no generic AI-made UI.
