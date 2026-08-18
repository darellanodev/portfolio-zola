## 1. CSS Aura Theme Split

- [x] 1.1 Rewrite `.aura-layer` base styles in `sass/parts/_aura.scss` — remove hardcoded `mix-blend-mode: multiply` from base, set per-layer default styles for Cotton Candy (light mode)
- [x] 1.2 Add Cotton Candy layer definitions: circle gradients, per-layer blend modes (normal/multiply), blur values (mobile + desktop)
- [x] 1.3 Add `html[data-theme='dark']` overrides for all 4 layers with Cosmic Dust values (ellipse gradients, screen blend, original blur)
- [x] 1.4 Verify responsive blur media query covers both themes

## 2. Backdrop Color

- [x] 2.1 Change `:root` `--background-color` from `#f2f0ec` to `#faf8f2` in `sass/main.scss`

## 3. Verification

- [ ] 3.1 Build with `zola serve` and verify dark mode aura appears identical to before (Cosmic Dust)
- [ ] 3.2 Switch to light mode and verify Cotton Candy aura is visible (pink/purple/orange pastels via normal + multiply)
- [ ] 3.3 Resize to ≤768px and verify aura is hidden in both modes
