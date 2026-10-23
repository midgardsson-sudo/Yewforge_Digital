#!/usr/bin/env python3
"""Stamp the shared ember header and footer into every page that opts in.

Pages carry <!--ember:header-->...<!--/ember:header--> and <!--ember:footer-->...<!--/ember:footer-->.
The partials live in partials/. Edit them once, run this, commit the pages. `--check` exits 1 if any page is stale.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
# page -> (root prefix back to site root, nav key that gets aria-current)
PAGES = {"index.html": ("", None), "nivkode/index.html": ("../", "nivkode")}
KEYS = ["nivren", "nivkode", "updates", "about", "press", "contact"]

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

def main():
    check = "--check" in sys.argv
    stale = []
    for page, (root, cur) in PAGES.items():
        p = ROOT / page
        old = p.read_text()
        new = stamp(old, "header", render("header.html", root, cur))
        new = stamp(new, "footer", render("footer.html", root, cur))
        if new != old:
            stale.append(page)
            if not check:
                p.write_text(new)
    print(("stale: " if check else "updated: ") + (", ".join(stale) or "none"))
    return 1 if (check and stale) else 0

if __name__ == "__main__":
    sys.exit(main())
