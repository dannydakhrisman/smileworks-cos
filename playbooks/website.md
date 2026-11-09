# Playbook: website

For any website, landing page or section, Nafas or freelance.

## 1. Understand
- Read the project's `CLAUDE.md`. For Nafas, also follow `nafas.website`'s
  own rules (`AGENTS.md`) and its skills.
- Input can be anything: Figma, a wireframe link, a reference site, a brief.
  Say back in 3 lines what you'll build. Ask only if something is missing.

## 2. Plan (wait for Danny's yes)
- List the sections in order, one line each, plus the look: type, colors,
  spacing. Build only after Danny says yes.
- Small change (a fix or tweak, not a new section)? Skip the plan, go to build.

## 3. Build
- Any tool that fits the project.
- Bar: Apple-level. Beautiful, simple, calm. Must not look AI-made.
  Don't:
  - put a border on every card
  - put icons in tinted circles
  - use sparkle icons
  - use purple gradients
  - use emoji as icons
  - center everything
- When Danny rejects a look, add the reason to the "Don't" list above.
- Real content and real images only. No lorem ipsum.
- Works on phone and desktop.

### Type
- Nafas: SF Pro Display, using the Nafas type scale below
  (measured from nafas.com/residential on 2026-11-09).
- Everything else: Inter. If the project has its own brand font, use that.
- One type scale per site, no random sizes. 2 to 3 weights at most.
- Letter spacing normal by default. Only big headlines may go slightly tighter.

**Nafas type scale.** Breakpoints: Desktop ≥1440px · Tablet 810 to 1439px · Phone ≤809px.

| Role | Desktop | Tablet | Phone | Line height | Letter spacing | Weight |
|---|---|---|---|---|---|---|
| Display (hero headline) | 72px | 72px | 34px | 1.1 (phone 1.2) | normal | 500 |
| Hero subtitle | 28px | 28px | 16px | 1.25 (phone 1.3) | normal | 400 |
| Section title | 52px | 42px | 28px | 1.2 | normal | 400 |
| Sub-section title | 42px | 38px | 24px | 1.2 | normal | 400 |
| Lead text | 24px | 24px | 16px | 1.2 (phone 1.25) | normal | 400 |
| Card title | 28px | 28px | 24px | 1.2 (phone 1.1) | normal | 500 |
| Body large | 21px | 21px | 16px | 1.2 | normal | 400 |
| Body | 16px | 16px | 14px | 1.2 to 1.5 | normal | 400 |
| Button (large / small) | 21 / 15px | 21 / 15px | 15px | 1.2 | normal | 400 |
| Eyebrow / label | 15px | 15px | 12px | 1.4 | -0.04em | 400 |
| Caption | 12px | 12px | 12px | 1.2 | normal | 400 |

## 4. Check before showing Danny
- [ ] Looked at it at desktop and phone width
- [ ] Matches the source (Figma, wireframe or brief)
- [ ] Nothing looks AI-made
- [ ] No broken layout, all text readable

## 5. Show Danny → wait for yes
- Show a desktop and a phone screenshot with the result.
- Save screenshots in a temporary folder outside the project, so they are
  never committed. Delete them once the work is shipped.

## 6. Ship (this is "done")
- Freelance: add a version tag and one CHANGELOG line, then push
  as `dannydakhrisman`. Done when it's on GitHub.
- Nafas: open a PR into `dev` as `nafas-danny`, following its CHANGELOG
  rule. Danny does the merge. Done when the PR is open.
- Delete the screenshots from step 5.
- Update: same steps, next version number (v1.1 → v1.2).
- Revert: when Danny says "go back to v1.1", restore that version as a
  new commit (the history stays intact), tag it as the next version, and
  add a CHANGELOG line saying it reverts to v1.1. Only with Danny's yes.
  Nafas: revert through a PR into `dev`, like any other change.
