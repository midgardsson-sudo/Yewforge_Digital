# The Inconvenience — Automated Publication System R0

**Status:** owner-approved direction; architecture / redesign work not yet implemented.

## Purpose

**The Inconvenience** is YewForge's publication/editorial surface: a weekly field report that explains what was actually built, learned, broken, changed and proven across YewForge/Nivren.

The publication should serve two readers at once:

1. a normal person who wants to understand what changed without needing engineering knowledge;
2. a technical reader who wants evidence, graphs, implementation detail, limitations and provenance.

The publication must not become marketing sludge. It should be candid, readable, technically credible and recognisably YewForge.

## Product direction

The long-term target is for The Inconvenience to become a **Nivren OS background feature**, not a manually assembled blog.

Nivren should quietly maintain a public-safe editorial model of the week's work as the week happens. Each completed shift, accepted task, Git checkpoint, test run, release, experiment or owner-approved note can contribute evidence to an issue-in-progress.

The system should incrementally build and revise the weekly issue rather than reconstructing the entire week from scratch on publication day.

Target flow:

```text
work happens
    ↓
shift / task / commit / experiment completes
    ↓
public-safe evidence candidate recorded
    ↓
daily incremental synthesis
    ↓
weekly issue-in-progress continuously improves
    ↓
weekly editorial + sanitisation pass
    ↓
cover / graphs / social derivatives generated
    ↓
OWNER REVIEW GATE
    ↓
publish
```

**Nothing public is published automatically without explicit owner approval.**

## Editorial promise

Every issue should answer:

- What happened?
- Why does it matter?
- What actually works now?
- What failed or changed direction?
- What evidence supports the claims?
- What is still uncertain?
- What comes next?

The system should distinguish:
- facts proven by source evidence;
- owner intent;
- hypotheses / experiments;
- incomplete work;
- public-safe interpretation.

Never convert intent into evidence.

## Audience layers

### Layer 1 — "This week in 60 seconds"
Plain-English overview for anyone.

No assumed knowledge. Minimal jargon. Explain unfamiliar terms.

### Layer 2 — The story
A small number of meaningful developments presented as a coherent editorial narrative.

This should explain why the work matters rather than merely listing commits.

### Layer 3 — Under the hood
Technical detail for readers who want it:
- architecture;
- implementation changes;
- tests;
- benchmarks;
- limitations;
- provenance;
- selected commit/PR references where public-safe.

### Layer 4 — Evidence / receipts
A reproducible appendix where appropriate:
- commit ranges;
- test deltas;
- benchmark methodology;
- version/build identifiers;
- public-safe artifact references;
- explicit evidence gaps.

## Candidate issue structure

The exact design may change during the redesign, but the content contract should initially support:

1. **Cover**
2. **This week in 60 seconds**
3. **The big thing**
4. **Nivren OS**
5. **Nivren AI**
6. **Research & experiments**
7. **Other YewForge work**
8. **What broke / what we learned**
9. **Numbers at a glance**
10. **For normal humans — what this actually means**
11. **Under the hood**
12. **What is still incomplete**
13. **Next week / next questions**
14. **Evidence / provenance**
15. **Owner/editor notes if intentionally published**

Sections should disappear when they have nothing useful to say. Do not pad an issue to satisfy a template.

## Background evidence ingestion

The Inconvenience engine should eventually ingest **bounded, explicit, public-safe evidence adapters**, not arbitrary unrestricted owner data.

Candidate sources:

- canonical Git repositories and commit history;
- merged/accepted PRs;
- Nivren canonical task queue completions;
- worker shift completion events;
- test/benchmark summaries;
- release/build manifests;
- Nivren Status / Command Centre public-safe telemetry;
- owner-designated notes;
- owner-designated screenshots / photographs / visual artifacts;
- public announcements already approved.

A source being readable does **not** mean it is publishable.

Each source item should carry:
- origin;
- timestamp;
- repo/project;
- evidence type;
- public-safety classification;
- confidence/provenance;
- whether owner review is required;
- whether it has already appeared in an issue.

