## Why

The current light mode aura gradient ("Cotton Candy") uses pink/purple/orange/violet tones that feel cool-toned and disconnected from the warm off-white `#faf8f2` backdrop. A warmer "Milk Tea" palette — amber and brown tones with a multiply-blended white highlight — creates a more cohesive, atmospheric feel that complements the base color rather than contrasting against it. Additionally, reducing from 4 layers to 3 simplifies the gradient stack.

## What Changes

- Replace the light mode aura gradient from "Cotton Candy" (4 layers: pink, purple, orange, violet) to "Milk Tea" (3 layers: amber, brown, white)
- Change gradient shape from `circle` to `ellipse` for layers 1–3
- Adjust blend modes: layers 1–2 stay `normal`, layer 3 stays `multiply`
- Update blur values to tighter ranges (95–223px vs. current 150–260px)
- Remove `.aura-layer-4` from the HTML template (only 3 layers needed)
- Dark mode ("Cosmic Dust") remains completely unchanged

## Capabilities

### Modified Capabilities

- `light-mode-aura`: Requirements change from Cotton Candy (4 circle-gradient layers) to Milk Tea (3 ellipse-gradient layers) with new gradient positions, colors, and blur values

### New Capabilities

_(none)_

## Impact

- **SCSS**: `sass/parts/_aura.scss` — rewrite light mode layer rules, remove layer 4 references
- **Template**: `templates/base.html` — remove the 4th `.aura-layer` div (line 31)
- **Specs**: `openspec/specs/light-mode-aura/spec.md` — update requirements to reflect Milk Tea
- **Design doc**: `DESIGN.md` — update light mode section
- **No CSS variable changes**: `--background-color: #faf8f2` stays the same
