## Context

The "Featured projects" section on the home page and `/projects/` page uses `.bloglist-row` elements inside `.featured-list`. Currently these rows have:
- `background-color: var(--navbar-color)` — an undefined/fallback variable
- No border, no border-radius
- `padding: 1rem 0` (vertical only)

The "Latest videos" section above already has polished card styling with `border: 1px solid var(--divider-color)` and `border-radius: 8px`. The project cards need the same level of visual containment, adapted for the translucent-background-over-aura-gradient pattern.

The site uses a dual-theme aura gradient (Cotton Candy light / Cosmic Dust dark) applied via `position: fixed` layers behind all content. Cards sit on top of this gradient, so their backgrounds must be translucent to let the gradient show through.

## Goals / Non-Goals

**Goals:**
- Add subtle 1px border and 8px border-radius to featured project cards
- Use translucent backgrounds: `rgba(0,0,0,0.35)` dark, `rgba(255,255,255,0.55)` light
- Define `--border: #2c2c33` CSS variable for border color
- Ensure content has enough padding to not touch the border
- Work on both home page and `/projects/` page (both use `.featured-list`)

**Non-Goals:**
- Changing card layout, grid, or content structure
- Modifying the "Latest videos" cards
- Changing the aura gradient itself
- Adding hover effects to project cards (not requested)
- Touching templates (CSS-only change)

## Decisions

### 1. CSS variable `--border` added to `:root` and `[data-theme='dark']`

**Decision:** Define `--border: #2c2c33` in both light and dark modes (same value).

**Rationale:** The user specified `#2c2c33` as a single color. It's a dark gray that provides subtle contrast on both `#faf8f2` (light bg) and `#100e0b` (dark bg). Using a variable keeps it maintainable if the value needs tweaking later.

**Alternative considered:** Using `--divider-color` (existing `#d7d7d7` light / `#4a4a4a` dark). Rejected because the user explicitly requested `#2c2c33` as a distinct border color.

### 2. Translucent backgrounds via theme-aware selectors

**Decision:** Default background is light mode value (`rgba(255,255,255,0.55)`), with `html[data-theme='dark']` override for dark mode (`rgba(0,0,0,0.35)`).

**Rationale:** The theme switcher uses `data-theme` attribute on `<html>`. Default = light (no attribute or `data-theme="light"`), dark = `data-theme="dark"`. This matches the existing pattern in `main.scss`.

### 3. Padding change from `1rem 0` to `1rem`

**Decision:** Uniform `padding: 1rem` on `.bloglist-row` within `.featured-list`.

**Rationale:** Current `1rem 0` means no horizontal padding — content would touch the new border. Adding horizontal padding ensures the icon, title, badge, and description have breathing room inside the frame.

### 4. SCSS-only, no template changes

**Decision:** All changes in `sass/main.scss` (variable) and `sass/parts/_posts_list.scss` (card styles).

**Rationale:** The `.bloglist-row` elements already exist in the DOM. The translucent background replaces the existing `background-color` property. No HTML changes needed.

## Risks / Trade-offs

- **[Risk] Translucent bg on light mode may reduce text readability** → The `rgba(255,255,255,0.55)` is semi-transparent white over `#faf8f2` warm white. This creates a very subtle frosted effect. If text contrast is insufficient, opacity can be increased (e.g., `0.75`).
- **[Risk] `--navbar-color` was undefined** → Removing it in favor of explicit translucent values is an improvement. No fallback needed since we're replacing the property entirely.
- **[Trade-off] Same `--border` color for both themes** → Simpler, but dark mode border on `#100e0b` may appear more subtle than on `#faf8f2`. This matches the user's request for "borde sutil."
