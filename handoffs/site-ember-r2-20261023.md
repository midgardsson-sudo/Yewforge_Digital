# Site ember r2 (response to Codex REWORK on cbd490f)

Branch: feat/site-ember-ring-20261023 · Commit: 52f6b7d78d9fa71add5919666a90cd2ad6baed58 · Pushed: no

## What changed
1. **Phone menu keyboard** (`js/ember.js`): opening Menu focuses the first nav link; while open, Tab / Shift+Tab cycle Menu + the 7 nav links; Escape closes and returns focus to Menu. Desktop unchanged (Menu hidden, no trap).
2. **Provider wording** scoped to the desktop app and to what ships: `nivkode/index.html` hero, provider control (heading, aria-label, option hint, external text), limits list; `index.html` hero; `privacy.html`. Claude/Grok appear only as "not yet tested". Removed "It is for developers who want that choice and want to see where their words go." (no source).
3. **Claims**: the nivkode gate section heading is now the live caption sentence; the new "review gate shows test results, file changes..." sentence is removed; caption restored to the live scripted-demo wording.
4. **og:url** added to `nivkode/index.html`; `tools/ember_build.py` rules() now fails any page whose `og:url` is missing or differs from its canonical. Negative-tested: with it removed, nivkode printed `RULE nivkode/index.html: og:url (must equal canonical)`. Now `--check` gives `stale: none` and no RULE lines.

## Keyboard focus order (Playwright keyboard.press, headless Chromium, home page)
- **390 px**: Menu focused, Enter -> focus on Nivren. Tab x9: NivKode, Evidence, Updates, About, Press, Contact, **Menu**, Nivren, NivKode (cycles). Shift+Tab x4 from there: Nivren, **Menu**, Contact, Press. Escape -> focus on Menu, aria-expanded=false.
- **1920 px**, Tab x14 from top: Skip to content, YewForge, Nivren, NivKode, Evidence, Updates, About, Press, Contact, Launch note, then page content. Same as before.

## Copy diff (sentence -> source), vs upstream/main 48551a4
Method: sentence-level diff of every non-redirect page's visible text against all upstream/main text. Most unmatched text is shared header/footer/nav labels from the new layout. Public-copy sentences needing a source:

| Sentence (this branch) | Source |
|---|---|
| In the desktop app you choose where each conversation goes: a local model when one is installed, or an external AI provider you sign in to. | Live nivkode:34, 39 + claims rows 40, 47; live privacy:83 |
| Codex is the one we have run so far, and it is experimental. | Claims row 1 |
| Claude and Grok are not yet tested. | Live nivkode:39 (Claude). **Grok has no claims-record row**; wording follows the task brief, flag for Director |
| In the desktop app, NivKode sends the conversation to the provider you are signed in to, under your own account. | Live nivkode:34; live privacy:83 |
| In the desktop app, new conversations start on a local model when one is installed. Defaults in other clients vary. | Identical live nivkode:39; claims row 47 |
| When a run's outcome is unknown, NivKode says so instead of assuming tests passed. | Identical live nivkode:46 |
| Scripted demo session (simulated provider), from the 0.1.0 RC8 review candidate. It shows interface designs, not feature completeness, accessibility, or live-provider results. | Live nivkode:43, 44, 48 |
| Review-gate image alt text | Live nivkode alt, unchanged |
| Launch target Friday 13 Nov 2026, may move; 0.1.0 review candidate, release approval pending; AGPL-3.0-only, source not public yet | Live nivkode:50, 54, 68; live index:6; claims rows 13, 14 |
| about.html "Three evidence rules", Preregister first / Keep every result / Seal the checks and their sentences | Identical live about.html:60-73 (heading, titles, sentences). Kept. The claims record lacks them, but they are not new copy |
| index.html "Public claims are linked to evidence where available, and inconclusive or negative results remain part of the record." | Identical live index.html hero |
| Provenance labels, module status table, Quark/NivDroid/NivMac lines | Live index/nivren, same words |
| Ko-fi support line | Live nivkode:101 |
| Nav/button labels, "Skip to content", "Latest updates" | UI labels from the new layout |
| REMOVED "The review gate shows what was reported for a run: test results, file changes, and what is still missing." | no source |
| REMOVED "It is for developers who want that choice and want to see where their words go." | no source |
| REMOVED "Claude and Grok are not yet tested and not available", "Codex is the only one we have run" | replaced by the scoped wording above |

Limits: sentence splitting is crude where nav text merges, so I read the nivkode, index, about, nivren and privacy diffs line by line against live. I did not hand-check every engineering/ page, whose only new text is the shared header/footer. The claims record (6 Oct) does not cover the 13 Nov date or Grok.

## Tested
- `python3 tools/ember_build.py --check`: `stale: none`, no rule failures; og:url rule negative-tested.
- Keyboard sequences above (Playwright, headless Chromium, local http.server).
- Re-shot home/nivkode/about/privacy at 390 and 1920, full page: `qa/ember-rollout-20261023/r2/` (qa/ is gitignored, so not committed). I viewed nivkode-390 only.

## Not yet tested
- Screen reader, real phone, keyboard order on pages other than home (header is shared), full link crawl re-run, `tests/` diff (no test files touched).

## Decisions needed
- Keep Grok "not yet tested", or drop Grok (no claims row)?
- Refresh the claims record (6 Oct) before merge.
