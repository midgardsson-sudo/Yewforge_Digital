# NivKode beta.7 launch copy

## What changed

Updated the NivKode product page and press kit with the founder-selected public copy. Removed the candidate file-edit and command-execution claims under C4. The copy remains a draft until the founder merges this branch.

### C1 / C2 — beta status and platform (A)

- Before: “NivKode 0.2.0-beta.4 is the current Linux x86_64 candidate.”
- After: “We are preparing NivKode 0.2.0-beta.7 for Linux x86_64. We will update this page when the release is signed and available.”

### C3 — external-provider data flow (B)

- Before: the page named external providers but did not describe where the conversation goes.
- After: “When we choose an external AI provider, e.g. Codex, Claude, Grok, the conversation is sent to that provider.”

### C4 — candidate feature claims (C)

- Before: “We can propose file edits and supported project test and build commands. Changes are shown for review; commands run only after approval.”
- After: candidate edit and command claims are omitted. The page says: “We are preparing the next NivKode beta.”

### C7 — source-publication timing (A)

- Before: “The source code will be available alongside the public beta download.”
- After: “We will share a source link here if and when the source is made public.”

### C9 — signing and availability (A)

- Before: “The public beta will be a signed Linux x86_64 build.”
- After: “We have not signed or released this beta. We will update this page after the release checks are complete and the signed release is available.”

### C14 — free during beta (A)

- Before: “NivKode is free to use during the beta. We haven't set a price for after the beta.”
- After: “We plan to make NivKode free during the beta period.”

## Verification

### Tested

- `python3 tools/ember_build.py --check` — passed (`stale: none`).
- `git diff --check` — passed.

### Not yet tested

- No browser or live-site review was run.

## Files changed

- `nivkode/index.html`
- `press/index.html`
- `PR_BODY.md`

Not published until the founder merges.
