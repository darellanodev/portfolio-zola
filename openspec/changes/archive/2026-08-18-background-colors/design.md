## Context

The Zola portfolio uses the tabi theme with dark/light mode switching. The current dark mode background is `#1f1f1f`. The "Cosmic Jelly" effect requires a `#100e0b` base with 3 CSS radial-gradient layers using `mix-blend-mode: screen`. The site's SCSS architecture has a `sass/parts/` directory for partials, imported via `sass/main.scss`.

## Goals / Non-Goals

**Goals:**
- Add a visually striking aura gradient background to all pages in dark mode
- Keep the effect performant (disable on mobile)
- Maintain content readability by layering content above the gradient

**Non-Goals:**
- Light mode aura effect (not needed — `screen` blend modes wash out on light backgrounds)
- Animation or interactivity on the gradient layers
- Changing any non-visual functionality

## Decisions

**1. Dark mode background `#1f1f1f` → `#100e0b`**
The prompt explicitly requires `#100e0b` as the base for `mix-blend-mode: screen` to produce correct colors. This is a subtle darkening — all other dark theme colors remain unchanged.

**2. New SCSS partial `_aura.scss` rather than inlining**
Keeps the aura logic isolated. Easy to toggle by removing one `@use` line.

**3. `<div class="aura-bg">` in `base.html` (not `base_body.html`)**
`base.html` is the root template all pages extend. Adding the HTML here ensures global coverage. The div goes inside `<body>`, before the nav and content.

**4. Mobile disable via `display: none` at 768px**
The 3 blurred layers with `mix-blend-mode` are GPU-intensive. Disabling entirely on mobile is simpler and more performant than reducing blur values.

**5. Content layering via `position: relative; z-index: 1` on `.content`**
The aura layers are `position: absolute` inside `.aura-bg`. Normal-flow siblings (nav, content) naturally paint above them, but explicit z-index ensures this regardless of future CSS changes.

## Risks / Trade-offs

- [Performance on low-end desktops] → The 3 large blurred elements with blend modes could cause jank. Mitigation: `will-change: transform` for GPU compositing, and the effect is purely visual (degradable).
- [Dark background color change] → Slightly darker page backdrop in dark mode. All `--bg-*` variables remain the same, so cards/codeblocks are unaffected.
- [Scrollbar edge] → `position: fixed` layers extend to viewport edges including scrollbar gutter. This is intentional (no dark gap).
