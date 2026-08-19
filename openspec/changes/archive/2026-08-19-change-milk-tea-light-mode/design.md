## Context

The portfolio site uses a dual-theme aura gradient system implemented in `sass/parts/_aura.scss`. Light mode currently uses "Cotton Candy" — 4 radial-gradient layers (pink, purple, orange, violet) with `circle` shapes, `normal`/`multiply` blend modes, and blur values ranging 150–260px over a `#faf8f2` backdrop.

The user has prepared new light mode specifications in `tmp-prompt-lightmode.md`: a "Milk Tea" gradient with 3 `ellipse`-shaped layers (amber, brown, multiply-blended white) over the same `#faf8f2` backdrop. Dark mode ("Cosmic Dust") must remain unchanged.

The HTML template (`templates/base.html`) currently renders 4 `.aura-layer` divs. Only 3 are needed for Milk Tea.

## Goals / Non-Goals

**Goals:**
- Replace Cotton Candy with Milk Tea in light mode (3 layers, ellipse shapes)
- Remove `.aura-layer-4` from SCSS and HTML template
- Update desktop blur values per the Milk Tea spec (209px, 223px, 137px)
- Preserve dark mode ("Cosmic Dust") with zero visual regression
- Update `DESIGN.md` and the `light-mode-aura` spec to reflect the new design

**Non-Goals:**
- Changing dark mode in any way
- Modifying the aura container positioning, mobile behavior, or z-index stacking
- Changing `--background-color` or any CSS variables
- Restructuring the SCSS architecture

## Decisions

### 1. Remove layer 4 entirely rather than repurposing it

**Decision:** Delete `.aura-layer-4` from both SCSS and HTML.

**Rationale:** Milk Tea requires only 3 layers. Keeping a dormant 4th layer adds unnecessary DOM weight and complicates the SCSS. The HTML template should match the actual layer count.

**Alternative considered:** Hide layer 4 with `display: none`. Rejected — dead code is worse than removed code.

### 2. Rewrite light mode rules in-place within existing SCSS structure

**Decision:** Replace the current `.aura-layer-1` through `.aura-layer-4` rules in the light mode block (lines 17–39) with the new Milk Tea rules, and update the corresponding desktop media query (lines 43–50).

**Rationale:** The SCSS structure (light default → dark override → desktop media queries) is sound. Only the values change. No structural refactoring needed.

### 3. Match gradient spec from tmp-prompt-lightmode.md exactly

**Decision:** Use the exact gradient definitions, positions, opacities, and blend modes from the user's spec file.

**Rationale:** The user tuned these values visually. Deviating would require re-validation.

### 4. Update DESIGN.md light mode section in-place

**Decision:** Replace the "Cotton Candy" section with "Milk Tea" — new name, category ("flux"), 3-layer table with ellipse gradients, updated blur values. Keep architectural rules unchanged since they still apply.

**Rationale:** DESIGN.md is the source of truth for visual decisions. It must reflect the current state.

## Risks / Trade-offs

- **[Risk] Multiply layer 3 visual difference** → The Milk Tea layer 3 uses `rgba(255,255,255,0.62)` with `multiply` blend mode. On `#faf8f2`, white multiply has no effect — the layer relies on blur to create a subtle warm wash. If the effect is too faint, opacity can be increased. Low risk since the user specified these exact values.
- **[Risk] Layer 4 removal may affect dark mode** → Dark mode overrides all 4 layers. Removing layer 4 from the base means the dark override for `.aura-layer-4` targets a non-existent element. This is harmless — CSS selectors on missing elements are no-ops. The dark override for layer 4 should also be removed for cleanliness.
- **[Trade-off] 3 layers vs 4** → Fewer layers means less visual complexity. This is intentional — Milk Tea is a simpler, warmer design.
