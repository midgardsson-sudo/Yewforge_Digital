# Nivren Daily Build Updates

Structured public development updates for Nivren OS.

## Layout

| Path | Purpose |
|------|---------|
| `published/` | Jake-approved public update JSON files + `index.json` manifest. |
| `archive/` | Crawlable HTML archive of **published** updates only. |
| `schema.json` | Shared schema for update JSON documents. |

Unpublished drafts are **not** stored in this website tree. Keep drafts outside the GitHub Pages root (for example under the sibling `website-internal/nivren-updates/drafts/` folder) until Jake approves publication.

## Approval gate

1. Draft an update JSON outside the published website root with `"visibility": "private"` and `"approval_status": "draft_awaiting_jake"`.
2. Jake reviews and either rejects, edits, or approves.
3. On approval only: copy into `published/`, set `"visibility": "public"` and `"approval_status": "published"`, add the id to `published/index.json`, and add/update an archive HTML page if needed.
4. Never promote a draft without Jake’s explicit approval.

## Required fields

- `date`, `session_number`, `title`
- `completed_work`, `improvements`, `discoveries`, `current_problems`, `next_steps`
- `stability_status` — one of: `Working`, `Experimental`, `In development`, `Blocked`, `Planned`, `Released`
- `screenshots_or_evidence`, `related_public_commits`, `related_release_references`
- `visibility` — `public` or `private`
- `approval_status` — e.g. `draft_awaiting_jake` / `published` / `rejected`

## Honesty rules

- Do not describe roadmap or planned items as completed functionality.
- Use honest status labels only.
- Public-safe wording only: no private paths, credentials, personal data, security internals, raw crash logs, unpublished model data, or competitor commentary.
