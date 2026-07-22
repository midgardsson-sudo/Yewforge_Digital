# NIVREN_SCREENSHOT_REQUESTS.md

**Purpose:** Capture list for real Nivren product evidence.  
**Policy:** Do not invent product screenshots, substitute generic AI imagery, or present mockups as working Nivren features. Honest placeholders stay on the page until Jake supplies images.

**Related page:** `nivren-os.html` → `#evidence`

---

## Request 001 — Desktop shell overview — FULFILLED (2026-07-22)

| Field | Value |
|-------|--------|
| Status | **Fulfilled** — wired into homepage carousel + `nivren-os.html#evidence` |
| Filename | `assets/nivren/nivren-desktop-shell-overview.png` |
| Source | `/home/jake/Downloads/screenshots/desktop overview.png` |
| Alt text | Nivren OS desktop shell on local Linux hardware during active development, with IDE and terminal windows open |
| Caption / chips | Desktop shell overview — Working / In development |
| Functionality class | Working / In development |

---

## Request 002 — Observability / telemetry surface — FULFILLED (2026-07-22)

| Field | Value |
|-------|--------|
| Status | **Fulfilled** — wired into homepage carousel + `nivren-os.html#evidence` |
| Filename | `assets/nivren/nivren-observability-surface.png` |
| Source | `/home/jake/Downloads/screenshots/observability.png` |
| Alt text | Nivren observability surface showing local system activity including CPU, GPU, RAM and thermal readings |
| Caption / chips | Observability surface — Working |
| Functionality class | Working |

---

## Request 003 — Nivren Chat as doorway (not the whole product) — FULFILLED (2026-07-22)

| Field | Value |
|-------|--------|
| Status | **Fulfilled** — wired into homepage carousel + `nivren-os.html#evidence` |
| Filename | `assets/nivren/nivren-chat-doorway.png` |
| Source | `/home/jake/Downloads/screenshots/chat.png` |
| Alt text | Nivren Drop Chat open as one interface within the wider Nivren OS desktop |
| Caption / chips | Chat as doorway — Experimental |
| Functionality class | Experimental |

---


## Extra capture — Privacy veil / tiled shell — FULFILLED (2026-07-22)

| Field | Value |
|-------|--------|
| Status | **Fulfilled** (not in original numbered list; Jake labelled `privacy.png`) — homepage carousel + evidence grid |
| Filename | `assets/nivren/nivren-privacy-veil.png` |
| Source | `/home/jake/Downloads/screenshots/privacy.png` |
| Alt text | Nivren OS tiled windows with privacy veil engaged to obscure sensitive content |
| Caption / chips | Privacy veil / tiled shell — Experimental |
| Functionality class | Experimental |

## Request 004 — Evidence / project-state record view

| Field | Value |
|-------|--------|
| Page section | Nivren OS → Screenshots and build evidence |
| Feature that must be shown | Evidence, activity, or project-state record UI that is actually used in the workshop |
| Dimensions / aspect | 1400×900 |
| Capture target | Desktop |
| Required application/window state | Sanitised list or detail view with public-safe sample rows only |
| Pointer visible | No |
| Desktop background | Hidden |
| Must exclude | Private project names Jake has not cleared, filesystem paths, credentials, internal security notes |
| Suggested filename | `assets/nivren/nivren-evidence-records.png` |
| Alt text | Nivren evidence and project-state records interface |
| Caption | Evidence records — Working |
| Functionality class | Working |

---

## Request 005 — Mobile-width capture of a primary Nivren surface (optional)

| Field | Value |
|-------|--------|
| Page section | Nivren OS → Screenshots and build evidence (secondary / responsive proof) |
| Feature that must be shown | A real Nivren surface that is usable or inspectable at mobile width — only if such a surface exists |
| Dimensions / aspect | 390×844 (or device pixel-accurate equivalent) |
| Capture target | Mobile (or desktop resized to mobile width) |
| Required application/window state | Same honesty rules as desktop; do not fake a mobile app shell |
| Pointer visible | No |
| Desktop background | N/A or hidden |
| Must exclude | Same exclusions as Request 001 |
| Suggested filename | `assets/nivren/nivren-surface-mobile.png` |
| Alt text | Nivren interface inspected at mobile width during development |
| Caption | Mobile-width surface — Experimental (only if true) |
| Functionality class | Experimental or Planned — do not capture if no real mobile surface exists |

---

## Placeholder policy

Requests **001–003** plus the privacy-veil extra are fulfilled on the homepage carousel and `nivren-os.html#evidence`. Request **004** (evidence records) and optional **005** (mobile) remain awaiting capture — keep their placeholders until Jake supplies files.

1. Do not invent product screenshots or substitute stock / generated UI as Nivren evidence.
2. Link remaining placeholders to this request list.
3. Unrelated Campus/Forge page work may continue while outstanding screenshots are pending.

## After Jake supplies remaining files

1. Place files under `assets/nivren/` using the suggested names (or update this list if names change).
2. Replace the matching placeholder block with `<figure>` + real `<img alt>` + caption + honest status chip.
3. Note the capture date and functionality class in the next approved daily build update.
