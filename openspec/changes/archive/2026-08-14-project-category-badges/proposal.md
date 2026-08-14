## Why

Projects now carry a `category` in their `[extra]` frontmatter (see `project-categories`), but visitors cannot see it anywhere. Displaying a colored badge next to every project makes the portfolio scannable at a glance and surfaces the existing categorization.

## What Changes

- Add a reusable category badge partial that renders `page.extra.category` as a pill-style label, guarded so it only appears when a category is present.
- Render the badge in the three places projects appear:
  - Home page (`templates/macros/list_posts.html`, shared with blog list — badge must be hidden for blog posts without a category)
  - Projects section cards (`templates/partials/cards_pages.html`)
  - Individual project page (`templates/page.html`)
- Add per-category styling with a distinct color per category (`Games`, `Learning`, `Management`, `Tools`), defined in a new SCSS part imported by `main.scss`, with light and dark theme variants.
- No frontmatter, content, or config changes.

## Capabilities

### New Capabilities
- `category-badges`: renders the project category as a color-coded badge in project listings and on individual project pages

### Modified Capabilities
<!-- None: the category data field (project-categories) is unchanged; only its display is extended by the new category-badges capability. -->

## Impact

- New partial: `templates/partials/category_badge.html`
- Modified templates: `templates/macros/list_posts.html`, `templates/partials/cards_pages.html`, `templates/page.html`
- New SCSS: `sass/parts/_badges.scss`, imported in `sass/main.scss`
- No changes to `content/projects/**`, `config.toml`, or other assets.
