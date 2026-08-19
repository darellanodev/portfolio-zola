## 1. SCSS — Light Mode Gradient

- [x] 1.1 Replace `.aura-layer-1` background with Milk Tea ellipse gradient, update blur to 145px
- [x] 1.2 Replace `.aura-layer-2` background with Milk Tea ellipse gradient, update blur to 155px
- [x] 1.3 Replace `.aura-layer-3` background with Milk Tea ellipse gradient, update blur to 95px
- [x] 1.4 Remove `.aura-layer-4` rule from light mode block

## 2. SCSS — Desktop Blur Values

- [x] 2.1 Update light mode desktop media query: layer 1 blur → 209px, layer 2 blur → 223px, layer 3 blur → 137px
- [x] 2.2 Remove `.aura-layer-4` from light mode desktop media query

## 3. SCSS — Dark Mode Cleanup

- [x] 3.1 Remove `.aura-layer-4` override from `html[data-theme='dark']` block
- [x] 3.2 Remove `.aura-layer-4` from dark mode desktop media query

## 4. HTML Template

- [x] 4.1 Remove `<div class="aura-layer aura-layer-4"></div>` from `templates/base.html`

## 5. Documentation

- [x] 5.1 Update `DESIGN.md` light mode section: rename to "Milk Tea", category "flux", 3-layer table with ellipse gradients and new blur values
- [x] 5.2 Update `openspec/specs/light-mode-aura/spec.md` to reflect Milk Tea requirements

## 6. Verification

- [x] 6.1 Build Zola site and verify no SCSS compilation errors
- [x] 6.2 Verify light mode shows warm amber/brown gradient (3 layers, no layer 4)
- [x] 6.3 Verify dark mode is unchanged (Cosmic Dust, 4 layers with screen blend)
- [x] 6.4 Verify mobile still hides aura on ≤768px
