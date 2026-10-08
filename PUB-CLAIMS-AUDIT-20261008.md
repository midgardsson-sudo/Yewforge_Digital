# Public claims audit — 8 October 2026

## Scope and basis

Compared fetched `origin/main` (`a291c14`) with `origin/legal/site-legal-1-c1-c5-20261007` (`3de9a2a`). The public copy findings below apply to both refs unless a branch is named. Their tracked public HTML, JSON data, XML sitemap, metadata, JSON-LD, image alt text, and dated update archive were reviewed. The legal branch changes `privacy.html`, two CSS files, adds `DEPLOY_READY.md`, and adds screenshots; the CSS and screenshots do not add public product claims.

Product evidence was checked from a shallow, read-only clone of NivKode `main` at `bcbcffc` in ignored `_nivkode/`. It contains product doctrine, architecture boundaries, and acceptance criteria, but no application source, release artifacts, test reports, or implemented data-flow documentation. Its README calls the repository a pre-R0 foundation and says the public/open-source release is a goal. Consequently, statements below that are consistent with the owner's rules but have no supporting evidence in this clone are classified P2 (unverified), not declared false. The owner's 7 October rules are treated as controlling evidence: only local/Ollama and Codex are tested; Claude is contract-only and untested; Codex conversations go to OpenAI; only the desktop app's new-conversation local default may be claimed; 2 November is a movable target.

Severity: **P1** materially conflicts with a stated rule or gives a false/misleading live impression; **P2** is ambiguous or not independently evidenced by the available product record; **P3** is tone. Rewrites are proposed in YewForge's “we” voice.

## Findings

### P1 — Product-wide “local-first” language implies a default across clients

