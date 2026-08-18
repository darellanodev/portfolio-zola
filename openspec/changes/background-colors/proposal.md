## Why

The portfolio site needs a distinctive visual identity. A "Cosmic Jelly" aura gradient background — using layered CSS blend modes over a dark backdrop — adds a vivid, atmospheric effect that differentiates the site from plain dark themes. This is a purely visual enhancement with no functional impact.

## What Changes

- Add a new `_aura.scss` partial with 3 radial-gradient layers using `mix-blend-mode: screen`
- Change dark mode `--background-color` from `#1f1f1f` to `#100e0b` (required base for blend modes)
- Add `<div class="aura-bg">` with 3 layer divs to `templates/base.html` (global, all pages)
- Add z-index layering to ensure content sits above the gradient layers
- Disable the effect on mobile (< 768px) for performance

## Capabilities

### New Capabilities
- `aura-gradient`: Cosmic Jelly aura gradient background effect — 3 layered radial gradients with CSS blend modes, dark-mode only, disabled on mobile

### Modified Capabilities

## Impact

- `sass/main.scss`: add `@use 'parts/_aura.scss'`, change dark `--background-color`
- `sass/parts/_aura.scss`: new file with all aura CSS
- `templates/base.html`: add aura HTML inside `<body>`
- No API, dependency, or runtime changes
