# NivKode beta.7 public copy corrections

## Copy changes

### C1 / C2 — beta status and launch target (A)

- Before: the NivKode page said “Public beta: Friday 13 November 2026” and “The date may move if testing finds a problem”; the press facts table said “NivKode, Friday 13 November 2026; may move if testing finds issues”.
- After: on both pages, state “The public beta target is Friday 13 November 2026; the date may move if testing finds issues.” Keep the status sentence, “We have not signed or released this beta. We will update this page after the release checks are complete and the signed release is available.”

### C3 — external-provider data flow (B)

- Before: “When we choose an external AI provider, e.g. Codex, Claude, Grok, the conversation is sent to that provider.”
- After: “When you choose an external AI provider, e.g. Codex, Claude, Grok, the conversation is sent to that provider.” Both pages say live use on this beta has not been tested.

### C4 — existing NivKode feature descriptions (C)

- Before: the NivKode page's live local-model descriptions were replaced with “We are preparing the next NivKode beta.”
- After: restore the existing descriptions on the NivKode page: a local model can answer questions and read workspace files; proposed file edits and supported project test/build commands are shown for review, with commands run only after approval; retain the “Review proposed changes before they happen” caption, `nivkode approve <conversation> <request>` command-line approval description, and Local-only switch paragraph. Beta.4 references in testing descriptions are version-neutral. No candidate edit or command claims were added to the press page.

## Verification

### Tested

- `python3 tools/ember_build.py --check`
- `git diff --check`

### Not yet tested

- Live browser use and provider use on this beta have not been tested.

## Files changed

- `nivkode/index.html`
- `press/index.html`
- `PR_BODY.md`

Not published; no push, PR, or deployment.
