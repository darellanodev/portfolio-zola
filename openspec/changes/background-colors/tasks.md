## 1. Create aura gradient styles

- [x] 1.1 Create `sass/parts/_aura.scss` with the 3-layer cosmic jelly effect: purple `rgba(217,70,239,0.72)` at `top: 10%; left: 15%`, cyan `rgba(34,211,238,0.68)` at `bottom: 20%; right: 10%`, pink `rgba(244,114,182,0.42)` at `top: 60%; left: 60%` — all with blur filters (88-144px), `mix-blend-mode: screen`, `position: absolute`, `border-radius: 50%`
- [x] 1.2 Add `.aura-bg` container styles: `position: relative; overflow: hidden` with `.content` inside getting `position: relative; z-index: 1`
- [x] 1.3 Add mobile disable: `@media (max-width: 768px) { .aura-bg { display: none; } }`

## 2. Import SCSS partial

- [x] 2.1 Add `@use 'parts/aura';` to `sass/main.scss` (at the end, before any overrides)

## 3. Update dark mode background color

- [x] 3.1 Change `[data-theme='dark']` `--background-color` from `#1f1f1f` to `#100e0b` in `sass/main.scss`

## 4. Add aura HTML to base template

- [x] 4.1 Add `<div class="aura-bg"><div class="aura-layer aura-1"></div><div class="aura-layer aura-2"></div><div class="aura-layer aura-3"></div></div>` inside `<body>` in `templates/base.html`, before the nav

## 5. Verification

- [ ] 5.1 Rebuild the site with Zola and confirm Sass compiles without errors
- [ ] 5.2 Visually verify dark mode shows the 3-layer aura gradient behind all page content
- [ ] 5.3 Visually verify light mode has no aura effect (only dark background color change)
- [ ] 5.4 Verify mobile viewport (≤768px) has no aura effect
