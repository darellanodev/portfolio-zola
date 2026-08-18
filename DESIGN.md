# DESIGN.md

Design reference for the portfolio site. Captures visual/UX decisions and architectural rules.

---

## Background Gradient System (Aura)

Two themed gradient backgrounds using layered CSS `mix-blend-mode`. Implemented in `sass/parts/_aura.scss`, rendered in `templates/base.html`.

### Light Mode — "Cotton Candy"

- **Category:** mesh
- **Base color:** `#faf8f2` (warm off-white)
- **Blend modes:** `normal` (layers 1–2), `multiply` (layers 3–4)

| Layer | Gradient | Blend | Blur (mobile) | Blur (desktop) |
|-------|----------|-------|---------------|----------------|
| 1 | `circle at 20% 30%` — `rgba(244,114,182,0.6)` pink | normal | 200px | 260px |
| 2 | `circle at 75% 25%` — `rgba(167,139,250,0.5)` purple | normal | 175px | 252px |
| 3 | `circle at 50% 80%` — `rgba(253,186,116,0.4)` orange | multiply | 200px | 260px |
| 4 | `circle at 85% 70%` — `rgba(192,132,252,0.3)` violet | multiply | 150px | 216px |

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
