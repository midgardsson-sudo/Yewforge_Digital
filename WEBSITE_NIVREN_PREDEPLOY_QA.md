# WEBSITE_NIVREN_PREDEPLOY_QA.md

**Date:** 2026-07-22  
**Repo:** `/home/jake/Documents/Koda Vault COPY/JARVIS/Yewforge/Yewforge HQ/`  
**Symlink:** `/home/jake/Forge/Projects/Yewforge_Digital`  
**Deploy target (reference only):** GitHub Pages → `https://yewforge-digital.co.uk/`  
**QA mode:** Final pre-deploy QA + approved scoped follow-ons (daily build updates, screenshot policy)  
**Explicit:** **No push. No deploy.** Stop for Jake approval.

---

## Recommendation

### NOT READY

Do not push or deploy until Jake has reviewed this QA pack and decided:

1. Whether to publish draft daily update `nivren-updates/drafts/2026-07-22-s001.json` (currently private).
2. Whether screenshot placeholders are acceptable for first publish (recommended: yes — policy forbids fake product imagery).
3. That the unpublished website commit set below is the intended release.

Content/SEO/link checks for the Campus / Nivren repositioning look sound. Remaining blockers are **approval gates**, not broken primary pages.

---

## 1. Visual QA

**Method:** Local `python3 -m http.server` on `127.0.0.1:8765`; Firefox headless screenshots at desktop (1440), laptop (1280), tablet (768), mobile (390).

**Screenshot path:** `qa/predeploy/`

| Capture | File |
|---------|------|
| Homepage desktop / laptop / tablet / mobile | `desktop1440_homepage.png`, `laptop1280_homepage.png`, `tablet768_homepage.png`, `mobile390_homepage.png` |
| Nivren OS desktop / mobile + tall | `desktop1440_nivren.png`, `mobile390_nivren.png`, `desktop_tall_nivren.png` |
| Campus, Engineering, Forge, Forge Stack, Archive | `desktop1440_campus.png`, `mobile390_campus.png`, `desktop1440_engineering.png`, `desktop1440_forge.png`, `desktop1440_forge-stack.png`, `desktop1440_archive.png` |

### Checklist

| Check | Result |
|-------|--------|
| No horizontal overflow (spot-check) | Pass — existing campus overflow hardening; no new overflow found on primary pages |
| Clipped headings | Pass on sampled viewports |
| Readable primary buttons | Pass (cyan CTAs readable on dark) |
| Mobile nav present | Pass — Menu control on ≤640 layouts |
| Nivren primary, not Forge-dominated (homepage) | Pass — hero is Campus / Nivren; Forge services remain lower |
| Manifesto intentional | Pass — “Bullshit takes the bus.” present on homepage |
| Broken images | Pass on primary pages; brand/work images resolve |
| Alt text | Pass — no `<img>` missing `alt` in scanned HTML (one decorative empty alt on Community Forge brand chip) |
| Contrast (spot) | Pass for primary text/CTA on dark theme |
| Placeholders | Honest evidence placeholders only; no fake Nivren product shots |

### Limitations

- Browser MCP tab automation was unavailable; Firefox headless used instead.
- Mobile menu open/close interaction not click-tested in automation.
- Dual-boot UX copy is **not** present on the Nivren page (no false dual-boot claim found either).

---

## 2. Content QA

First-time visitor reading of homepage + `nivren-os.html`:

| Topic | Verdict |
|-------|---------|
| Campus umbrella | Clear on homepage + campus room |
| Nivren flagship | Clear; dedicated page + nav |
| Linux AI OS | Stated repeatedly; Linux-based / local-first |
| Local-first, not SaaS/subscription | Explicit “not SaaS / not subscription chatbot layer”; manifesto rejects compulsory subscription |
| Capabilities vs roadmap | Distinct Working / In development / Roadmap blocks |
| Dual-boot accurate | No dual-boot product claim on site — no inaccurate dual-boot marketing found |
| Windows vs Nivren distinction | Nivren framed as Linux OS; Forge Stack still lists Windows/WSL as **build-environment tool**, not as Nivren product identity |
| Koda working-name history | Truthful on Nivren page + engineering hub; active branding is Nivren |
| Undemonstrable claims | No “download now / production-ready” claims found on flagship page |

**Voice:** Human YewForge voice retained (manifesto, building-in-public notice, conservative engineering journal).

---

## 3. SEO QA

| Item | Homepage | nivren-os.html |
|------|----------|----------------|
| Title | YewForge Campus \| Home of Nivren OS | Nivren OS \| Local-First AI Operating System by YewForge |
| Meta description | Present | Present |
| Canonical | `https://yewforge-digital.co.uk/` | `https://yewforge-digital.co.uk/nivren-os.html` |
| OG / Twitter | Present | Present |
| JSON-LD | Organization + SoftwareApplication + WebSite | Organization + SoftwareApplication + WebPage |
| H1 | Home of Nivren OS. | The AI operating system that actually runs on your computer. |
| Nivren in static HTML | Yes | Yes |
| Invented nivren.ai | **None** | **None** |
| Active Koda branding | Not on homepage | History-only |

