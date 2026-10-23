#!/usr/bin/env python3
"""Stamp the shared ember header and footer into every page, and check the whole site.

Pages carry <!--ember:header-->...<!--/ember:header--> and <!--ember:footer-->...<!--/ember:footer-->.
The partials live in partials/. Edit them once, run this, commit the pages.
Every page that carries the markers is stamped; the root prefix and the nav item that gets aria-current
come from the page path. `--check` exits 1 if any page is stale or breaks a site rule.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
KEYS = ["nivren", "nivkode", "updates", "about", "press", "contact"]
# page path -> nav key that gets aria-current
CURRENT = {"nivren.html": "nivren", "nivkode/index.html": "nivkode", "updates/index.html": "updates",
           "about.html": "about", "press/index.html": "press", "contact.html": "contact"}
# Files that are not site pages: the Search Console verification file must stay byte-for-byte as issued.
SKIP = {"googlec4ba5b48223c809e.html"}
OLD_ASSETS = ("about-press.css", "yf-kit.css", "campus.css", "campus.js", "NivrenTechnical.ttf",
              "jetbrains_mono", "JetBrainsMono-", "mobile-menu.js")


def pages():
    for p in sorted(ROOT.rglob("*.html")):
        rel = p.relative_to(ROOT).as_posix()
        if rel.startswith(("partials/", ".git/", "node_modules/", "output/")) or rel in SKIP:
            continue
        yield rel, p


def render(partial, root, cur):
    s = (ROOT / "partials" / partial).read_text()
    s = s.replace("{{root}}", root)
    for k in KEYS:
        s = s.replace("{{cur:%s}}" % k, ' aria-current="page"' if k == cur else "")
    return s.rstrip("\n")


def stamp(text, name, body):
    pat = re.compile(r"(<!--ember:%s-->).*?(<!--/ember:%s-->)" % (name, name), re.S)
    if not pat.search(text):
        raise SystemExit("marker for %s missing" % name)
    return pat.sub(lambda m: m.group(1) + "\n" + body + "\n" + m.group(2), text)


def rules(rel, text):
    """Site rules every page must meet (S2, S6, S7, S10, N3)."""
    bad = []
    if not re.search(r'<html lang="en-GB"', text): bad.append('lang="en-GB"')
    if not re.search(r'<link rel="canonical" href="https://yewforge-digital\.co\.uk/[^"]*"', text): bad.append("canonical")
    if not re.search(r'<meta name="description" content="[^"]+"', text): bad.append("description")
    if not re.search(r'<meta name="viewport"', text): bad.append("viewport")
    if 'href="css/ember.css"' not in text and 'ember.css"' not in text: bad.append("ember.css")
    if '<main id="main"' not in text: bad.append("main#main")
    if 'class="skip-link"' not in text: bad.append("skip link")
    if text.count("<header") != 1 or text.count("<footer") != 1: bad.append("one header/footer")
    if re.search(r'class="[^"]*\beyebrow\b', text): bad.append("eyebrow")
    if re.search(r'\bchip\b|class="[^"]*\bpill\b', text): bad.append("chip/pill")
    for a in OLD_ASSETS:
        if a in text: bad.append("old asset " + a)
    return bad


def main():
    check = "--check" in sys.argv
    stale, broken = [], []
    for rel, p in pages():
        old = p.read_text()
        depth = rel.count("/")
        root = "../" * depth
        if "<!--ember:header-->" not in old:
            broken.append((rel, ["ember markers missing"]))
            continue
        new = stamp(old, "header", render("header.html", root, CURRENT.get(rel)))
        new = stamp(new, "footer", render("footer.html", root, CURRENT.get(rel)))
        if new != old:
            stale.append(rel)
            if not check:
                p.write_text(new)
        bad = rules(rel, new)
        if bad: broken.append((rel, bad))
    # S7: sitemap.xml lists every indexable page by its canonical URL, and nothing else
    want = set()
    for rel, p in pages():
        t = p.read_text()
        if "noindex" in t: continue
        m = re.search(r'<link rel="canonical" href="([^"]+)"', t)
        if m: want.add(m.group(1))
    have = set(re.findall(r"<loc>([^<]+)</loc>", (ROOT / "sitemap.xml").read_text()))
    if want != have:
        broken.append(("sitemap.xml", ["missing " + ", ".join(sorted(want - have)) if want - have else "", "extra " + ", ".join(sorted(have - want)) if have - want else ""]))
    print(("stale: " if check else "updated: ") + (", ".join(stale) or "none"))
    for rel, bad in broken:
        print("RULE %s: %s" % (rel, ", ".join(bad)))
    return 1 if ((check and stale) or broken) else 0


if __name__ == "__main__":
    sys.exit(main())
