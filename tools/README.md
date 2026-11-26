# Tools

Check scripts for any static website. They open the site's own files in
headless Chrome (no server, no account). Use these instead of writing new
ones in a temp folder. Pages go after the site folder, or one per line on
stdin (`find site -name '*.html' | sed 's#^site/##' | node ...`).

| Tool | Answers | Run |
|---|---|---|
| `layout-diff.mjs` | Did anything move? Compares every element's position and size before and after, at 390, 1000 and 1440 | `node tools/layout-diff.mjs <before-site> <after-site> page.html` |
| `broken-images.mjs` | Any broken images? Phone (390, 3x) and computer (1440, 2x), lazy images included | `node tools/broken-images.mjs <site> page.html` |
| `image-weight.mjs` | How much image data a visit downloads, before scrolling and for the whole page | `node tools/image-weight.mjs <site> page.html > baseline.json` |
| `section-spacing.mjs` | Room above and below each section's content (not just padding), animations off. Local files or a live URL; 390 wide unless `--width` | `node tools/section-spacing.mjs https://nafas.dev residential` |
| `safari-tab.sh` | Runs a script in the Safari tab with a given address (never the front tab), e.g. to read a page h0ney has open | `tools/safari-tab.sh http://localhost:8103/ check.js` |

- **Before and after:** check out the old version into a temp folder with
  `git worktree add <tmp> <commit>`, and compare it with the new one.
- **Wrappers added on purpose** (e.g. a new `<main>`): `IGNORE="main.nf-main"`
  before `node tools/layout-diff.mjs`.
- `layout-diff` and `broken-images` exit with code 2 when they find something.
- Needs Google Chrome and Node 22 or newer.
- `chrome.mjs` (used by the others, and by one-off scripts) closes its
  Chrome when the script ends, and on start closes Chrome windows left by
  scripts that crashed. Other Chrome windows are never touched.
- `safari-tab.sh` needs Safari → Settings → Developer → "Allow JavaScript
  from Apple Events". It exits with code 2 when no tab has that address.

## Nafas only (`tools/nafas/`)

| Tool | Answers | Run |
|---|---|---|
| `price-check.mjs` | Do the ad pages show the same plans as their region's Residential (Annual, Monthly, saving, setup fee, devices), every home size? Repo or live; skips a page still on the old server | `node tools/nafas/price-check.mjs https://nafas.com` |
| `lead-test.sh` | Sends ONE real test lead through an ad page's form in its own Safari window and prints its reference. It emails the team: only when h0ney asks | `tools/nafas/lead-test.sh https://nafas.dev/ads/20261013ads/version-3-id id` |

- `price-check` exits with code 2 when a size differs. New ad page: add it
  to `PAGES` at the top. Residential itself must match the region shop; check
  that by hand in Safari (playbooks/nafas-website.md).
- Ad pages have no `data-section`: measure their spacing with
  `SEL=section node tools/section-spacing.mjs https://nafas.com ads/20261118ads/version-1`.
- `lead-test`: afterwards check the Make run (scenario 6613840, 3 operations)
  and the email in Outlook, and list the reference so h0ney can delete the row.
