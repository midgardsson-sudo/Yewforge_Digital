# Claims fix notes — 8 October 2026

Branch: `website/claims-fix-20261008`, based on `3de9a2a` (`legal/site-legal-1-c1-c5-20261007`). Line numbers below refer to this branch after the edits.

## Changed pages and wording

- `about.html:44` — “YewForge is UK-based, reaching globally, and is building Nivren: personal intelligence you can run, inspect and trust, on hardware people already own.” → “We are developing Nivren as a programme for coordinating specialist models, memory, tools and applications. These are design goals; broader integrated behaviour is still planned.”
- `index.html:45,229` — “local-first AI platform” / “local-first personal intelligence with specialist models, memory and tools on your own hardware” → “We are developing Nivren to coordinate specialist models, memory, tools and applications. These are design goals; broader integrated behaviour is still planned.”
- `index.html:259` — “One intelligence. Several ways in.” → “A programme with several directions.”
- `index.html:266` — present-tense platform description → “We are developing Nivren around specialist models, memory and tools, with inspectable state and human approval as design goals.”
- `index.html:268` — “Local-first” → “In development”.
- `nivren.html:8,14,20` — title “Nivren | Local-first AI platform and assistant by YewForge” → “Nivren | AI research and development by YewForge”.
- `nivren.html:9,15,21,37,45,228` — present-tense platform, coordination, and hardware wording → “We are developing Nivren to coordinate specialist models, memory, tools and applications. These are design goals; broader integrated behaviour is still planned.” (The review-candidate status and movable target remain in the metadata.)
- `nivren.html:227` — “Runs on your machine. You stay in charge.” → “Nivren is in development.”
- `nivren.html:264` — “Local-first / Designed to run on ordinary local hardware...” → “Development direction / Desktop local start. In the NivKode desktop app, new conversations start on a local model when one is installed. Defaults in other clients vary.”
- `nivkode/index.html:6,29` — “Local-first developer environment” → “Developer environment by YewForge”; metadata now describes NivKode as in development and scopes the local start to the desktop app.
- `nivkode/index.html:52,63` — “A local-first developer environment” / “Local first. Choice always...” → “A developer environment in development” / “Desktop local start. Provider choice in each conversation.” Line 63 also changes “Claude is not available” to “Claude has not yet been tested in NivKode; the adapter is contract-only.”
- `nivkode/index.html:66-67` — definitive review-gate and accessibility implementation claims → statements that we are evaluating these controls/options in a review candidate, with human review and release approval pending.
- `nivkode/index.html:7,29,52,63` — the desktop local-start statement now consistently says that new desktop conversations start on a local model when installed, and defaults in other clients vary.
- `nivkode/index.html:102,109` — unsupported company location and support-independence copy → “We welcome support for development” / “YewForge”.
- `engineering/index.html:2,5` — “local-first AI operating environment/research programme” → “AI research and development programme”.
- `engineering/nivren/index.html:2,3,5` — “Local-First AI Operating-Environment Research” → “Nivren AI Research Programme”; the programme overview now describes development goals and planned broader integration.
- `press/index.html:50,75` — platform and “personal intelligence” assertions → Nivren programme/design-goal wording, with broader integrated behaviour marked as planned.
- `press/index.html:54` — “independent UK technology company ... platform designed for local hardware” → “We are developing Nivren and NivKode” plus the desktop-scoped local-start wording.
- `press/index.html:108` — “UK-based, reaching globally” → “Not stated”.
- `privacy.html:27` — “NivKode runs on your own computer. The NivKode desktop app is local-first...” → “In the NivKode desktop app, new conversations start on a local model when one is installed.” The rest of the C2 paragraph, including the Codex/OpenAI statements, is unchanged.
- `support.html:7,26,49,56,112` — unsupported claims that support does not influence results and that it funds specified capacities → “We welcome support for development of Nivren, NivKode and related work.”
- `support.html:110` — “Independence / Support never buys a result.” → “Development support / Support for development.”
- `updates/index.html:16` — 3 October entry label “Product and research update” → “Superseded — corrected on 6 and 7 October”.
- `updates/index.html:17` — “UK-based, reaching globally” → “YewForge”.
- `data/updates.json:32` — the 3 October archived update now begins “Superseded by our corrections on 6 and 7 October.” Its historical wording remains visible as a dated record.

No layout or CSS was changed. The other P2 findings were left as they already carry an adjacent agent-run/human-review caveat or did not have a clearly supported replacement in the available audit and owner rules.
