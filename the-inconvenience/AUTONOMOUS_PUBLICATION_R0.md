# The Inconvenience — autonomous weekly publication system

**Status:** owner-approved direction, 2026-09-29  
**Home:** `Yewforge_Digital/the-inconvenience/`  
**Role:** YewForge's publication/editorial surface, with a Nivren-backed evidence pipeline.

## Purpose

The Inconvenience should become a polished weekly field report from YewForge: understandable to ordinary readers, useful to technical readers, honest about what happened, and cheap for the owner to maintain.

The system should quietly accumulate evidence during the week and assemble a draft continuously as work is completed. It must **never auto-publish without owner review**.

The desired loop is:

```text
Nivren/YewForge work happens
        ↓
completed shifts / commits / tests / releases / notes become evidence
        ↓
background publication ledger updates
        ↓
plain-English + technical draft sections are regenerated
        ↓
graphs / tables / candidate media are refreshed
        ↓
weekly issue freezes as REVIEW REQUIRED
        ↓
Jake reviews / edits / redacts / approves
        ↓
publish issue + feed + optional social pack
```

This should eventually feel like an ambient Nivren OS capability: the project estate explains itself as it develops.

## Editorial identity

The Inconvenience is not a corporate changelog and not marketing sludge.

It should be:
- clear enough for a non-technical reader;
- technically credible for engineers;
- candid about failures, reversals and uncertainty;
- evidence-backed;
- visually interesting;
- recognisably YewForge/Nivren;
- human in tone without becoming sloppy or self-congratulatory.

A useful subtitle is:

> **The Inconvenience — weekly field notes from YewForge.**

## Two-layer issue structure

Every issue should deliberately serve two audiences.

### 1. What happened?

A short, plain-English layer:
- this week in 60 seconds;
- the biggest change;
- why it matters;
- one or two visual summaries;
- what is visibly different for a user;
- what is next.

No assumed technical knowledge.

### 2. Under the hood

A deeper evidence layer:
- relevant repositories and workstreams;
- commits / PRs / accepted task completions;
- test and benchmark movement;
- architecture changes;
- failures and what was learned;
- provenance;
- explicit unknowns or unverified claims.

The plain-English section should never contradict or exaggerate the technical evidence.

## Recommended issue anatomy

1. Cover
2. This week in 60 seconds
3. The big thing
4. Nivren OS
5. Nivren AI
6. Research & experiments
7. Other YewForge work
8. What broke / what we learned
9. Numbers at a glance
10. Next week / current direction
11. Under the hood
12. Evidence / provenance
13. Owner note where desired

Sections may be omitted when no meaningful evidence exists.

## Evidence sources

The publication engine should prefer durable evidence over recollection.

Candidate sources:
- canonical Git repositories;
- commits and diffs;
- merged/open PR state;
- `ROADMAP/TASK_QUEUE.md` completions;
- Mission Graph / Command Centre state when authoritative;
- test results;
- benchmark reports;
- release artifacts;
- deployment/version state;
- Status Page telemetry where provenance is explicit;
- owner-approved notes;
- project handoffs / returns;
- public-safe screenshots or media.

A statement should be tagged internally with its evidence source.

If a claim cannot be verified, the engine should mark it **owner confirmation required**, not silently present it as fact.

## Shift-level accumulation

The key design is not "generate one article on Sunday from scratch".

During each accepted/completed shift, Nivren should append a small structured publication event to a local publication ledger.

Illustrative event:

```json
{
  "time": "2026-09-29T13:42:00Z",
  "project": "nivren-mobile",
  "workstream": "mobile",
  "event": "shift.completed",
  "summary": "Integrated verified Heavy status source into the SystemUI rail.",
  "evidence": [
    "repo@commit",
    "test-report-id"
  ],
  "public_sensitivity": "review",
  "candidate_public": true
}
```

The event is evidence for a future issue, not publication permission.

The engine may then continuously:
- regroup events by story/theme;
- maintain draft bullets;
- calculate candidate statistics;
- identify missing evidence;
- identify potentially interesting visual moments;
- preserve rejected/redacted details separately from public copy.

This makes weekly synthesis incremental instead of reconstructive.

## Daily reconciliation

At a quiet daily cadence, reconcile the publication ledger against canonical state:
- new commits;
- accepted task completions;
- changed release state;
- benchmark/test changes;
- current project state.

Reconciliation should detect:
- duplicate events;
- claims invalidated later in the week;
- abandoned experiments;
- superseded numbers;
- work that was started but not accepted.

