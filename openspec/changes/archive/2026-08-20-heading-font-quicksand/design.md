## Context

The site currently uses Fredoka as the heading font, loaded via Google Fonts `<link>` tag. The user wants to switch to Quicksand. All heading selectors already reference `var(--heading-font)` — only the CSS variable value and the Google Fonts URL need to change. CSP already allows Google Fonts domains from a prior change.

## Goals / Non-Goals

**Goals:**
- Replace Fredoka with Quicksand as the heading font
- Load Quicksand weights 500, 600, 700 via Google Fonts `<link>`
- Document typography choices in DESIGN.md

**Non-Goals:**
- Changing body font (Inter remains)
- Changing font sizes, line-heights, or spacing
- Changing colors or layout
- Modifying font loading strategy (preconnect + `<link>` stays the same)

## Decisions

**Use external Google Fonts `<link>` instead of self-hosting:**
- Quicksand is not already in `static/fonts/` — downloading and self-hosting adds maintenance overhead
- CSP already allows `fonts.googleapis.com` and `fonts.gstatic.com` from the prior google-fonts change
- Alternative considered: self-host Quicksand woff2 files — rejected for simplicity since the CSP change is already in place

**Load weights 500, 600, 700:**
- h1, h2, `.section-title`, `.article-title` → 700
- h3, h4 → 600
- h5 → 500
- Alternative considered: load only 600,700 — rejected because h5 needs 500

**Update only `--heading-font` variable:**
- All heading selectors already use `var(--heading-font)` — no selector changes needed
- Alternative considered: update each h1-h5 individually — rejected as unnecessary duplication

## Risks / Trade-offs

- [Risk] Google Fonts availability — mitigated by `font-display: swap` and fallback chain (`sans-serif`)
- [Risk] Quicksand visual weight may differ from Fredoka — acceptable, user explicitly chose this font
