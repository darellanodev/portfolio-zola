## Context

The site has a "Cosmic Dust" aura gradient in dark mode (4 layers, `screen` blend, ellipse gradients, dark backdrop `#100e0b`). The user wants a completely different aura — "Cotton Candy" — for light mode. This is not a blend mode adaptation; it's a full theme-split with different colors, gradient shapes, positions, blend modes, and backdrop.

Dark mode: Cosmic Dust (ellipse gradients, `screen`, backdrop `#100e0b`)
Light mode: Cotton Candy (circle gradients, `normal`/`multiply` mix, backdrop `#faf8f2`)

## Goals / Non-Goals

**Goals:**
- Two visually distinct auras controlled purely by CSS theme selectors
- Dark mode completely unchanged
- Mobile aura disabled in both modes (≤768px)
- Each layer independently styled per theme (colors, shape, position, blend, blur)

**Non-Goals:**
- Changing HTML templates
- Changing the theme switcher logic
- Adding new HTML elements

## Decisions

### Decision 1: Per-layer theme overrides instead of shared defaults

**Choice:** Define Cotton Candy as default (light mode), then override each layer individually inside `html[data-theme='dark']` with Cosmic Dust values.

**Rationale:** The two auras differ in almost every property — colors, positions, gradient shapes, blend modes, blur values. Sharing defaults would require overriding nearly everything anyway. Cleaner to have complete per-theme layer definitions.

**Structure:**
```scss
// Light mode (Cotton Candy) - default
.aura-layer-1 { pink, circle, normal, 200/260px blur }
.aura-layer-2 { purple, circle, normal, 175/252px blur }
.aura-layer-3 { orange, circle, multiply, 200/260px blur }
.aura-layer-4 { purple, circle, multiply, 150/216px blur }

// Dark mode (Cosmic Dust) - override
html[data-theme='dark'] {
  .aura-layer-1 { purple, ellipse, screen, 125/180px blur }
  .aura-layer-2 { cyan, ellipse, screen, 138/198px blur }
  .aura-layer-3 { pink, ellipse, screen, 100/144px blur }
  .aura-layer-4 { magenta, ellipse, screen, 88/126px blur }
}
```

### Decision 2: Light backdrop color change

**Choice:** Change `:root` `--background-color` from `#f2f0ec` to `#faf8f2`.

**Rationale:** The Cotton Candy prompt specifies `#faf8f2` as the backdrop. The existing `#f2f0ec` is close but slightly different. This is a minor warm-tone shift.

### Decision 3: Keep responsive blur in media query

**Choice:** Keep the `@media (min-width: 769px)` block for desktop blur overrides, with values for both themes.

**Rationale:** Both auras have different mobile/desktop blur values. The media query approach already works; just needs both theme's values.

## Risks / Trade-offs

- **[Risk] Cotton Candy too subtle on light background** → `normal` and `multiply` over `#faf8f2` produce soft pastels. If too faint, opacity can be increased. Acceptable as starting point.
- **[Trade-off] Larger CSS file** → Per-layer per-theme overrides mean more CSS lines. Acceptable for visual quality.