## Shift-completion integration

When a Nivren worker completes a shift/task, the system should be able to emit a small **publication candidate record** alongside the normal engineering evidence.

Example conceptual record:

```json
{
  "project": "nivren-mobile",
  "event": "task_completed",
  "summary_public": "Improved native system-state integration.",
  "evidence": ["commit:<sha>", "tests:<run-id>"],
  "public_safety": "candidate",
  "claims": [
    {"text": "X tests passed", "evidence": "tests:<run-id>"}
  ],
  "redactions_required": [],
  "owner_review": false
}
```

This is **not** a publication. It is structured raw material.

## Daily incremental build

At a low-priority daily cadence, Nivren should:

1. collect new publication candidates since the previous run;
2. deduplicate repeated evidence;
3. update the in-progress weekly issue model;
4. group developments into coherent themes;
5. identify missing evidence for draft claims;
6. maintain candidate metrics/graphs;
7. flag possible sensitive material;
8. revise plain-English explanations as understanding improves;
9. retain provenance to every source;
10. leave the issue as **DRAFT**.

The daily process should be cheap, resumable and idempotent.

It should not regenerate expensive artwork every day.

## Weekly synthesis

At the weekly boundary the system should produce a review package containing:

- polished issue draft;
- "60 seconds" summary;
- technical appendix;
- evidence map;
- sanitation/redaction report;
- unresolved claim warnings;
- candidate graphs;
- candidate cover direction;
- candidate in-article visuals;
- social-media derivative copy;
- list of omitted evidence and why it was omitted.

Example review summary:

```text
ISSUE 014 — DRAFT READY

Repositories examined: 18
Relevant commits: 47
Accepted task completions: 6
Candidate visuals: 4
Automatic redactions: 7
Owner-confirmation questions: 2
Unsupported draft claims: 0

STATUS: WAITING FOR OWNER REVIEW
```

## Sanitisation / redaction gate

This is mandatory.

Before owner review, the system must scan for and remove/flag material including:

- secrets, tokens, credentials, private keys;
- private URLs/endpoints;
- IPs / Tailnet details where not approved;
- local absolute paths where they expose private information;
- owner/family private context;
- personal correspondence;
- private training data;
- device identifiers;
- unpublished security architecture;
- exploit / bypass details inappropriate for release;
- commercial/private negotiations;
- exact private infrastructure topology;
- content whose licence or ownership is unclear.

Uncertain material fails closed into **REVIEW REQUIRED**.

No LLM should be trusted as the sole secret scanner. Combine deterministic scanners/rules with model-assisted review.

## Claims discipline

Every non-trivial factual claim should be traceable to evidence.

Draft generation should support claim classes such as:

- **PROVEN** — directly supported by evidence;
- **MEASURED** — supported by a reproducible measurement;
- **OBSERVED** — observed during a run but not yet independently reproduced;
- **PLANNED** — owner-approved direction, not implemented;
- **EXPERIMENTAL** — exploratory work, no product claim;
- **UNKNOWN / GAP** — insufficient evidence.

Public prose need not display these labels everywhere, but the review artifact should.

## Graphs and data visualisation

Graphs are useful when they explain something.

Candidate charts:
- test coverage / passing-test change;
- tasks completed by workstream;
- benchmark comparisons with methodology;
- model latency/resource/capability comparisons;
- device/fleet health where public-safe;
- issue-to-issue project activity;
- release/build progression;
- architecture maps when the architecture actually changed.

Avoid vanity metrics.

Every graph should have a one-sentence plain-English explanation.

## Cover system

Each issue should have an original cover reflecting the week's dominant story.

Do **not** use a generic neon-AI orb every week.

The cover system should preserve a recognisable editorial identity while allowing the subject to change:
- photography;
- technical diagrams;
- abstract motion/design;
- archaeological visual language;
- device photography;
- Ashfall imagery;
- model/AI visualisation;
- typography-led covers.

