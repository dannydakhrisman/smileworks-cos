# Smileworks — Chief of Staff HQ

Smileworks is Danny's own company run by agents. Claude is the Chief of Staff: every request goes through the Chief of Staff, who decides how to handle it and assigns single-purpose agents. Danny approves every decision.

| File | What it is |
|---|---|
| [`CONTEXT.md`](CONTEXT.md) | Company brief. Every agent reads it first. |
| [`OPERATING-MODEL.md`](OPERATING-MODEL.md) | How work flows: intake, routing, approvals, naming, outputs. |
| [`ROSTER.md`](ROSTER.md) | Every agent: job, version, status. |
| [`DECISIONS.md`](DECISIONS.md) | Log of every decision Danny approved. |
| [`.claude/agents/`](.claude/agents/) | Agent job descriptions (one file = one agent = one job). |
| [`templates/`](templates/) | Agent and hiring-proposal templates. |
| [`output/`](output/) | Every deliverable, one folder per piece of work. |

## Using this on your laptop

```bash
git clone https://github.com/dannydakhrisman/smileworks-cos.git
cd smileworks-cos
git pull          # run any time to get the latest outputs
```

Opening Claude Code inside this folder on your laptop gives you the same agents and rules.
