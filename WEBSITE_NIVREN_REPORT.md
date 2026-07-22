# WEBSITE_NIVREN_REPORT.md

**Date:** 2026-07-22  
**Repo:** `/home/jake/Documents/Koda Vault COPY/JARVIS/Yewforge/Yewforge HQ/`  
**Deploy target:** GitHub Pages → `https://yewforge-digital.co.uk/` (`CNAME`)  
**Remote:** `git@github.com:midgardsson-sudo/Yewforge_Digital.git`  
**Status:** Implementation complete locally. **Not pushed. Not deployed.**

---

## Summary

Public site source repositioned from services-first studio framing to **YewForge Campus / Nivren OS**-first, per Jake’s brief. Audit completed first (`WEBSITE_NIVREN_AUDIT.md`), then small reversible commits on `main` only in the website repo.

---

## Commits (website repo only; not pushed)

| SHA | Message |
|-----|---------|
| `2312354` | Document Phase 1 Nivren repositioning website audit. |
| `1054e64` | Reposition homepage to Campus and Nivren first. |
| `03e1f63` | Add Nivren OS flagship page. |
| `e89a055` | Add nivren-os.html to sitemap with fresh lastmod. |
| `07134a0` | Rebrand engineering journal active naming to Nivren. |
| `dc5b331` | Align Campus nav and hierarchy with Nivren OS. |
| `b736ff8` | Record Nivren website repositioning validation report. |

---

## What changed

### Homepage (`index.html`)
- Title / meta / OG / Twitter: **YewForge Campus | Home of Nivren OS**
- Hero: “Home of Nivren OS.” + exact lead copy
- Manifesto: exact “Bullshit takes the bus.” block
- Prominent links: Nivren OS, Enter the Campus, engineering log, Fenryr, LYRA
- Campus projects section above commercial services
- Commercial services / pricing retained under **The Forge** framing lower on the page
- JSON-LD: Organization (YewForge) + SoftwareApplication (Nivren OS) + WebSite

### New page
- `nivren-os.html` — exact title/H1/opening; required sections; working/active/roadmap honesty; history: “Nivren was previously developed under the working name Koda.”

### SEO
- Canonicals on homepage + nivren-os
- Sitemap entry for `nivren-os.html` with `lastmod` 2026-07-22
- `robots.txt` unchanged (Allow all + sitemap)
- No invented `nivren.ai` canonical

### Engineering journal
- Active branding Koda → Nivren in titles/nav/body
- URL path `/engineering/koda/` retained for continuity
- Historical “Koda Public Casefile…” names preserved
- Explicit working-name note on hub pages

### Other
- Campus room meta/hero + Nivren/Engineering doorway cards
- Shared campus nav: Nivren OS + Engineering
- forge-stack hierarchy includes Nivren as flagship
- The Inconvenience issue 001: explanatory form for historical Koda figure title/alt (dates untouched)

---

## Remaining Koda / koda classification

| Class | Status |
|-------|--------|
| Active public branding | Replaced with Nivren / Nivren OS |
| `/engineering/koda/` URL path segments | **Kept intentionally** (sitemap + filesystem) |
| “working name Koda” history notes | **Kept intentionally** |
| “Koda Public Casefile…” historical doc names | **Kept intentionally** |
| Inconvenience issue 001 figure context | **Historical + explanatory** |

---

## Validation performed

- Parsed homepage + `nivren-os.html` HTML structure (no unclosed tags detected)
- JSON-LD `json.loads` OK on homepage and nivren-os (`@graph` with Organization + SoftwareApplication)
- Local `python3 -m http.server` fetch:
  - `/` renders title “YewForge Campus | Home of Nivren OS”, manifesto, SoftwareApplication, links to nivren-os
  - `/nivren-os.html` renders exact H1 and working-name history
  - `/sitemap.xml` includes nivren-os.html
- Live site was still pre-change at audit time (last-modified 2026-07-15); **no deploy performed**, so live remains unchanged until Jake pushes/publishes

### Mobile / desktop
- Reused existing campus responsive CSS/nav patterns; no new layout system. Spot-checked structure via local HTML; full device QA deferred to Jake before deploy.

---

## Explicit non-actions

- **No push** to `origin`
- **No deploy** to GitHub Pages / yewforge-digital.co.uk
- **Nivren OS / KODA runtime repos untouched** (including `KODA_ACTIVE_CLEAN`)
- **LYRA codebase untouched** (public website mention only)

---

## Paths for parent

- Website repo: `/home/jake/Documents/Koda Vault COPY/JARVIS/Yewforge/Yewforge HQ/` (symlink: `/home/jake/Forge/Projects/Yewforge_Digital`)
- Audit: `WEBSITE_NIVREN_AUDIT.md`
- Report: `WEBSITE_NIVREN_REPORT.md`
- Implementation: **completed** (local commits only)
