import sys, re, subprocess, html
from html.parser import HTMLParser
class T(HTMLParser):
    def __init__(s): super().__init__(); s.skip=0; s.out=[]
    def handle_starttag(s,t,a):
        if t in ("script","style","noscript","template"): s.skip+=1
        if t in ("p","li","h1","h2","h3","h4","figcaption","td","th","blockquote","dd","dt","div","section","br","a","button","span"): s.out.append("\n")
    def handle_endtag(s,t):
        if t in ("script","style","noscript","template"): s.skip-=1
    def handle_data(s,d):
        if not s.skip: s.out.append(d)
def sents(txt):
    p=T(); p.feed(txt); t="".join(p.out)
    res=set()
    for block in t.split("\n"):
        b=" ".join(block.split())
        for x in re.split(r"(?<=[.!?])\s+", b):
            x=x.strip()
            if len(x)>=25 and re.search(r"[a-z]", x): res.add(x)
    return res
repo, base, head = sys.argv[1:4]
files=subprocess.run(["git","-C",repo,"ls-tree","-r","--name-only",head],capture_output=True,text=True).stdout.split()
basefiles=subprocess.run(["git","-C",repo,"ls-tree","-r","--name-only",base],capture_output=True,text=True).stdout.split()
allbase=set()
for f in basefiles:
    if f.endswith(".html"):
        allbase|=sents(subprocess.run(["git","-C",repo,"show",f"{base}:{f}"],capture_output=True,text=True).stdout)
new={}
for f in files:
    if not f.endswith(".html") or f.startswith(("partials/","qa/")): continue
    for x in sents(subprocess.run(["git","-C",repo,"show",f"{head}:{f}"],capture_output=True,text=True).stdout):
        if x not in allbase: new.setdefault(x,[]).append(f)
for x,fs in sorted(new.items(), key=lambda kv:-len(kv[1])):
    print(f"{len(fs):3d} | {fs[0]} | {x}")