**Locations (both refs):** `index.html:9,15,21,45,229,268`; `nivren.html:8-21,37,45,228,264`; `press/index.html:50,54`; `engineering/index.html:2`; `engineering/nivren/index.html:2-3,5`; `privacy.html:27` on the legal branch (and `privacy.html:27`'s broader predecessor on `main`). The same summary is repeated in meta/OG/Twitter and JSON-LD, so it is exposed in search and sharing previews too.

**Quoted claims:** “Nivren is a local-first AI platform”; “Nivren is in active development: local-first personal intelligence with specialist models, memory and tools on your own hardware”; “A local-first developer environment” (`nivkode/index.html:6-7,29,52`); “NivKode runs on your own computer” (legal `privacy.html:27`). The Nivren page also says “Runs on your machine” (`nivren.html:227`) and “Designed to run on ordinary local hardware” (`nivren.html:264`).

**Rule:** Public copy must not say or imply local-by-default across all clients. The allowed behavioral statement is limited to new conversations in the desktop app.

**Why it outruns the rule/evidence:** These unqualified product and platform labels attach local-first behavior to Nivren/NivKode as a whole. The product repository describes local-first as a design principle for meaningful functionality without a YewForge-controlled service (`_nivkode/ARCHITECTURE/FOUNDATION.md:41`); it does not establish a default for every client. The site's desktop-scoped statement at `nivkode/index.html:63` is appropriately narrower.

**Suggested rewrite:** “We are developing Nivren and NivKode around inspectable state and user control. In the NivKode desktop app, new conversations start on a local model when one is installed. Other client defaults vary.” For metadata, use the same short, desktop-scoped wording.

### P2 — General Nivren copy describes a working capability where the record supports a programme/design

**Locations (both refs):** `nivren.html:228,261-266`; `index.html:45,259,266`; `about.html:43-54`; `press/index.html:50,54,75`; related descriptions are repeated in OG/Twitter and JSON-LD (`nivren.html:9,15,21,37,45`; `index.html:9,15,21,37,45`).

**Quoted claim:** “It coordinates specialist models, memory, tools and applications on hardware you own, keeps its state inspectable.” The page marks the overall product as in development, but the sentence itself states present behavior. The NivKode repository says its architecture is provisional and names these areas as goals/candidate domains (`_nivkode/ARCHITECTURE/FOUNDATION.md:3,45-60`; `_nivkode/PRODUCT/PRODUCT_CHARTER.md:7-18`).

**Rule:** Do not fabricate capabilities or imply capabilities beyond evidence.

**Suggested rewrite:** “We are developing Nivren to coordinate specialist models, memory, tools and applications. These are design goals; broader integrated behavior is still planned.”

### P2 — Claude is described as unavailable, rather than untested and contract-only

**Locations (both refs):** `nivkode/index.html:63`.

**Quoted claim:** “Claude is not available.”

**Rule:** Claude is not tested in NivKode; it is contract-only. Only local/Ollama and Codex are tested.

**Why it is ambiguous:** “Not available” can be read as a product limitation or as a tested conclusion. The supplied rule establishes only that there is no Claude test evidence.

**Suggested rewrite:** “Claude is defined by a provider contract only; we have not tested it in NivKode.”

### P2 — NivKode feature and safety claims are not verifiable from the supplied product repository

**Locations (both refs):** `nivkode/index.html:61-68,77-80`; `index.html:273`; `press/index.html:70-71`; the 6 October entry in `updates/index.html:16` and `data/updates.json:16`.

**Quoted claims:** “The app shows run state and where each response came from”; “Codex works in a read-only sandbox and must ask for your approval ... and the approval step can't be turned off”; “A local model can read files in your workspace but can't change them or run commands”; “two builds produced byte-identical archives, 121 Rust tests and 25 Node tests passed”; “128 accessibility combinations reported no axe violations.”

**Rule:** No fabricated availability, benchmarks, reviews, or capabilities. Product capabilities must be grounded in evidence. The NivKode clone contains acceptance criteria but not these implementations or test records (`_nivkode/PRODUCT/SELF_HOSTING_ACCEPTANCE.md:8-34`).

**Suggested rewrite:** Keep each specific behavior/result only where a reviewable artifact for the cited candidate is linked. Otherwise: “We are evaluating these controls and accessibility options in a review candidate; human review and release approval are pending.” For the test counts, link the build/test evidence and identify the candidate and test environment.

### P2 — Candidate and live-provider test runs lack supporting artifacts in the product clone

**Locations (both refs):** `nivkode/index.html:74-75,88-92`; `nivren.html:279,327-329`; `press/index.html:70`; `updates/index.html:16`; `data/updates.json:16`; `site-review.json:5,22`.

**Quoted claims:** “test runs on one machine passed with a live Codex account and a local Ollama model”; “our Android app passed test runs on one phone ... including two live Codex turns”; “The tested desktop build is Linux x86_64.” These are carefully limited to Codex/local and one machine/phone, and the copy discloses that AI agents ran them and human review remains pending. The local/Ollama and Codex providers are permitted by the owner's rule. However, no corresponding build, test, or Android evidence is in the supplied NivKode clone.

**Rule:** Only local/Ollama and Codex are tested; no fabricated capabilities or results. Model-run evidence is not human review.

**Suggested rewrite:** Link each claim to its candidate-specific logs, build hashes, and device record. Until those are public, say: “Our agents report these test runs passed; we have not completed human review, and we make no release-acceptance claim.” Keep the existing human-review caveat adjacent to every summary.

### P2 — Privacy statements about product data flows exceed the available implementation evidence

**Locations:** `privacy.html:27` on the legal branch; predecessor at `privacy.html:27` on `main`.

**Legal-branch quote:** “When a conversation uses Codex, NivKode sends that conversation to OpenAI under your own account; we do not receive it. This website receives nothing from your NivKode use.”

**Main quote:** “Nivren is local-first: NivKode runs on your machine. This website does not receive information from your local NivKode use.”

**Rule:** Codex conversations are sent to OpenAI; there is no all-client local-by-default claim. Privacy descriptions should reflect actual product flows.

**Assessment:** The legal branch fixes the main branch's conflation of Nivren-wide local-first behavior with NivKode, and correctly states that Codex conversations go to OpenAI. But the NivKode repository has no application source or data-flow evidence, so “we do not receive it” and the absolute website “receives nothing” cannot be verified from the product evidence supplied. No implementation-backed inventory of product data collected, stored, or transmitted was available for this audit.

**Suggested rewrite:** “In the desktop app, new conversations start on a local model when one is installed. If you choose Codex, that conversation is sent to OpenAI under your account. We have not verified a complete product data-flow inventory; see the product's current data-handling documentation.” Replace the final sentence only after confirming all clients and integrations.

### P2 — Older public update still presents claims later corrected

**Locations (both refs):** `updates/index.html:16`; `data/updates.json:28-32` (published update data).

**Quoted claim:** “dyslexia-friendly and colour-blind-safe themes,” “free automated tests on every change,” “Open source (AGPL-3.0), launching 2 November.” The 7 October correction narrows the accessibility statement to font choices/palettes with automated contrast checks only, and the 6 October entry corrects the testing cadence and says the source is not public. The target is now explicitly stated as a movable target.

**Rule:** No fabricated capabilities or availability; 2 November is a target, not a promise.

**Suggested rewrite:** Keep the correction as the visible current summary, and label the 3 October item “Superseded — corrected on 6 and 7 October” before its original text. Do not present the old “launching” and “open source” wording without its correction in the same item.

### P2 — Corporate descriptors are not substantiated by the product evidence provided

**Locations (both refs):** `press/index.html:54`; `about.html:44`; `nivkode/index.html:102,109`; `updates/index.html:16` footer; `support.html:49`.

**Quoted claims:** “independent UK technology company,” “UK-based, reaching globally,” and “Support does not buy influence over results.” The NivKode repository documents product direction, not YewForge's corporate status, geographic reach, or governance of support funding.

**Rule:** No fabricated users, reviews, or capabilities; claims should be supportable. This is an evidence gap, not a finding that the statements are false.

**Suggested rewrite:** Retain “We are developing Nivren and NivKode” where useful. Keep the company, location, and support-independence statements only if YewForge has separate current evidence; otherwise use “We welcome support for development.”

## Privacy notice C1–C5 on the legal branch

The `origin/main...origin/legal/site-legal-1-c1-c5-20261007` diff shows all five notice edits in `privacy.html`:

| Correction | Legal-branch text/change | Audit against product evidence |
|---|---|---|
| C1 — website hosting logs | `privacy.html:25` says the site has no forms, analytics, or ad trackers and that GitHub Pages may process technical hosting logs under GitHub's control. | This describes the website host, not NivKode collection. It is not verifiable from the NivKode repository; product evidence is not applicable. |
| C2 — NivKode data flow | `privacy.html:27` scopes local starts to the desktop and says Codex conversations go to OpenAI. | Correctly follows the owner's desktop/Codex rules and fixes `main`'s conflated “Nivren is local-first” statement. “We do not receive it” and “website receives nothing” remain unverified because no product implementation/data-flow inventory is present. |
| C3 — email host | `privacy.html:29` identifies Google (Gmail). | This is an email service disclosure, outside NivKode product collection; it is not substantiated by the product repository. |
| C4 — Ko-fi | `privacy.html:32` says Ko-fi/payment providers handle payment and YewForge receives supporter details Ko-fi shares. | This concerns donations, not NivKode. The product repository does not document supporter fields or Ko-fi flows; verify these against YewForge's Ko-fi account/data export before treating “only” as exhaustive. |
| C5 — notice label | `privacy.html:34` changes “About this draft” to “About this notice.” | Editorial/status wording only; it makes no claim about NivKode data collection. |

**Overall privacy result:** C1, C3, C4 and C5 are not product-collection corrections and cannot be checked against NivKode code. C2 is directionally consistent with the explicit owner rules, but categorical non-receipt statements are not confirmed by the product evidence clone. The clone contains no app implementation or collection inventory, so this audit cannot establish what NivKode actually stores or transmits beyond the owner's explicit Codex rule.

## Claims reviewed without a reported overreach

- The 2 November date is repeatedly qualified as a **target** that may move if testing finds issues (`index.html:236-238`; `nivkode/index.html:54,100`; updates and press summaries). This matches the owner's rule.
- NivKode's desktop new-conversation statement is explicitly limited to the desktop app and an installed local model (`nivkode/index.html:63`; `updates/index.html:16`).
- Copy that says human review, release approval, and publication are pending is appropriately explicit (`nivkode/index.html:88-91`; `updates/index.html:16`; `press/index.html:70`).
- NivKode screenshots have alt text that labels the terminal run as simulated and captions that identify simulated-provider evidence (`nivkode/index.html:75-80`).
- The sitemap lists URLs only and introduces no product capability claim. The inspected Nivren engineering pages generally label themselves as design/status records and explicitly state their limits; I found no additional P1 overreach there beyond the broad local-first summaries cited above.

## Review disposition

This is a model-produced audit, not a human review. No site files were changed. The legal branch corrects the central privacy wording but should not be treated as fully evidence-verified until product data flows and the stated “we do not receive it” boundaries are supported by implementation evidence.
