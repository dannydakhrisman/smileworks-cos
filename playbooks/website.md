# Playbook: website

For any website, landing page or section, Nafas or freelance.

## 1. Understand
- Read the project's `CLAUDE.md`. For Nafas, also follow `nafas.website`'s
  own rules (`AGENTS.md`) and its skills.
- Input can be anything: Figma, a wireframe link, a reference site, a brief.
  Say back in 3 lines what you'll build. Ask only if something is missing.
- Reference sites: read the page, and ask Danny for a screenshot of the part
  he means. Page readers often drop images and charts, so the look can be missed.
- Decide the language and date format up front (e.g. US English, "November 15,
  2026") and write it in the project's `CLAUDE.md`.

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
  - put a key number in a tinted card with a glow; use a hairline and
    plain type instead (landing.page)
  - add progress bars, meters or numbers just for effect (landing.page)
- When Danny asks for a change:
  - Move means move. Don't redesign it or add new elements.
  - For a small change, keep the current layout as it is.
  - Fix every instance on every page, not only the one in the screenshot.
- Spacing: set one rhythm per site (between sections, heading to content,
  panel to panel) and write the numbers down. Measure it with a script, don't
  eyeball it.
- Interactions: check what else changes on hover, tap, search or empty
  results (nothing should dim, shift or rewrap that wasn't meant to).
- Docs: a guide for someone who writes content covers only what to write. Layout
  and design notes go in a separate file for whoever builds the pages.
- Sample content: mark it clearly while it is a draft. If the marks are taken
  off, list what still needs review before launch.
- When Danny rejects a look, add the reason to the "Don't" list above.
- Real content and real images only. No lorem ipsum.
- Works on phone and desktop.

### Design system
- Nafas: load the skills `nafas-website-design-system`, `nafas-website-icons`,
  `nafas-website-navbar` and `nafas-website-typescale`, and follow them for
  color, icons, buttons and layout.
  - Where a skill disagrees with the type scale below, the type scale wins
    (it's measured from the live site).
  - Navbar and footer: the navbar skill copies them from live nafas.com,
    so they always match. Inside the `nafas.website` repo, use its own.
- Everything else:
  - Color: one neutral base, one primary color. Green, amber and red only
    for status (success, warning, error), never as decoration.
  - Icons: one icon set per site, one line weight, one size grid.
    No mixing sets.

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

**Phone default for everything else** (measured from apple.com at 390px,
used on landing.page):
- Buttons 36px tall, 14px text, 16px side padding. Small buttons 32px.
- 112px between sections.
- A row of cards becomes a left and right swipe row, with the next card
  peeking in. Don't stack them.
- Headlines: 36px display, 28px section title, balanced line breaks.

## 4. Check before showing Danny
- [ ] Looked at it at desktop and phone width
- [ ] Matches the source (Figma, wireframe or brief)
- [ ] Nothing looks AI-made
- [ ] No broken layout, all text readable, no sideways scroll on phone
- [ ] Every number has a real source; none made up or rounded to look better
- [ ] Spacing measured against the site's rhythm, at desktop and phone width
- [ ] Hover, search and empty states checked, not only the default view
- [ ] Every sum or conversion in the text re-done (e.g. distance ÷ speed)

## 5. Show Danny → wait for yes
- Show a desktop and a phone screenshot with the result.
- Save screenshots in a temporary folder outside the project, so they are
  never committed. Delete them once the work is shipped.

## 6. Ship (this is "done")
- Freelance: add a CHANGELOG entry, tag the version, push as
  `dannydakhrisman`, and create a GitHub release with the same notes.
  Follow the project's `CLAUDE.md` if it has its own steps.
  Done when the release is on GitHub.
- Nafas: follow the 3 steps below. Done when it's live on nafas.com.
- Delete the screenshots from step 5.
- Update: same steps, next version number (v1.1 → v1.2).
- Revert: when Danny says "go back to v1.1", restore that version as a
  new commit (the history stays intact), tag it as the next version, and
  add a CHANGELOG line saying it reverts to v1.1. Only with Danny's yes.
  Nafas: revert through a PR into `dev`, like any other change.

### Nafas: 3 steps to production
1. Preview on pages.nafas.systems
   - Build in its own folder, `nafas-danny-ai/web-dev/YYYYMMDD-<slug>-vN`,
     with `index.html` at the root and every link relative.
   - In Safari: pages.nafas.systems/member/dashboard → New site → name +
     slug → upload the folder → Create site. Updating: open the site and
     upload the next version's folder. Keep the slug so the link stays.
   - If it asks for a login, stop and ask Danny. Never type his password.
   - Send Danny the link `pages.nafas.systems/s/<slug>/` + screenshots.
2. GitHub (after Danny's yes on the preview)
   - Apply the change to `nafas.website` on a branch, following its
     `AGENTS.md`, plus one line under Unreleased in its CHANGELOG.
   - Open a PR into `dev` as `nafas-danny`. Merge only when Danny says
     "merge". Then check it on nafas.dev.
3. Production
   - Only when Danny asks and confirms he checked nafas.dev on a computer
     and a phone: run the "Deploy to nafas.com" workflow.
   - Never push or merge to `main` directly.
