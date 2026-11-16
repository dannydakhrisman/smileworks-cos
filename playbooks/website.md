# Playbook: website

For any website, landing page or section, for any client. General rules
only: no brand details here. Nafas work: also follow `nafas-website.md`.

## 1. Understand
- Read the project's `CLAUDE.md`.
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
- A brand with its own design system or skills: follow those for color,
  icons, type and buttons. They win over the defaults below.
- Defaults:
  - Color: one neutral base, one primary color. Green, amber and red only
    for status (success, warning, error), never as decoration.
  - Icons: one icon set per site, one line weight, one size grid.
    No mixing sets.

### Type
- Font: the project's brand font. No brand font? Inter.
- One type scale per site, no random sizes. 2 to 3 weights at most.
- Letter spacing normal by default. Only big headlines may go slightly tighter.

**Buttons** (measured from apple.com at 1440px and 390px, 2026-11-16).
Pill shape, regular weight.

| Button | Desktop | Phone |
|---|---|---|
| Main | 44px tall, 17px text, 21px side padding | 36px tall, 14px text, 15px side padding |
| Small | 36px tall, 14px text, 15px side padding | 32px tall, 14px text |

These are web sizes. App screens use 44pt tap targets (`design.md`).

**Phone default for everything else** (measured from apple.com at 390px,
used on landing.page):
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
- Delete the screenshots from step 5.
- Update: same steps, next version number (v1.1 → v1.2).
- Revert: when Danny says "go back to v1.1", restore that version as a
  new commit (the history stays intact), tag it as the next version, and
  add a CHANGELOG line saying it reverts to v1.1. Only with Danny's yes.