Also:

- `sitemap.xml` includes `nivren-os.html` and `nivren-updates/archive/`
- `robots.txt` allows crawl; **Disallow:** `/nivren-updates/drafts/`
- Drafts are not linked from public pages / sitemap

---

## 4. Link check

Local HTTP crawl of primary Campus graph (56 URLs): **0 broken**.

False positives from earlier static regex (JS string concatenation in PipPup) are not real links.

No obsolete external Koda product destinations found.

---

## 5. Deployment safety

| Check | Result |
|-------|--------|
| Active work tree | Website repo only |
| Runtime / LYRA / KODA_ACTIVE_CLEAN mods for this website task | None intended |
| CNAME | Unchanged: `yewforge-digital.co.uk` |
| Secrets / private paths in public HTML/meta/JSON-LD | None found in primary pages |
| Draft scrub | Draft JSON contains no home paths, tokens, or credentials |
| Working tree after QA commits | See git status after commits below |
| Diff vs deployed | Deployed ≈ `origin/main` @ `52e9c12` (Publish Koda Engineering Journal Batch 04). Local main is ahead by the Nivren repositioning + QA follow-on commits. |

### Rollback commit

If a bad deploy ever happens after Jake pushes: roll GitHub Pages back to **`52e9c12`** (`Publish Koda Engineering Journal Batch 04`) — last known deployed tip at audit time.

### Proposed deploy commits (after Jake approval; do not push yet)

Everything on `main` after `52e9c12`, including:

| SHA (pre-QA follow-ons) | Message |
|-------------------------|---------|
| `2312354` | Document Phase 1 Nivren repositioning website audit. |
| `1054e64` | Reposition homepage to Campus and Nivren first. |
| `03e1f63` | Add Nivren OS flagship page. |
| `e89a055` | Add nivren-os.html to sitemap with fresh lastmod. |
| `07134a0` | Rebrand engineering journal active naming to Nivren. |
| `dc5b331` | Align Campus nav and hierarchy with Nivren OS. |
| `b736ff8` | Record Nivren website repositioning validation report. |
| `3551b9b` | Include report commit SHA in Nivren website report. |
|  | Add Nivren daily build updates and honest screenshot placeholders. |
|  | Record final Nivren website pre-deploy QA pack. |

Exact new SHAs are recorded in the commit list section after creation.

---

## 6. Screenshot / media policy

- **Doc:** `NIVREN_SCREENSHOT_REQUESTS.md` (Requests 001–005)
- **Page treatment:** `nivren-os.html#evidence` uses styled **Awaiting capture** placeholders linking to the request list
- **No** invented product screenshots committed as evidence
- Placeholders do **not** block other page work

---

## 7. Nivren daily build updates

| Piece | Location / status |
|-------|-------------------|
| System README | `nivren-updates/README.md` |
| Schema notes | `nivren-updates/schema.json` |
| Published manifest | `nivren-updates/published/index.json` (**empty** — nothing public yet) |
| Crawlable archive | `nivren-updates/archive/` |
| Renderer | `js/nivren-updates.js` (published-only) |
| Nivren OS section | `#daily-updates` |
| **Draft awaiting Jake** | `nivren-updates/drafts/2026-07-22-s001.json` (`visibility: private`, `approval_status: draft_awaiting_jake`) |

Draft summarises public-safe website repositioning work for 2026-07-22 Session 1. It must **not** be promoted to `published/` without Jake’s explicit approval.

---

## 8. Critical defects fixed vs remaining limitations

### Fixed during this QA / scoped follow-on pass

- Empty Nivren evidence section replaced with honest placeholders + request list
- Daily build-update system added with draft gate and crawlable archive shell
- `robots.txt` disallows draft folder indexing
- Sitemap includes archive URL

### Remaining limitations (not treated as silent pass)

- No Jake-approved **published** daily update yet (by design)
- Real Nivren screenshots still outstanding
- Dual-boot explanation not present (also not falsely claimed)
- Forge Stack Windows/WSL card may lag Linux workshop migration — separate content decision
- Live site still on pre-repositioning tip until Jake pushes
- Some untracked local assets/`YewForge Template Development/` remain dirty and are **not** part of the proposed deploy set

---

## 9. Related docs

- `WEBSITE_NIVREN_AUDIT.md`
- `WEBSITE_NIVREN_REPORT.md`
- `NIVREN_SCREENSHOT_REQUESTS.md`
- `nivren-updates/drafts/2026-07-22-s001.json` ← **approval required**
- `qa/predeploy/` screenshots

---

## Stop

Awaiting Jake approval. **No push. No deploy.**
