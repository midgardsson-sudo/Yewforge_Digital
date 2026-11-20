#!/usr/bin/env bash
# Render an SVG link card (1200x630) to PNG with headless Chromium, using the site's own Sora font.
# Usage: tools/render_og_card.sh assets/nivkode-og-download-20261120.svg assets/nivkode-og-download-20261120.png
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
svg="$root/${1:?svg}"; png="$root/${2:?png}"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
{
  printf '<!doctype html><meta charset="utf-8"><style>@font-face{font-family:Sora;src:url("file://%s/fonts/ember/sora-latin.woff2") format("woff2");font-weight:100 900}html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}</style>' "$root"
  cat "$svg"
} > "$tmp/card.html"
chromium --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --virtual-time-budget=2000 \
  --window-size=1200,630 --screenshot="$png" "file://$tmp/card.html" >/dev/null 2>&1
file "$png"
