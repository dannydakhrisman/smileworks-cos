# Playbook: website

For any website, landing page or section, for any client. General rules
only: no brand details here. Nafas work: also follow `nafas-website.md`.

## 1. Understand
- Read the project's `CLAUDE.md`.
- Input can be anything: Figma, a wireframe link, a reference site, a brief.
  Say back in 3 lines what you'll build. Ask only if something is missing.
- Reference sites: read the page, and ask h0ney for a screenshot of the part
  they mean. Page readers often drop images and charts, so the look can be missed.
- Decide the language and date format up front (e.g. US English, "November 15,
  2026") and write it in the project's `CLAUDE.md`.

## 2. Plan (wait for h0ney's yes)
- List the sections in order, one line each, plus the look: type, colors,
  spacing. Build only after h0ney says yes.
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
- When h0ney asks for a change:
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
- When h0ney rejects a look, add the reason to the "Don't" list above.
- Real content and real images only. No lorem ipsum.
- Works on phone and desktop.

### Images and speed (every site, from the start)
- Formats: photos in WebP. Share preview image (og:image) in JPG,
  1200 × 630, because some apps don't show WebP previews. Tab icon in PNG.
  Logos and icons in SVG.
- Size: no bigger than the largest box the image fills, at 2x (3x on
  phones). Measure cropped boxes (object-fit: cover) and tablets too.
- Phones get their own smaller copies (`srcset` + `sizes`); computers keep
  the full one.
- The first image on screen is never lazy and gets `fetchpriority="high"`.
  A video's still image is preloaded.
- Images far below the first screen: `loading="lazy"`.
- The main font is preloaded (`<link rel="preload" as="font" crossorigin>`).
- Nothing on the first screen fades or animates in. If it starts invisible,
  Google finds no main element ("NO_LCP"); if it animates in, the main
  element waits for the animation (a score card waited 2.0 s on nafas.com).
- Before a speed fix, read PageSpeed's LCP breakdown: download time against
  render delay. A long render delay is a script or an animation, not file
  size, and fewer or smaller files won't move it.
- Many stylesheets per page: combine them into one when the site is
  published, not in the source files, so people keep editing the section
  files (nafas.com: 18 files to 1, phone score 42 to 51).
- WebP quality 92 by default: 80 smears fine detail (text, lines, maps).
  Check that each new file is smaller than the old one; some photos grow at
  92, then use 85 for those (landing.page).
- Check with `tools/image-weight.mjs` and `tools/broken-images.mjs`.

### Share card (og:image)
- Build it as an HTML page from the site's own parts (logo, font, colors,
  a still of the hero), not in a design app. Render it in headless Chrome
  at 2x and scale it down to a 1200 × 630 JPG (`tools/chrome.mjs`). A text
  change is then one edit and one render.
- Keep the source HTML and the render script outside the site folder, so
  they are never published.
- Show the brand and what it makes (e.g. the products by name), not only a
  slogan. Big type: the card is shown small in chats.
- WhatsApp, Slack and LinkedIn keep the old preview for links already shared.
  A new link (or `?v=2`) shows the new card.

### Analytics (GA4)
- h0ney owns the property and adds the client later. Write the plan in the
  project (`ANALYTICS.md`): ID, events, custom dimensions, launch steps.
- The tracking script runs only on the real domain, so local previews and
  test copies send nothing. A `?consent=preview` switch shows the banner and
  prints events in the console instead.
- Cookie banner only where the law asks (EU and UK), guessed from the
  browser's time zone. Everyone else is tracked on arrival. Banner and
  "No thanks" also on a Cookie settings link on the Privacy page, and the
  Privacy page names the cookies and how long they are kept.
- The banner never covers a button: a slim bar on desktop, one line on
  phones. Check by script at every width that no `.btn` sits under it.
- Events: one per goal (e.g. `generate_lead` with a `lead_type`), plus the
  details you want to filter by. Create the custom dimensions on day one;
  GA does not fill them in for the past.
- An event can be starred as a key event only after GA has received it
  (up to 24 hours). Plan that as a next-day step, with the funnel or path
  report.
- Test end to end before launch: serve a copy on another port with the
  domain check pointed at it, visit it in Safari, and watch GA → Realtime.

### Gate page (stealth or coming soon)
- A passcode checked in the page's code keeps casual visitors out. It is not
  security: the pages are still on the server. Real protection is at the
  host (e.g. Cloudflare Access). Say so in the code and to the client.
- Keep Privacy and Terms open. The gate gets `noindex`.
- After the code, send the visitor back only to a page on the same site
  (a `?next=` that starts with one `/`), never to another domain.
- Load the next page in the background (hidden iframe) while the "connecting"
  animation runs, so the animation is the loading screen and the page opens
  from the cache.
- The site's own look and the site's own parts (logo, footer, an animation
  from the site). A reference site shows the idea, not the look to copy.
- Turning it off is one line (`STEALTH = false`) plus a cache bump. Note the
  temporary passcode in the project until the client gives the real one.

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

## 4. Check before showing h0ney
- [ ] Looked at it at desktop and phone width
- [ ] Matches the source (Figma, wireframe or brief)
- [ ] Nothing looks AI-made
- [ ] No broken layout, all text readable, no sideways scroll on phone
- [ ] Every number has a real source; none made up or rounded to look better
- [ ] Spacing measured against the site's rhythm, at desktop and phone width
- [ ] Hover, search and empty states checked, not only the default view
- [ ] Every sum or conversion in the text re-done (e.g. distance ÷ speed)
- [ ] Change to an existing site: nothing else moved (`tools/layout-diff.mjs`)
      and no broken images (`tools/broken-images.mjs`). See `tools/README.md`.
      Moved elements you didn't touch can come from the site's own script
      styling new markup (e.g. links inside `<noscript>`); fix the markup,
      don't ignore the diff
- [ ] Change to how pages are built or loaded (combined files, script
      order): every page compared at desktop and phone width, not a sample.
      Load-timing bugs show on some pages only (a Residential layout on
      nafas.com measured before its fonts arrived)

## 5. Show h0ney → wait for yes
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
- Revert: when h0ney says "go back to v1.1", restore that version as a
  new commit (the history stays intact), tag it as the next version, and
  add a CHANGELOG line saying it reverts to v1.1. Only with h0ney's yes.

