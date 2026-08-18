## Requirements

### Requirement: Light mode uses Cotton Candy aura
The aura gradient in light mode SHALL use the "Cotton Candy" design: 4 circle-gradient layers with per-layer blend modes (normal for layers 1-2, multiply for layers 3-4) over a `#faf8f2` backdrop.

#### Scenario: Light mode layer 1
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-1` SHALL have `background: radial-gradient(circle at 20% 30%, rgba(244,114,182,0.6) 0%, transparent 50%)`, `mix-blend-mode: normal`, and `filter: blur(200px)` (mobile) / `blur(260px)` (desktop)

#### Scenario: Light mode layer 2
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-2` SHALL have `background: radial-gradient(circle at 75% 25%, rgba(167,139,250,0.5) 0%, transparent 45%)`, `mix-blend-mode: normal`, and `filter: blur(175px)` (mobile) / `blur(252px)` (desktop)

#### Scenario: Light mode layer 3
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-3` SHALL have `background: radial-gradient(circle at 50% 80%, rgba(253,186,116,0.4) 0%, transparent 55%)`, `mix-blend-mode: multiply`, and `filter: blur(200px)` (mobile) / `blur(260px)` (desktop)

#### Scenario: Light mode layer 4
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-4` SHALL have `background: radial-gradient(circle at 85% 70%, rgba(192,132,252,0.3) 0%, transparent 35%)`, `mix-blend-mode: multiply`, and `filter: blur(150px)` (mobile) / `blur(216px)` (desktop)

### Requirement: Dark mode uses Cosmic Dust aura unchanged
The dark mode aura SHALL use the existing Cosmic Dust design: 4 ellipse-gradient layers with `screen` blend mode over `#100e0b` backdrop. No visual regression.

#### Scenario: Dark mode visual parity
- **WHEN** the page is in dark mode
- **THEN** the aura gradient SHALL produce the same visual result as before this change

### Requirement: Light backdrop color
The light mode backdrop SHALL use `#faf8f2` via the `--background-color` CSS variable on `:root`.

#### Scenario: Light mode backdrop
- **WHEN** the page is in light mode
- **THEN** `html` SHALL have `background-color: #faf8f2`

### Requirement: Mobile aura disabled
The aura gradient SHALL be hidden on viewports ≤768px in both light and dark modes.

#### Scenario: Mobile light mode
- **WHEN** the viewport is ≤768px and the page is in light mode
- **THEN** `.aura-bg` SHALL have `display: none`

#### Scenario: Mobile dark mode
- **WHEN** the viewport is ≤768px and the page is in dark mode
- **THEN** `.aura-bg` SHALL have `display: none`
