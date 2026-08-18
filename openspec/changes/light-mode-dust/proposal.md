## Why

The Cosmic Dust aura gradient works in dark mode but is invisible in light mode (same `screen` blend mode washes out). Instead of adapting Cosmic Dust for light surfaces, the user wants a completely different aura — "Cotton Candy" — with its own colors, shapes, positions, blend modes, and backdrop color. Dark mode remains unchanged.

## What Changes

- Rewrite `sass/parts/_aura.scss` to support two distinct auras: Cotton Candy (light, default) and Cosmic Dust (dark, override)
- Each layer needs per-theme overrides: colors, positions, gradient shapes (circle vs ellipse), blend modes (normal/multiply vs screen), and blur values
- Light backdrop changes from `#f2f0ec` to `#faf8f2` in the `:root` CSS variable
- No HTML template changes — same 4 layer divs

## Capabilities

### New Capabilities
- `light-mode-aura`: Cotton Candy aura gradient for light mode with per-layer colors, blend modes, shapes, and blur

### Modified Capabilities

## Impact

- `sass/parts/_aura.scss`: Full rewrite of layer styles with theme-split per layer
- `sass/main.scss`: Change `:root` `--background-color` from `#f2f0ec` to `#faf8f2`
- No HTML changes, no config changes
