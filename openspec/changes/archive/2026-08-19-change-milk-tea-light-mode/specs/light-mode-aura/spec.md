## MODIFIED Requirements

### Requirement: Light mode uses Milk Tea aura
The aura gradient in light mode SHALL use the "Milk Tea" design: 3 ellipse-gradient layers with per-layer blend modes (normal for layers 1–2, multiply for layer 3) over a `#faf8f2` backdrop.

#### Scenario: Light mode layer 1
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-1` SHALL have `background: radial-gradient(ellipse 55% 45% at 30% 50%, rgba(217,119,6,0.38) 0%, rgba(245,158,11,0.12) 48%, transparent 72%)`, `mix-blend-mode: normal`, and `filter: blur(145px)` (mobile) / `blur(209px)` (desktop)

#### Scenario: Light mode layer 2
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-2` SHALL have `background: radial-gradient(ellipse 45% 52% at 68% 40%, rgba(180,83,9,0.28) 0%, rgba(217,119,6,0.08) 50%, transparent 74%)`, `mix-blend-mode: normal`, and `filter: blur(155px)` (mobile) / `blur(223px)` (desktop)

#### Scenario: Light mode layer 3
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-3` SHALL have `background: radial-gradient(ellipse 30% 28% at 50% 72%, rgba(255,255,255,0.62) 0%, transparent 68%)`, `mix-blend-mode: multiply`, and `filter: blur(95px)` (mobile) / `blur(137px)` (desktop)

#### Scenario: Light mode has no layer 4
- **WHEN** the page is in light mode
- **THEN** `.aura-layer-4` SHALL NOT exist in the DOM

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
