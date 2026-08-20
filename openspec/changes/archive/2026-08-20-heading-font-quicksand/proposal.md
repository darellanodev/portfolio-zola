## Why

The current heading font (Fredoka) needs to be replaced with Quicksand for aesthetic reasons. This is a typography-only change — no colors, sizes, or layout modifications.

## What Changes

- Replace Google Fonts `<link>` from Fredoka to Quicksand (weights 500, 600, 700)
- Update `--heading-font` CSS variable from `'Fredoka', sans-serif` to `'Quicksand', sans-serif`
- Add Typography section to DESIGN.md documenting the font choices
- All heading selectors (h1–h5, `.section-title`, `.article-title`, `.gradient-color`) already use `var(--heading-font)` — no selector changes needed

## Capabilities

### New Capabilities
- `typography`: Font families, weights, and loading strategy for headings and body text

### Modified Capabilities
None — no existing specs cover typography

## Impact

- `templates/partials/header.html` — Google Fonts `<link>` tag
- `sass/main.scss` — `--heading-font` CSS variable
- `DESIGN.md` — new Typography section
