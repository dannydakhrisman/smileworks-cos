# Playbook: Nafas website

For any Nafas web work: a change to nafas.com (the `nafas.website` repo),
or a new Nafas landing page or microsite. Follow `website.md` for the general
steps (plan, build, checks), and this file for everything Nafas.

Don't use `~/Documents/Claude/nafas-danny-ai` (its `skill/` copies and
`web-dev/` folders). That's the old way.

## Where the rules live
- **The look:** the claude.ai skills `nafas-website-design-system`,
  `nafas-website-typescale`, `nafas-website-icons` and `nafas-website-navbar`.
  Load them. Don't use `nafas-website-builder`.
- **Type:** live nafas.com/residential is the benchmark for every Nafas
  project (h0ney, 16 November 2026). Use the updated typescale skill, measured
  from /residential. Until it's uploaded on claude.ai, read
  `~/Documents/Claude/nafas-skills-upload/nafas-website-typescale/SKILL.md`.
  When anything disagrees with live /residential, re-measure it.
- **The repo:** `nafas.website/AGENTS.md`. Re-read it every time.
- **Images and prices:** real images from `nafas.website/site/assets/images/`,
  prices from shop.nafas.com.

## 1. Before you start
- Only touch `nafas.website` when h0ney asks for website work in this
  session. Other sessions work there in parallel.
- Repo change: `git fetch && git pull`, then a new branch off `dev`. Use a
  separate worktree if the clone has someone else's uncommitted work.
- New landing page outside the repo: its own folder in `~/Documents/Claude/`
  with a short `CLAUDE.md`.

## 2. Build
- Change every copy of a page: global, id-en, id-id, qa-en, ae-en. Keep
  the regional differences (prices, phone numbers, WhatsApp links).
- Links relative with `.html`. Videos only from cdn.nafas.com.
- Header and footer: inside the repo, use its own. Outside, the navbar skill
  copies them from live nafas.com.
- **Section spacing on phones: 64px above and below every section** (Nathan,
  26 November 2026, copied from eightsleep.com, which uses 64 / 64 on every
  section at 390). Measure from the section's edge to its first and last
  visible thing (text, picture, card or button), not just the CSS padding:
  inner boxes, fixed heights and absolutely placed cards add or hide space.
  Heroes, full-screen and sticky scroll sections keep their own, and so do
  logo strips, full-bleed photo banners, pictures that run to a section's
  edge on purpose, and stacks of cards a few px apart (Foundation). Measure
  with animations switched off: a reveal still moving (translateY 16px) reads
  as 16px more room than there is. Page rules like
  `.x[data-section="y"]` can outrank an override, so remeasure after adding
  it. Nafas had 16 to 56px, which read as tight. Desktop and tablet: not
  decided yet. Measure with `tools/section-spacing.mjs`.
- **Type is SF Pro Display.** Inter was tried and undone on 26 November 2026
  (Nathan), with the layout fixes made for it. A change of typeface or any
  change on every page: Nathan checks nafas.dev before it is released.
- **Line break on phones only:** `<br class="nf-hide-desktop nf-hide-tablet">`.
- **A line wraps before it's full:** `text-wrap: pretty` or `balance` moves
  words down early. Set `text-wrap-style: auto` (not the `text-wrap`
  shorthand, which also undoes `white-space: nowrap`).
- **Hero that fills the phone screen:** `100lvh` for the background,
  `100svh` for where the content sits, so Safari's bar doesn't show the next
  section.
- **Hairline under a moving circle (Safari):** `will-change: transform;
  backface-visibility: hidden` on it.

## 3. Check
- Repo: run `python3 -I scripts/check_refs.py site`
  (with `SSL_CERT_FILE=/etc/ssl/cert.pem` on this Mac).
- Script-check every instance on every page and region the change touches,
  at 1440, 1000 and 390. Use `smileworks-cos/tools/`: `layout-diff.mjs`
  (old commit in a `git worktree` against the new one; the repo's own
  wrapper is `IGNORE="main.nf-main"`), `broken-images.mjs`, `image-weight.mjs`.
- Prices, or anything on the ad pages (`/ads/...`): run
  `node tools/nafas/price-check.mjs <repo site>` before a release and on
  nafas.com after it. Ad pages keep their own copy of prices and styles, so a
  change to Residential does not reach them by itself (the Qatar ad page
  showed old 2 and 3 Bed prices from October to 26 November 2026).
- Open it in Safari and scroll to the change.

## 4. Preview on pages.nafas.systems (only when h0ney says publish)
- Zip the pages in a scratch folder: `index.html` at the top, every link
  relative, only the images that are used.
- In Safari, in its own window: pages.nafas.systems/member/dashboard →
  New site (or Deploy on the existing site, so the link stays) → name + slug
  → attach the zip with a page script (the file picker can't be driven) →
  Create & deploy.
- Login page? Stop and ask h0ney. Never type their password.
- Open `pages.nafas.systems/s/<slug>/` in Safari and check that pages,
  fonts and images load. Send h0ney the link + screenshots.

## 5. PR into dev (after h0ney's yes on the preview)
- Push as `nafas-danny` and open a pull request into `dev`.
- One CHANGELOG line under Unreleased: "(#PR, requested by <who>)". Ask
  h0ney who requested it. It's often Nathan or Thousif, not h0ney.
- Merge only when h0ney says "merge". Then check it on nafas.dev.

## 6. Release to nafas.com
- Only when h0ney asks AND has checked nafas.dev on a computer and a phone.
- Show `git diff origin/main origin/dev` first, so they know what ships.
- Turn Unreleased into the next version, then run the "Deploy to nafas.com"
  workflow.
- Batch: small fixes go to nafas.dev through the day and ship in one or two
  releases, not one each (26 November had 7). One session does the
  releases; other sessions stop at "merged on dev".
- Measure nafas.dev and nafas.com one at a time, never in parallel (two
  headless Chromes on one port mixed up results).
- Never push or merge to `main` directly.
- Revert: a PR into `dev`, like any other change.

### Holding back unapproved work
The Deploy button ships all of dev. To leave something out:
1. Release PR into dev: hold back only the held work, not whole pages. A file
   that only carries held work (e.g. 40-hepa.css/js) comes from main; a page
   that also has other changes keeps them, with only the held section
   swapped back to main's version. Turn the rest of Unreleased into the new
   version. Merge, wait for nafas.dev. (Swapping whole EcoFlow pages kept
   alt text, breadcrumbs and phone images off nafas.com for v2.10.3 to
   v2.10.6.)
2. Confirm `git diff origin/main origin/dev` is only the release, then deploy.
3. Restore PR into dev: the held files from dev's commit before the release,
   plus the go-live time (WIB) and the Commit line in the CHANGELOG.
Held back now: EcoFlow HEPA (#42 to #49), until Nathan approves.

### Known false alarms (check by hand, then re-run)
- nafas.com: "/ads not answered by Framer" right after "Broken pipe". A bug in
  scripts/verify-production.sh line 94 (reported to Ardimas in #87). Check
  that /ads returns the framer-site-id header.
- nafas.dev: "unknown address was not answered by the origin server". A timeout.
- PageSpeed right after a deploy: scores drop (Home read 54 after v2.10.8)
  because Cloudflare hasn't cached the new files yet. Test the next day.
