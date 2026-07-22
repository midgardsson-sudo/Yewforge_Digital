# NIVREN_SCREENSHOT_REQUESTS.md

**Purpose:** Capture list for real Nivren product evidence.  
**Policy:** Do not invent product screenshots, substitute generic AI imagery, or present mockups as working Nivren features. Honest placeholders stay on the page until Jake supplies images.

**Related page:** `nivren-os.html` → `#evidence`

---

## Request 001 — Desktop shell overview

| Field | Value |
|-------|--------|
| Page section | Nivren OS → Screenshots and build evidence |
| Feature that must be shown | Nivren desktop / primary shell with recognisable OS chrome (panels or dock), not a browser-only dashboard |
| Dimensions / aspect | 1600×900 (16:9) preferred; 1920×1080 acceptable |
| Capture target | Desktop |
| Required application/window state | Desktop idle or lightly populated with 1–2 real Nivren surfaces open; no staged fake windows |
| Pointer visible | No |
| Desktop background | Blurred or cropped so wallpaper does not dominate; hide personal photos |
| Must exclude | Private paths, usernames, API keys, chat contents, notifications with personal data, credentials, crash dialogs |
| Suggested filename | `assets/nivren/nivren-desktop-shell-overview.png` |
| Alt text | Nivren OS desktop shell on local Linux hardware during active development |
| Caption | Desktop shell overview — Working / In development (label to match actual state at capture) |
| Functionality class | Working or Experimental — label honestly after capture |

---

## Request 002 — Observability / telemetry surface

| Field | Value |
|-------|--------|
| Page section | Nivren OS → Screenshots and build evidence |
| Feature that must be shown | Live workshop observability or telemetry surface that already exists (GPU/RAM/system activity or equivalent demonstrated panel) |
| Dimensions / aspect | 1400×900 (approx 14:9) or 16:9 crop |
| Capture target | Desktop |
| Required application/window state | Panel showing real local readings; freeze a calm non-alarming moment |
| Pointer visible | No |
| Desktop background | Hidden / cropped out of frame if possible |
| Must exclude | Hostnames that leak private identity, absolute home paths, tokens, raw crash stacks, unrelated personal notifications |
| Suggested filename | `assets/nivren/nivren-observability-surface.png` |
| Alt text | Nivren observability surface showing local system activity |
| Caption | Observability surface — Working (only if this exact panel is demonstrated) |
| Functionality class | Working |

---

## Request 003 — Nivren Chat as doorway (not the whole product)

| Field | Value |
|-------|--------|
| Page section | Nivren OS → Screenshots and build evidence · supports “Nivren Chat” card |
| Feature that must be shown | Conversational surface clearly framed as one doorway into the wider OS (chrome, nav, or sibling panels visible) |
| Dimensions / aspect | 1200×900 (4:3) or 16:9 |
| Capture target | Desktop |
| Required application/window state | Chat UI open with placeholder or scrubbed non-sensitive prompt/response; surrounding OS context visible |
| Pointer visible | Optional, only if it clarifies a control |
| Desktop background | Blurred or out of frame |
| Must exclude | Real private conversations, customer data, model system prompts, API keys, unpublished research text |
| Suggested filename | `assets/nivren/nivren-chat-doorway.png` |
| Alt text | Nivren Chat open as one interface within the wider operating environment |
| Caption | Chat as doorway — Experimental or In development |
| Functionality class | Experimental or In development |

---

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

Until images arrive:

1. Keep the styled temporary placeholders on `nivren-os.html#evidence`.
2. Link placeholders to this request list.
3. Do not commit stock photos or generated UI as product evidence.
4. Unrelated Campus/Forge page work may continue while screenshots are pending.

## After Jake supplies files

1. Place files under `assets/nivren/` using the suggested names (or update this list if names change).
2. Replace the matching placeholder block with `<figure>` + real `<img alt>` + caption + honest status chip.
3. Note the capture date and functionality class in the next approved daily build update.
