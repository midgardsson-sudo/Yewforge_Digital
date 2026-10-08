# Claims fix cross-review — 8 October 2026

**Verdict: REWORK**  
**Reviewed:** `website/claims-fix-20261008` at `f7dfaca`, based on `3de9a2a`; audit `f80cf52` (`PUB-CLAIMS-AUDIT-20261008.md`).  
**Scope:** Read-only review of site changes and all tracked HTML/JSON claim text. No site files changed.

## Findings

### P1 — broad local-first/default implications: fixed

The edits remove the product-wide local-first labels from home, Nivren, NivKode, press, engineering, and the privacy paragraph. The remaining behavioral statement is scoped to new conversations in the NivKode desktop app when a local model is installed, and the Nivren/press copy says other client defaults vary. This follows the owner rule. The Codex/OpenAI wording remains in place. The Claude wording now says it has not been tested in NivKode and is contract-only.

### P2 — Nivren programme/design language: fixed

The prominent Nivren descriptions now use YewForge's “we” voice, identify coordination as a development goal, and say broader integration is planned. The Nivren page's prior “Runs on your machine” and local-hardware assertions are removed.

### P2 — Claude description: fixed

`nivkode/index.html` now says Claude has not been tested and the adapter is contract-only.

### P2 — feature/control claims: partially fixed; residuals need resolution

The review-gate and accessibility bullets at `nivkode/index.html:66-67` now describe evaluation in a review candidate and disclose pending human review and release approval. However, adjacent claims remain categorical and unsupported by an implementation artifact in the audit's evidence set:

- `nivkode/index.html:53` says workspace and history stay on the user's machine.
- `nivkode/index.html:59-63` says the product has one local gateway, displays run/response state, displays live session steps/routing/files/review status, requires Codex approval before file changes, and prevents a local model from changing files or running commands.
- The 6 October update still reports build reproducibility, test counts, accessibility scan results, and live Codex/Ollama and phone runs (`updates/index.html:16`, `data/updates.json:16`). It does disclose agent-run checks and pending human review, but this clone contains no candidate-specific evidence links supporting those results.

`CLAIMS-FIX-NOTES-20261008.md:33` gives a general reason for leaving other P2s (“adjacent ... caveat” or no supported replacement), but does not identify which of these statements remain or provide supporting evidence. Human-review caveats do not substantiate the underlying product/data-flow details.

### P2 — privacy data-flow claims: unresolved

`privacy.html:27` now scopes the local-start statement to the desktop app and correctly says Codex conversations are sent to OpenAI. It still says “we do not receive it” and “This website receives nothing from your NivKode use.” The audit explicitly found no product data-flow inventory to verify these categorical statements. The fix notes (`CLAIMS-FIX-NOTES-20261008.md:26,33`) record that the rest of the paragraph was left unchanged and give only the general no-supported-replacement rationale. This is not enough to resolve the audit finding; substantiate the statements or qualify them to the verified boundary.

### P2 — other audited items: fixed or explicitly scoped

- Corporate/location/support copy is changed to “We”/YewForge and development support wording; unsupported UK/reach and support-independence assertions are removed.
- The 3 October update is labelled superseded in both the visible Updates entry and the archived JSON text; the preceding 6/7 October corrections remain visible.
- The launch date is consistently described as a movable 2 November target in current product/press summaries. Historical text remains only under the superseded label.
- The privacy diff from `3de9a2a` is limited to the C2 product paragraph. No other privacy-notice content changed in this fix.

## Residual claim scan

Scanned all tracked `*.html` and `*.json` text for `local`, `private`, `offline`, `Claude`, `default`, `November`, `available`, and `users`. Expected scoped mentions remain, including the desktop local-start rule, local/Ollama test summaries, movable November target, Ko-fi availability, explicit unavailable/not-yet-available product statuses, and historical superseded copy. No remaining product-wide “local-first” claim or claim that Claude was tested was found. The unresolved claims requiring rework are listed above.

## Integrity checks

- Python `HTMLParser` parsed all 110 HTML files with no exceptions or parser errors. No `tidy` executable was present. This parser pass is a syntax/readability check, not a full HTML conformance validator.
- Changed-page local links and fragments: 0 broken targets across 10 changed HTML pages.
- All tracked JSON files parsed successfully.
- `git diff --check 3de9a2a..f7dfaca`: clean.
- The only `privacy.html` change is the C2 sentence replacing the NivKode-wide/local-first wording with the desktop-scoped local-start wording.

## Required before READY

Resolve or substantiate the residual data-retention, gateway, runtime-control and update-result statements above, then cross-review the revised branch. No site edits were made as part of this review.
