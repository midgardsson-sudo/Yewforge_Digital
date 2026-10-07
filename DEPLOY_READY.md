# SITE-LEGAL-1 / PUB-5 candidate

**Branch:** `legal/site-legal-1-c1-c5-20261007`  
**Candidate code and evidence SHA:** `7fb327a260a591766ffabcb930153243acf3d9f9`  
**Interim Director:** Claude A  
**Deployment:** Not performed

The SHA above contains the support fix and its PNG evidence. This readiness record is committed in a follow-on commit.

## Changed files

- `css/about-press.css` — hide chips carrying the HTML `hidden` attribute.
- `css/campus.css` — SITE-LEGAL-1 removal of the external Google Fonts import (already on this branch).
- `privacy.html` — SITE-LEGAL-1 corrections C1–C5 (already on this branch).
- `output/playwright/pub5-20261007/before-support-1280.png`
- `output/playwright/pub5-20261007/after-support-1280.png`
- `output/playwright/pub5-20261007/before-support-390.png`
- `output/playwright/pub5-20261007/after-support-390.png`
- `output/playwright/pub5-20261007/before-privacy-1280.png`
- `output/playwright/pub5-20261007/after-privacy-1280.png`
- `output/playwright/pub5-20261007/before-privacy-390.png`
- `output/playwright/pub5-20261007/after-privacy-390.png`
- `output/playwright/pub5-20261007/before-updates-archive-1280.png`
- `output/playwright/pub5-20261007/after-updates-archive-1280.png`
- `output/playwright/pub5-20261007/before-updates-archive-390.png`
- `output/playwright/pub5-20261007/after-updates-archive-390.png`
- `DEPLOY_READY.md` — this readiness record.

## Verification

- Reproduced the support bug before the fix at 1280 px and 390 px: the fallback had `hidden=true` but computed to `inline-flex` and displayed “The support link is temporarily unavailable.”
- After the fix, the fallback computes to `display: none` with no client rect at both widths. The Ko-fi link is visible and points to `https://ko-fi.com/yewforge`; a headless-browser click opened it successfully with HTTP 200.
- Checked 774 local `href`, `src` and HTML fragment references across 110 HTML files; all resolved.
- The changed Privacy and Nivren updates archive pages returned HTTP 200. Their before/after PNGs are pixel-identical at desktop and 390 px mobile viewports.
- `git diff --check` passed. The repository has no test suite or built-in check runner/configuration.

## Open owner rulings (PUB-1)

- Owner ruling required on the Nivren page status lines.
- Owner ruling required on the NivKode page heading.

These rulings remain open; no wording decision is made here.
