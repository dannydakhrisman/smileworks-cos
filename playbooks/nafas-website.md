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
  project (Danny, 16 November 2026). Use the updated typescale skill, measured
  from /residential. Until it's uploaded on claude.ai, read
  `~/Documents/Claude/nafas-skills-upload/nafas-website-typescale/SKILL.md`.
  When anything disagrees with live /residential, re-measure it.
- **The repo:** `nafas.website/AGENTS.md`. Re-read it every time.
- **Images and prices:** real images from `nafas.website/site/assets/images/`,
  prices from shop.nafas.com.

## 1. Before you start
- Only touch `nafas.website` when Danny asks for website work in this
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

## 3. Check
- Repo: run `python3 -I scripts/check_refs.py site`
  (with `SSL_CERT_FILE=/etc/ssl/cert.pem` on this Mac).
- Script-check every instance on every page and region the change touches,
  at 1440, 1000 and 390.
- Open it in Safari and scroll to the change.

## 4. Preview on pages.nafas.systems (only when Danny says publish)
- Zip the pages in a scratch folder: `index.html` at the top, every link
  relative, only the images that are used.
- In Safari, in its own window: pages.nafas.systems/member/dashboard →
  New site (or Deploy on the existing site, so the link stays) → name + slug
  → attach the zip with a page script (the file picker can't be driven) →
  Create & deploy.
- Login page? Stop and ask Danny. Never type his password.
- Open `pages.nafas.systems/s/<slug>/` in Safari and check that pages,
  fonts and images load. Send Danny the link + screenshots.

## 5. PR into dev (after Danny's yes on the preview)
- Push as `nafas-danny` and open a pull request into `dev`.
- One CHANGELOG line under Unreleased: "(#PR, requested by <who>)". Ask
  Danny who requested it. It's often Nathan or Thousif, not Danny.
- Merge only when Danny says "merge". Then check it on nafas.dev.

## 6. Release to nafas.com
- Only when Danny asks AND has checked nafas.dev on a computer and a phone.
- Show `git diff origin/main origin/dev` first, so he knows what ships.
- Turn Unreleased into the next version, then run the "Deploy to nafas.com"
  workflow.
- Never push or merge to `main` directly.
- Revert: a PR into `dev`, like any other change.
