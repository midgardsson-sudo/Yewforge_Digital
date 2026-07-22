# WEBSITE_NIVREN_AUDIT.md

**Audit date:** 2026-07-22  
**Auditor note:** Mandatory Phase 1 audit against **committed HEAD / live deploy**. Uncommitted Windsurf WIP on `index.html` / `robots.txt` was present at audit time and is recorded separately; it is **not** treated as the audit baseline.

---

## 1. Source repository and deployment target

| Item | Value |
|------|--------|
| Canonical source path | `/home/jake/Documents/Koda Vault COPY/JARVIS/Yewforge/Yewforge HQ/` |
| Symlink | `/home/jake/Forge/Projects/Yewforge_Digital` → same path |
| Git remote | `origin` → `git@github.com:midgardsson-sudo/Yewforge_Digital.git` |
| Branch | `main` (tracking `origin/main`) |
| Latest committed tip (at audit) | `52e9c12` — Publish Koda Engineering Journal Batch 04 |
| Public domain (CNAME) | `yewforge-digital.co.uk` |
| Hosting | **GitHub Pages** (live responses: `server: GitHub.com`, Fastly cache) |
| README claim | Static GitHub Pages campus site |
| Netlify / Vercel config | None found (`netlify.toml` / `vercel.json` absent) |
| Build step | None — plain static HTML/CSS/JS |
| Local helper | `START_YEWFORGE_SITE.bat` (Windows; untracked) |

### Search paths attempted (confidence: high)

- `/home/jake/Forge/Projects/` → found `Yewforge_Digital` symlink
- `/home/jake/Documents/Koda Vault COPY/JARVIS/Yewforge/Yewforge HQ/` → actual repo
- `/home/jake/Forge/`, `/home/jake/Applications/`, `/home/jake/CascadeProjects/`
- Name patterns: `*yewforge*`, `*yewforge-digital*`, `*yewforge.digital*`, `netlify.toml`, `vercel.json`, `CNAME`

**Not in scope / not modified:** `KODA_ACTIVE_CLEAN` / Nivren runtime; LYRA codebase.

---

## 2. Live vs repository (reachable)

Live URL: `https://yewforge-digital.co.uk/` — HTTP 200.

| Path | Live Last-Modified | Matches committed HEAD? | Live title (excerpt) |
|------|--------------------|-------------------------|----------------------|
| `/` | Wed, 15 Jul 2026 16:17:05 GMT | **Yes** | YewForge Digital \| Websites, AI Tools & Business Software |
| `/campus.html` | same | Yes (working tree = HEAD) | YewForge Campus \| Digital Services Headquarters |
| `/forge.html` | same | Yes | The Forge \| Websites, AI Assistants & Business Systems |
| `/engineering/` | same | Yes | Koda Engineering Journal \| YewForge Digital |
| `/engineering/koda/` | same | Yes | Koda: Local-First AI Operating-Environment Research |
| `/the-inconvenience/issues/001/` | same | Yes | Issue 001 — How Not to Lose Your Head |
| `/sitemap.xml` | same | Yes | — |
| `/robots.txt` | same | Yes (HEAD) | Sitemap → yewforge-digital.co.uk |

**Conclusion:** Deployed site matches committed `main` as of audit. Local uncommitted homepage WIP is **not** live.

---

## 3. Brand-term inventory (committed HEAD, public crawlable sources)

Occurrence counts (case-insensitive substring) across tracked `*.html` / `*.xml` / `*.txt` / `*.md`, excluding `YewForge Template Development/`:

| Term | HEAD count | Notes |
|------|------------|--------|
| Koda | **552** | Dominated by `/engineering/` journal + sitemap path segments (26) + Inconvenience issue 001 (2) |
| Koda OS | 1 | Engineering glossary / copy |
| Nivren | **0** | Not present in committed public source |
| Nivren OS | **0** | Not present |
| Fenryr | 26 | Homepage work cards, forge-stack hierarchy, campus page CTAs |
| LYRA | 17 | Homepage work cards / social, forge-stack |
| YewForge Campus | 8 | Primarily `campus.html` title/copy (not homepage hero identity) |
| AI operating system | **0** | Phrase unused in committed source |

### Classification of Koda references (HEAD)

| Class | Where | Required treatment |
|-------|--------|--------------------|
| **Active product branding** | `engineering/` titles, H1s, nav, footers, body describing the current programme | Rebrand to **Nivren** / **Nivren OS**; add honest history line |
| **URL / sitemap path segments** | `/engineering/koda/...` in sitemap + filesystem | Keep paths for link stability unless redirects added |
| **Historical editorial** | `the-inconvenience/issues/001/` figure title + alt | Keep factual history; add explanatory context |
| **Historical document names** | e.g. “Koda Public Casefile Fact Bank”, KPCF-*, KR-* | Preserve as historical names; do not falsify |

---

## 4. Page metadata audit (HEAD / live)

### Homepage `index.html` (committed)

- **Title:** YewForge Digital | Websites, AI Tools & Business Software
- **Meta description:** Practical websites, AI tools and business software…
- **Canonical:** `https://yewforge-digital.co.uk/`
- **OG / Twitter:** Present; mirrors services-first title/description; image `assets/yewforge-og-image.png`
- **JSON-LD:** `ProfessionalService` only — name YewForge Digital; **no** Organization Campus identity; **no** SoftwareApplication for Nivren
- **Hero H1:** “A website that works as hard as you do.”
- **Positioning:** Services-first; Fenryr/LYRA/YewFix appear later under work; **no Nivren**

