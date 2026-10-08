# Claims fix cross-review — round 2 — 8 October 2026

**Verdict: REWORK**  
**Reviewed:** `origin/website/claims-fix-20261008` at `b1f091c`, reworked from `f7dfaca`, based on `3de9a2a`; audit `f80cf52` (`PUB-CLAIMS-AUDIT-20261008.md`).
**Scope:** Read-only review of site changes and all tracked HTML/JSON claim text. No site files changed.

## Audit disposition

### P1 — Product-wide local-first/default implications: mostly fixed; residual metadata claims

The main product, Nivren, NivKode, press and privacy summaries now avoid a product-wide local-first label. NivKode's local-start statement is limited to new conversations in the desktop app when a local model is installed, and the copy says defaults in other clients vary. The Codex route remains identified as sending the conversation to OpenAI.

Two engineering-page descriptions still use unqualified local-first language in search metadata: `engineering/nivren/development-history/index.html` calls Nivren a “governed local-first programme”; `engineering/nivren/objectives/index.html` lists “local-first operation” among its objectives. The objectives page has maturity framing in its share description, but the metadata phrases can stand alone and still imply a Nivren-wide operating property. Scope both explicitly as design goals or remove the label.

### P2 — Nivren programme/design language: fixed

The edited Nivren and home summaries use YewForge's “we” voice, describe coordination as development work, and state that broader integrated behaviour remains planned.

### P2 — Claude: fixed

`nivkode/index.html` says Claude has not been tested in NivKode and the adapter is contract-only. I found no claim that Claude has been tested.

### P2 — NivKode feature, control and test claims: partly fixed; public claims remain without cited evidence

The rework removes the unsupported workspace/history retention, single-gateway, runtime/session display, Codex approval and local-model file/command restriction claims from `nivkode/index.html`. It also removes the specific build reproducibility, test counts, accessibility scan results, and live Codex/Ollama and Android results from the 6 October update. The remaining review-candidate and simulated-provider wording is bounded.

The homepage still says NivKode includes a desktop app, CLI and live terminal view, reading-font and colour-palette options, and automated tests on every release candidate (`index.html:273`). The audit identified this location as an evidence gap; the rework does not cite an implementation or test artifact for these statements, and its rework notes do not explain why they remain.

### P2 — Candidate and live-provider test runs: partly fixed; unresolved copies remain

The NivKode page and 6 October update no longer report the specific live-provider and phone results. However, the same results remain in `nivren.html:279`, `press/index.html:70`, and `site-review.json:5,22`; the Linux live Codex/Ollama test claim also remains in `nivren.html:327` and `press/index.html:157`. `nivkode/index.html:89` still says the tested desktop build is Linux x86_64. These assertions have no candidate-specific evidence links in the reviewed site, and the product clone cited by the audit contains no test records. Agent-run and pending-human-review caveats do not substantiate the results. The round-2 rework notes do not identify these remaining copies or give a specific reason for retaining them.

### P2 — Privacy data-flow claims: fixed within the reviewed evidence boundary

The unverified assurances that YewForge does not receive Codex conversations and that the website receives nothing from NivKode use are removed. The paragraph retains only the owner-confirmed desktop local-start and Codex-to-OpenAI statements.

Compared with `3de9a2a`, the candidate's `privacy.html` change is confined to that C2 paragraph. C1, C3, C4 and C5 content is unchanged.

### P2 — Older update: fixed

The 3 October entry is visibly labelled “Superseded — corrected on 6 and 7 October” in HTML and its JSON archive text begins “Superseded by our corrections on 6 and 7 October.” The 2 November date is stated as a movable target in current summaries.

### P2 — Corporate descriptors: fixed

The previously flagged UK/reach and support-independence wording is absent from the reviewed product summaries; support is presented as development funding.

## Residual claim scan

Scanned tracked HTML and JSON for `local`, `private`, `offline`, `Claude`, `default`, `November`, `available` and `users`. The desktop-only local-start statement and “defaults in other clients vary” are properly scoped. November mentions describe a target that may move; availability wording describes product/status or support-link states; I found no fabricated user count. Claude is described as untested and contract-only. The two local-first engineering metadata phrases above remain a P1 concern. The unsupported test summaries listed above remain a P2 concern. Older 3 October wording remains only under its superseded label.

