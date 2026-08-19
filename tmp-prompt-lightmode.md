## Aura Gradient: "Milk Tea"

### Visual Description

A warm atmospheric gradient background using layered CSS blend modes.
Category: **flux**. Theme: **light**.
The composition uses 3 layers over a light backdrop (`#faf8f2`):

- **Layer 1:** Radial gradient. Blend mode: `normal`, blur: `145px` (mobile) / `209px` (desktop).
- **Layer 2:** Radial gradient. Blend mode: `normal`, blur: `155px` (mobile) / `223px` (desktop).
- **Layer 3:** Radial gradient. Blend mode: `multiply`, blur: `95px` (mobile) / `137px` (desktop).

### ⚠️ Critical: Blend Mode Architecture

These layers use CSS `mix-blend-mode` (multiply).
Blend modes composite against whatever is **behind** the element - the page/body background.

**DO NOT** set `background-color` on the gradient container itself. Instead:

1. Set `background-color: #faf8f2` on the **`<body>`** or **page wrapper**.
2. The gradient container must be **transparent** (no background).
3. The layers will blend against the body background to create the atmospheric effect.

If you put the base color on the container, the blend modes will composite against that instead of the page, producing incorrect (washed-out or too dark) results.

### Implementation Notes

- Give the container an explicit `min-height: 100vh` (or the height of your section). Every layer is `position: absolute; inset: 0;` so the stack contributes `0px` of height on its own - without this the page collapses to a bare background.
- Each layer is an absolutely-positioned div with its own `mix-blend-mode` and optional `filter: blur()`.
- Use `transform: translateZ(0)` or `will-change: transform` on blur layers for GPU acceleration.
- All decorative layers should have `pointer-events: none` and `aria-hidden="true"`.
- The parent container needs `position: relative` and `overflow: hidden`.
- **The base color (#faf8f2) must be on the body/page, NOT on the container.**
- **Page content must sit above the layers**: wrap it in an element with `position: relative` and `z-index: 1`, otherwise the absolutely-positioned layers paint over it.
- **Do not generate sample text, headings, or demo content** - produce the background only, ready for real content.

### CSS Code

```css
/* Milk Tea - Aura */
/* Base color on BODY - blend modes composite against this */
body {
  background-color: #faf8f2;
}

.aura-bg {
  position: relative;
  overflow: hidden;
  min-height: 100vh; /* height must be explicit - absolute layers add none */
  /* NO background-color - layers blend against body */
}

/* Layer 1 - normal */
.aura-layer-1 {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 55% 45% at 30% 50%,
    rgba(217, 119, 6, 0.38) 0%,
    rgba(245, 158, 11, 0.12) 48%,
    transparent 72%
  );
  mix-blend-mode: normal;
  filter: blur(145px); /* use 209px on desktop */
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

/* Layer 2 - normal */
.aura-layer-2 {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 45% 52% at 68% 40%,
    rgba(180, 83, 9, 0.28) 0%,
    rgba(217, 119, 6, 0.08) 50%,
    transparent 74%
  );
  mix-blend-mode: normal;
  filter: blur(155px); /* use 223px on desktop */
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

/* Layer 3 - multiply */
.aura-layer-3 {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 30% 28% at 50% 72%,
    rgba(255, 255, 255, 0.62) 0%,
    transparent 68%
  );
  mix-blend-mode: multiply;
  filter: blur(95px); /* use 137px on desktop */
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}
```

### Vanilla HTML

```html
<div class="aura-bg">
  <div class="aura-layer-1" aria-hidden="true"></div>
  <div class="aura-layer-2" aria-hidden="true"></div>
  <div class="aura-layer-3" aria-hidden="true"></div>
  <!-- Your content lives here - this wrapper sits ABOVE the absolute layers -->
  <div style="position: relative; z-index: 1;">
    <!-- Your actual content -->
  </div>
</div>
```