### Other primary rooms (titles)

| Page | Title (committed) |
|------|-------------------|
| campus.html | YewForge Campus | Digital Services Headquarters |
| forge.html | The Forge | Websites, AI Assistants & Business Systems |
| forge-stack.html | The Forge Stack | YewForge Digital Build Environment |
| workshop.html | Workshop | Practical Digital Project Process |
| laboratory.html | Laboratory | YewForge Digital Experiments |
| community-forge.html | Community Forge | YewForge Digital Campus |
| story.html | Story | Useful Technology Made Human-Sized |
| begin.html | Begin | Start a YewForge Digital Project |
| engineering/ | Koda Engineering Journal | YewForge Digital |
| engineering/koda/ | Koda: Local-First AI Operating-Environment Research | … |
| the-inconvenience/ | THE INCONVENIENCE — … |
| Redirects (about/contact/labs/starter) | Forwarding pages with meta |

Canonicals consistently use `https://yewforge-digital.co.uk/...`.  
**No `nivren.ai` ownership claim** found in site source — do not invent as canonical.

### Navigation

Primary rooms: Entrance, The Forge, Partners, Workshop, Laboratory, Community Forge, Story, The Inconvenience, Begin.  
**Missing:** Nivren OS page; Engineering journal (exists but not in main campus nav).

### Image alt

Fenryr / YewFix / LYRA alts are descriptive. No Nivren screenshot/alt yet. Inconvenience issue 001 uses “Koda …” alt (historical UI caption).

### sitemap.xml

- Main campus URLs + Community Forge + The Inconvenience + **27× `/engineering/koda/...`**
- **No** `nivren-os.html`
- Many `lastmod` values stale (2026-06-28 / 2026-07-14/15)

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://yewforge-digital.co.uk/sitemap.xml
```

Correct; no disallow of engineering or campus.

---

## 5. Structural / positioning gaps vs Jake’s brief

| Required hierarchy | Current public posture |
|--------------------|------------------------|
| 1. YewForge Campus (umbrella) | Partial — campus room exists; homepage is services studio |
| 2. Nivren OS (flagship) | **Absent** (0 mentions; no page) |
| 3. Fenryr (internal ops) | Present; correctly “internal” |
| 4. LYRA (research/presence) | Present; public mention only |
| 5. YewFix | Present on homepage work |
| 6. Community Forge / The Inconvenience | Present |
| 7. Commercial services under The Forge | Present on homepage **above** product identity |

Canonical statements (“local-first AI operating system…”) **not** used.  
Manifesto (“Bullshit takes the bus.”) **absent** from committed source.  
Flagship page `nivren-os.html` **absent**.

---

## 6. Uncommitted WIP at audit time (not baseline)

Working tree (not live):

- `index.html` — partial Windsurf/agent edits: new title/meta/OG/Twitter; hero “Home of Nivren OS.”; manifesto block; campus-projects cards; **JSON-LD still ProfessionalService-only**; hero CTAs incomplete (missing engineering log / Fenryr / LYRA prominence); `why-not-wix` trigger removed from hero; `nivren-os.html` still missing
- `robots.txt` — line-ending / whitespace-only diff vs HEAD
- Untracked at start: prior incomplete audit draft, screenshots, template folder, bat helper

---

## 7. Required change plan (post-audit)

### High priority

1. Finish homepage Campus/Nivren-first repositioning per exact brief copy; keep commercial services/pricing lower (do not delete).
2. Create crawlable `nivren-os.html` with exact title/H1/opening + required sections + Koda history line.
3. Replace homepage JSON-LD with **Organization (YewForge)** + **SoftwareApplication (Nivren OS)**.
4. Add manifesto block (exact copy).
5. Sitemap: add `nivren-os.html`; refresh meaningful `lastmod`; keep engineering URLs accurate.
6. Rebrand engineering journal **active** Koda → Nivren with public wording that Nivren was previously developed under the working name Koda; preserve historical casefile names and URL path `/engineering/koda/` unless redirects are added.
7. Inconvenience issue 001: explanatory form for Koda figure title/alt; do not rewrite publication dates.

### Medium

8. Nav links to Nivren OS (+ engineering log where natural).
9. forge-stack hierarchy copy to include Nivren as flagship above Fenryr/LYRA.
10. campus.html meta/hero alignment with Campus/Nivren umbrella (without deleting Forge services).

### Explicit non-goals this pass

- No push / no deploy
- No LYRA **codebase** edits (public website mention only)
- No Nivren/KODA **runtime** repo edits
- No competitor naming in manifesto
- No inventing `nivren.ai` as canonical

---

## 8. Validation checklist (for implementation report)

- [ ] Local static serve / open rendered HTML
- [ ] Search remaining Koda/koda/KODA; classify
- [ ] Nivren visible without interaction
- [ ] Titles/descriptions/canonicals/OG/Twitter
- [ ] sitemap + robots
- [ ] JSON-LD validates structurally
- [ ] Mobile + desktop spot-check
- [ ] Produce `WEBSITE_NIVREN_REPORT.md`
- [ ] Small reversible commits; **do not push**

---

## Audit status

**COMPLETE** against committed HEAD + live GitHub Pages deploy.  
Implementation may proceed in this repository only.
