## Why

The "Featured projects" cards currently have no visual border or background separation from the aura gradient behind them. On dark mode the cards blend into the dark backdrop, and on light mode they float without definition. Adding a subtle frame with translucent background gives each card visual containment while preserving the gradient effect underneath — matching the polish already present on the "Latest videos" cards.

## What Changes

- Add a new `--border` CSS variable (`#2c2c33`) in both light and dark modes
- Add 1px subtle border and 8px border-radius to each `.featured-list .bloglist-row`
- Replace the solid `var(--navbar-color)` background with translucent values: `rgba(0,0,0,0.35)` in dark mode, `rgba(255,255,255,0.55)` in light mode
- Adjust row padding from `1rem 0` to `1rem` so content does not touch the border

## Capabilities

### New Capabilities

- `project-card-styling`: Visual styling of featured project cards — border, border-radius, translucent background per theme, and internal padding

### Modified Capabilities

- `featured-projects-section`: Requirement added for cards to have visual frame (border, radius, translucent bg) in both themes
- `projects-cards-layout`: Requirement added for the projects page cards to inherit the same visual frame styling

## Impact

- `sass/main.scss` — add `--border` variable in `:root` and `[data-theme='dark']`
- `sass/parts/_posts_list.scss` — modify `.featured-list .bloglist-row` styles, add dark mode background override
- No template changes, no new dependencies
