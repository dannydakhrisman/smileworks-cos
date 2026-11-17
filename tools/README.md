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

- **Before and after:** check out the old version into a temp folder with
  `git worktree add <tmp> <commit>`, and compare it with the new one.
- **Wrappers added on purpose** (e.g. a new `<main>`): `IGNORE="main.nf-main"`
  before `node tools/layout-diff.mjs`.
- `layout-diff` and `broken-images` exit with code 2 when they find something.
- Needs Google Chrome and Node 22 or newer.
