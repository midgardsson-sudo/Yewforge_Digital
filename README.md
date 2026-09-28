# Yewforge Digital Website

Static GitHub Pages website for Yewforge Digital.

The site is structured as a small "Yewforge Campus" with separate HTML rooms:

- `index.html` - Entrance
- `forge.html` - The Forge
- `workshop.html` - Workshop
- `laboratory.html` - Laboratory
- `community-forge.html` - Community Forge
- `story.html` - Story
- `begin.html` - Begin
- `the-inconvenience/` - **The Inconvenience**, YewForge's publication/editorial surface

Shared styling lives in `css/campus.css`.
Shared interaction behavior lives in `js/campus.js`.

Legacy pages such as `labs.html`, `about.html`, `starter.html` and `contact.html` forward to the new room names.

## The Inconvenience

The publication already has its own section under `the-inconvenience/`, including
issues, archive, assets, editorial principles, RSS and dedicated presentation.

The owner-approved direction for redesigning it into a Nivren-backed weekly
publication system is recorded in:

`the-inconvenience/AUTOMATED_PUBLICATION_SYSTEM_R0.md`

The long-term goal is a quiet Nivren OS background capability that accumulates
public-safe evidence as shifts complete, incrementally constructs the week's issue,
generates useful explanations/graphs/cover/social candidates, and then stops at an
explicit owner Review Gate. It must not publish autonomously.