Cover generation should happen after the issue's dominant story is known.

Owner must approve the final cover.

## Social derivatives

After the issue itself is approved, the system may derive:
- short Facebook post;
- Instagram caption;
- LinkedIn-style summary where useful;
- 3–5 short update snippets;
- carousel copy / selected graphs;
- issue cover asset;
- short "this week" summary.

Derived posts must stay faithful to the approved issue and must not introduce new claims.

Publishing remains owner-gated.

## Relationship to Nivren OS

The Inconvenience should eventually appear in Nivren OS as an unobtrusive background editorial service.

Candidate capabilities:
- maintain current issue-in-progress;
- show evidence intake health;
- show sanitation warnings;
- show unresolved claims;
- preview graph candidates;
- generate review package;
- indicate "waiting for owner";
- publish only after explicit approval.

The service should be quiet during normal use and avoid consuming significant compute needed by development work.

## Suggested internal architecture

```text
PUBLIC-SAFE SOURCE ADAPTERS
          ↓
EVIDENCE LEDGER
          ↓
SANITISATION / CLASSIFICATION
          ↓
WEEKLY EDITORIAL MODEL
          ↓
CLAIM ↔ EVIDENCE MAP
          ↓
PLAIN-ENGLISH + TECHNICAL RENDERERS
          ↓
GRAPH / VISUAL CANDIDATES
          ↓
REVIEW PACKAGE
          ↓
OWNER REVIEW GATE
          ↓
PUBLISHER + SOCIAL DERIVATIVES
```

Important separation:

- engineering truth remains in canonical engineering sources;
- The Inconvenience consumes evidence but is **not** the engineering source of truth;
- publication state does not mutate engineering history;
- publishing authority is separate from synthesis capability.

## Storage model

Prefer append-only or versioned records for evidence intake and draft revisions.

The system should be able to answer:
- why did this sentence appear?
- what evidence supported it?
- what changed between drafts?
- what was redacted?
- who approved publication?
- which issue first mentioned a development?

## Failure behaviour

If evidence is incomplete:
- say so;
- omit the claim;
- or ask for owner confirmation.

Never fill gaps with plausible prose.

If sanitation fails:
- block publication.

If image generation fails:
- publish no image rather than a misleading one.

If a daily run is missed:
- resume from the evidence cursor without duplicating content.

## Design / redesign requirement

The existing publication should be redesigned around this editorial model.

The redesign should aim for:
- strong magazine/editorial identity;
- excellent typography;
- easy "normal human" reading;
- optional deep technical reading;
- useful graphs;
- excellent mobile presentation;
- clear issue archive;
- strong cover art;
- RSS/feed continuity where practical;
- accessibility;
- static/exportable issues where useful.

The site should feel like an independent publication produced by a real lab, not a changelog with CSS.

## R0 prototype acceptance

Before any autonomous publishing work, prove one issue end-to-end using a real recent week.

R0 should:

1. collect a bounded set of real Git/task/evidence sources;
2. generate a draft issue;
3. produce a claim/evidence map;
4. produce a sanitisation report;
5. produce at least one useful graph;
6. produce candidate cover direction;
7. produce social derivatives;
8. stop at owner review;
9. demonstrate that no publication occurs without approval.

Only after this works should the background daily loop be connected to Nivren OS.

## Non-goals

- no unattended public publishing;
- no scraping every private owner data source "just in case";
- no pretending activity equals progress;
- no invented benchmarks;
- no raw secret/private logs in editorial prompts;
- no marketing claim without evidence;
- no daily expensive regeneration of the whole issue;
- no replacing canonical engineering records.

## North-star behaviour

Eventually, The Inconvenience should be boring to operate:

> Nivren quietly understands what changed as work happens, maintains an increasingly coherent public-safe draft throughout the week, and arrives at the end of the week with a polished issue waiting for Jake to review rather than asking Jake to reconstruct seven days of work from memory.

That is the feature.
