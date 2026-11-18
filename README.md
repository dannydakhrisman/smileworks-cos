# Smileworks CoS

The Chief of Staff for Smileworks, h0ney's brand for freelance work:
websites, design, PM and games. The Chief of Staff is Claude Code. It takes
each request, routes it to the right project and playbook, does the work,
and brings back the result for a yes.

This repo is its handbook: the routing rules, one playbook per type of
work, and check scripts. It holds no client work; each project lives in its
own folder and repo.

## How a request flows

```
h0ney asks for something
        |
        v
+--------------------------+
| Which project?           |  reads ~/Documents/Claude/<project>/CLAUDE.md
+--------------------------+
        |
        v
+--------------------------+
| Which kind of work?      |  website, design, PM, SEO -> playbooks/<type>.md
+--------------------------+
        |
        v
+--------------------------+
| Plan in one line, build  |  checks with tools/
+--------------------------+
        |
        v
+--------------------------+
| Show h0ney -> yes        |  nothing ships without it
+--------------------------+
        |
        v
+--------------------------+
| Ship, then learn         |  new lessons go back into playbooks/
+--------------------------+
```

## What's inside

| Path | What it is |
|---|---|
| `CLAUDE.md` | The router: the steps for every request, GitHub accounts, ground rules |
| `playbooks/website.md` | Any website or landing page: plan, build, images and speed, share card, analytics, gate page, checks, release |
| `playbooks/nafas-website.md` | Nafas web work on top of `website.md`: where the look lives, preview, GitHub, deploy |
| `playbooks/seo.md` | Search and AI answers (SEO, GEO, AEO): audit, fix order, `llms.txt`, checks |
| `playbooks/design.md` | App screens, flows and prototypes |
| `playbooks/pm.md` | Product work: Discovery doc, impact and effort, then the PRD |
| `tools/` | Check scripts for static sites, see [tools/README.md](tools/README.md) |

### Tools

| Tool | Answers |
|---|---|
| `layout-diff.mjs` | Did anything move? Every element, before and after, at 390, 1000 and 1440 |
| `broken-images.mjs` | Any broken images, on phone and computer, lazy ones included? |
| `image-weight.mjs` | How much image data does a visit download? |
| `safari-tab.sh` | Run a script in the Safari tab with a given address |
| `chrome.mjs` | The headless Chrome helper the others use |

They need Google Chrome and Node 22 or newer. No server or account.

## Setup

Claude Code reads the rules from `~/.claude/CLAUDE.md`, which points to the
playbooks in this folder. Keep the repo cloned at
`~/Documents/Claude/smileworks-cos`.

## How it learns

When a project teaches something new (a mistake, a rule h0ney sets, a check
that would have caught a problem), it goes into the matching playbook or
tool, often with the project it came from, e.g. "(landing.page)".
Changes go on a branch and into `main` through a pull request, after
h0ney's yes.

## Ground rules

- Nothing is pushed, merged, published, sent or deleted without h0ney's yes.
- Keep it simple: no extra files, agents or process unless h0ney asks.
- Done means checked: every page, breakpoint and language the change
  touches, by script where possible.
- Pushes go out as `dannydakhrisman`, and Nafas repos as `nafas-danny`.
- Short, plain words. US English. No em dashes.