## Integrity checks

- Python `HTMLParser` parsed all 110 tracked HTML files with no exceptions; `tidy` is not installed. This is a parser check, not full HTML conformance validation.
- All 4 tracked JSON files parsed successfully.
- Local links and fragments from all 10 HTML files changed since `3de9a2a`: 0 broken targets.
- `git diff --check 3de9a2a..b1f091c` and `git diff --check f7dfaca..b1f091c`: clean.
- No broken link or anchor was introduced by the rewrites.

## Required before READY

Qualify or remove the two unscoped local-first engineering metadata phrases; resolve the homepage feature/test assertions and the remaining uncited test-result copies in Nivren, press and `site-review.json`; then cross-review the revised branch. No site edits were made as part of this review.

## Claims fix cross-review — round 3 — 8 October 2026

**Verdict: READY**
**Reviewed:** `origin/website/claims-fix-20261008` at `a89bf1f`, reworked from `b1f091c`, based on `3de9a2a`; audit `f80cf52` (`PUB-CLAIMS-AUDIT-20261008.md`).
**Scope:** Read-only review of the candidate and all tracked HTML/JSON claim text. No site files changed.

### Round 2 findings and audit disposition

- **P1 — Nivren-wide local-first metadata: fixed.** `engineering/nivren/development-history/index.html` and `engineering/nivren/objectives/index.html` now call local operation a design goal. The candidate contains no unqualified “local-first” product label. The local-start statement remains limited to new conversations in the NivKode desktop app when a local model is installed; it says defaults in other clients vary.
- **P2 — Homepage feature and test assertions: fixed.** The unsupported desktop, CLI, terminal and accessibility feature list and release-candidate test-frequency assertion are gone. The homepage states review-candidate status and pending release approval/publication.
- **P2 — Uncited test results: fixed.** The Codex/Ollama, Linux and Android result statements and the Linux x86_64 tested-build assertion identified in round 2 are removed from Nivren, press, `site-review.json`, NivKode and updates. Current summaries say testing continues without claiming platform/provider results. The 3 October entry is visibly superseded; its unsupported feature/test copy is withdrawn in both HTML and JSON.
- **Remaining original audit findings: resolved.** Nivren programme descriptions are framed as development goals with broader integration planned; Claude is explicitly untested and contract-only; unsupported NivKode controls, safety, accessibility, build and benchmark assertions have been removed or described as evaluation/design content; the privacy copy retains only the owner-confirmed desktop local-start and Codex-to-OpenAI statements; 2 November remains a movable target; corporate/location/support-independence assertions were removed or narrowed. No P1/P2 item is left without resolution or explanation in the candidate's `CLAIMS-FIX-NOTES-20261008.md`.

### Residual claim scan

Scanned all tracked HTML and JSON for `local`, `private`, `offline`, `Claude`, `default`, `November`, `available` and `users`. Residual local-model references are either the approved desktop-only new-conversation behavior or explicitly planned Nivren Quark models. The private match in `nivren-updates/schema.json` is a `visibility_allowed` enum value, not a public product claim. “Available” matches concern generic assets, support-link status or explicit lack of public builds; no fabricated user counts or reviews were found. Claude appears only as untested/contract-only. November mentions describe the 2 November target and say it may move. Codex is consistently described as sending its conversation to OpenAI under the user's account. I found no new overclaim in the rework.

### Privacy, HTML and links

- Compared with `3de9a2a`, `privacy.html` changes only the C2 product paragraph. C1, C3, C4 and C5 remain unchanged. C2 removes the unverified non-receipt/website-receives-nothing assurances and keeps the desktop-start and Codex/OpenAI statements.
- `python3 -I` with Python's `HTMLParser` parsed all 110 tracked HTML files with no exceptions. All 4 tracked JSON files parsed successfully. This checks parsing, not full HTML conformance; `tidy` is not installed.
- Checked local links and fragments across the full candidate: 0 missing paths or anchors, including 0 in changed HTML files.
- `git diff --check` from both the legal baseline and round 2 candidate to the reviewed candidate is clean.

Round 3 found no remaining P1/P2 issue requiring rework. No site files were changed as part of this review.
