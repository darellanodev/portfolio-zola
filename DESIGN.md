# DESIGN.md

Design reference for the portfolio site. Captures visual/UX decisions and architectural rules.

---

## Background Gradient System (Aura)

Two themed gradient backgrounds using layered CSS `mix-blend-mode`. Implemented in `sass/parts/_aura.scss`, rendered in `templates/base.html`.

### Light Mode — "Milk Tea"

- **Category:** flux
- **Base color:** `#faf8f2` (warm off-white)
- **Blend modes:** `normal` (layers 1–2), `multiply` (layer 3)

| Layer | Gradient | Blend | Blur (mobile) | Blur (desktop) |
|-------|----------|-------|---------------|----------------|
| 1 | `ellipse 55% 45% at 30% 50%` — `rgba(217,119,6,0.38)` amber | normal | 145px | 209px |
| 2 | `ellipse 45% 52% at 68% 40%` — `rgba(180,83,9,0.28)` brown | normal | 155px | 223px |
| 3 | `ellipse 30% 28% at 50% 72%` — `rgba(255,255,255,0.62)` white | multiply | 95px | 137px |

### Dark Mode — "Cosmic Dust"

- **Category:** nebula
- **Base color:** `#100e0b` (near-black warm)
- **Blend modes:** all `screen`

| Layer | Gradient | Blend | Blur (mobile) | Blur (desktop) |
|-------|----------|-------|---------------|----------------|
| 1 | `ellipse 40% 50% at 25% 35%` — `rgba(139,92,246,0.9)` purple | screen | 125px | 180px |
| 2 | `ellipse 35% 45% at 70% 60%` — `rgba(6,182,212,0.8)` cyan | screen | 138px | 198px |
| 3 | `ellipse 25% 30% at 50% 20%` — `rgba(244,114,182,0.5)` pink | screen | 100px | 144px |
| 4 | `ellipse 20% 25% at 80% 30%` — `rgba(232,121,249,0.4)` fuchsia | screen | 88px | 126px |

### Architectural Rules

These rules **must** be followed when modifying the gradient system:

1. **Base color on `body`** — Set via `--background-color` CSS variable. The `.aura-bg` container must **NOT** have its own `background-color`. Blend modes composite against whatever is behind them.

2. **Container is transparent** — The gradient container is `position: fixed; inset: 0;` with no background. Layers blend against the body background.

3. **Content above layers** — `header`, `.content`, and `footer` have `position: relative; z-index: 1` to sit above the absolutely-positioned gradient layers.

4. **GPU acceleration** — All layers use `transform: translateZ(0)` and `will-change: transform` for blur performance.

5. **Accessibility** — The container has `aria-hidden="true"` and `pointer-events: none`. Layers are purely decorative.

6. **Mobile hidden** — On viewports `≤768px`, `.aura-bg { display: none }` to save GPU resources.

### Blend Mode Swap Rule

When switching themes, swap blend modes as follows:

| On dark backdrop | On light backdrop |
|------------------|-------------------|
| `screen` | `multiply` |
| `multiply` | no change |
| `normal` | no change |

`screen` on a light surface washes out; `multiply` on a dark surface disappears.

### Implementation Deviations from Original Specs

The actual implementation differs from the original gradient specs in these ways (all intentional improvements):

| Aspect | Original Spec | Implemented | Why |
|--------|---------------|-------------|-----|
| Container positioning | `relative` + `min-height: 100vh` | `fixed` + `inset: 0` | Fixed stays while scrolling; better for persistent bg |
| Mobile behavior | Always visible | `display: none ≤768px` | Saves GPU on mobile |
| Base color source | Directly on `<body>` | `--background-color` CSS variable | Centralizes theme colors |
| `aria-hidden` | On each layer | On container only | Cleaner HTML |

### Files

- `sass/parts/_aura.scss` — All gradient CSS
- `sass/main.scss` — `--background-color` variable definitions (lines 64, 90)
- `templates/base.html` — HTML structure (lines 27–32)