The latest verified state wins, while history remains auditable.

## Weekly freeze and Review Gate

At the chosen weekly boundary:

1. freeze a candidate issue;
2. run sanitisation and privacy checks;
3. produce a factual-confidence/evidence report;
4. generate charts and candidate cover direction;
5. derive an optional social-media pack;
6. mark the issue **REVIEW REQUIRED**;
7. wait for Jake.

No automatic public release.

Owner review may:
- approve;
- edit;
- redact;
- reject an item;
- hold a story for a later issue;
- request a new cover;
- request a deeper or simpler explanation.

Publication occurs only after explicit approval.

## Sanitisation / redaction

The public pipeline must never assume Git visibility equals public suitability.

At minimum detect or flag:
- credentials / tokens / secrets;
- private URLs;
- private repository details that should remain private;
- owner/family personal information;
- device identifiers;
- exact private network topology;
- security-sensitive implementation details;
- unpublished vulnerabilities;
- private datasets;
- copyrighted or non-releasable assets;
- internal conversations;
- unreleased commercial information.

Sanitisation should be deterministic where possible and conservative where uncertain.

Uncertainty means **review**, not publication.

## Graphs and visual explanation

Graphs should explain something, not decorate.

Useful examples:
- accepted tasks by workstream;
- test count / pass trend;
- benchmark change with identical methodology;
- active-device or supported-surface growth;
- project activity by week;
- model resource/latency vs measured capability;
- architecture map when materially changed;
- before/after screenshots.

Every chart should include a plain-English interpretation.

Avoid vanity metrics such as raw lines-of-code without context.

## Cover system

Each issue should receive an original cover based on the dominant verified story of the week.

The cover should:
- retain The Inconvenience/YewForge visual identity;
- vary editorially rather than reuse a generic AI orb;
- be visually strong enough to share on its own;
- avoid exposing private details;
- be generated only after the week's central story is known.

Examples:
- Mobile week → transformed phone/system motif;
- archaeology week → technical excavation/archival motif;
- Foundry week → model/evaluation instrumentation motif;
- Ashfall week → project-specific imagery;
- infrastructure week → clean systems diagram / physical-computing abstraction.

Owner chooses/approves the final cover.

## Social derivatives

After issue approval, derive a small social pack from the same approved source:
- short Facebook/LinkedIn copy;
- Instagram caption;
- 3–5 concise highlights;
- optional carousel cards;
- cover crop(s).

Do not create independent claims in social copy. It must be derivative of the approved issue.

## Architecture boundary

Suggested future structure:

```text
canonical project evidence
        ↓
Publication Collector
        ↓
append-only Publication Ledger
        ↓
Sanitiser / public-safety classifier
        ↓
Story Grouper / Draft Synthesiser
        ↓
Chart + Media candidate builders
        ↓
Issue Compiler
        ↓
REVIEW GATE
        ↓
Publisher
        ├─ website issue
        ├─ archive / RSS
        └─ approved social pack
```

This is a Nivren capability feeding a YewForge publication. Do not make the website itself responsible for estate discovery or privileged access.

## Nivren OS integration direction

Long-term, this should run as a quiet background organ/service.

It should:
- listen for accepted shift/task events;
- use local/canonical evidence first;
- remain low-resource;
- tolerate being offline;
- keep an auditable ledger;
- surface only meaningful review notifications;
- never require Jake to manually copy weekly notes into an article;
- never publish autonomously.

The feature should be useful beyond The Inconvenience: the same evidence stream could later power project retrospectives, release notes, status summaries and public-safe project histories.

## First implementation milestone

Do not start with the full autonomous service.

Build a bounded R0 that can:

1. ingest one week of canonical Git/task/test evidence;
2. construct a structured public-safe candidate ledger;
3. generate one issue with both plain-English and technical layers;
4. produce at least two meaningful graphs;
5. report every source used;
6. flag uncertain/private material;
7. generate candidate cover direction;
8. stop at Review Gate.

Use a real recent week as the acceptance fixture.

If the R0 issue is genuinely publishable after a small owner edit, the concept is proven.

## Success criterion

The owner should be able to end a week with:

> "Show me this week's Inconvenience."

and receive a near-finished, evidence-backed issue that requires review rather than reconstruction.

The public should be able to read it and understand both:
- **what YewForge/Nivren actually achieved**, and
- **how the engineering got there**,

without being exposed to private internals.
