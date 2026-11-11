# NivKode beta.7 public copy corrections

## Copy changes

- Name NivKode 0.2.0-beta.7 and describe it as in preparation for Linux x86_64. State that it is not signed or released and retain the conditional 13 November 2026 target.
- Use the provider-neutral wording “external AI provider (e.g. Codex, Claude, Grok)” on the NivKode and privacy pages. Explain that a chosen external provider receives the conversation, and label local-model and external-provider live use “Not yet tested on this beta.”
- Label untested local-model and external-provider paths “Not yet tested on this beta.” Do not describe a provider as preferred or report counts or results.
- Retain the evidence-audit rewords and the existing NivKode feature descriptions, approval command, review caption and Local-only switch text.

## Verification

### Tested

- HTML files changed in this PR parsed with Python's `html.parser`.
- `git diff --check`.

### Not yet tested

- Live browser use and provider use on this beta have not been tested.
- Release signing and release checks have not been completed.

Not published; no push, PR edit or deployment.
