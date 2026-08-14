## Context

All 14 projects in `content/projects/<slug>/index.md` now carry a `category` value (`Games`, `Learning`, `Management`, `Tools`) inside their `[extra]` frontmatter block (capability `project-categories`, synced to `openspec/specs/project-categories/spec.md`). The value is available to templates as `page.extra.category`.

Projects currently render in three places, none of which show the category:
1. Home page — latest projects rendered by the shared macro `macros_list_posts::list_posts` in `templates/macros/list_posts.html` (this macro also renders blog posts, which have no category).
2. Projects section — card grid via `templates/partials/cards_pages.html` (included by `templates/cards.html`).
3. Individual project page — `templates/page.html`, which renders an `<ul class="meta">` for metadata.

Styling uses SCSS compiled at build time (`compile_sass = true`); `sass/main.scss` `@use`s 24 part files alphabetically. Light/dark theming is handled through CSS variables defined in `main.scss` (`:root` and `[data-theme='dark']`).

## Goals / Non-Goals

**Goals:**
- Show a visually distinct badge for each category wherever a project appears (home, projects section, individual project page).
- Give each of the four categories a different color, with light and dark theme variants.
- Keep the change isolated to templates and SCSS.

**Non-Goals:**
- No filtering, sorting, or grouping by category.
- No changes to frontmatter, `config.toml`, or project content.
- No new dependencies or build tooling.

## Decisions

### 1. One reusable partial for the badge markup
Create `templates/partials/category_badge.html`:

```html
{% if page.extra.category %}
<span class="category-badge category-{{ page.extra.category | lower }}">{{ page.extra.category }}</span>
{% endif %}
```

- **Why:** avoids duplicating markup (and the guard) across the three render sites.
- **Alternative considered:** inline markup in each template — rejected (triple duplication, easy to forget the guard).

The guard is essential: `list_posts.html` also renders blog posts whose `[extra]` has no `category`, so the badge must not appear there. The class is derived by lowercasing the category (`Games` → `category-games`) so CSS keys stay predictable.

### 2. Insert the badge at three concrete points
- `templates/macros/list_posts.html`: inside `.bloglist-content`, immediately after the `<h2 class="bloglist-title">` block (badge shows under the post title on home).
- `templates/partials/cards_pages.html`: inside `.card-info`, after the `<h2 class="card-title">` block (badge shows under the title on each card).
- `templates/page.html`: as the first `<li>` inside the existing `<ul class="meta">` on individual project pages.

**Why these spots:** all are title-adjacent, visually consistent, and in the existing flow (no layout restructuring needed).

### 3. New SCSS part `sass/parts/_badges.scss`
Base pill style: `border-radius: 999px`, small padding, `font-size: .75rem`, explicit text color (so the badge text is not affected by the card link color). Per-category colors via dedicated classes using CSS variables so light/dark variants differ:

| Category class | Light text/bg | Dark text/bg |
|---|---|---|
| `.category-games` | #7c3aed | #a78bfa |
| `.category-learning` | #2563eb | #60a5fa |
| `.category-management` | #d97706 | #fbbf24 |
| `.category-tools` | #059669 | #34d399 |

Background is a translucent tint of the same hue; text stays opaque. Imported in `sass/main.scss` with `@use 'parts/_badges.scss';` inserted between `_archive` and `_cards` to keep alphabetical order.

- **Why CSS variables + SCSS part:** matches the existing theming architecture (`--primary-color` etc.) and the alphabetical `@use` convention.
- **Alternative considered:** a static stylesheet listed in `config.toml` `stylesheets` — rejected (bypasses the SCSS pipeline and CSS variable system).

## Risks / Trade-offs

- [Category value not among the four known values] → The badge still renders (class `category-<value>`); unknown categories get the base pill style. The spec constrains values, so this is unlikely.
- [Badge appearing on blog posts in home list] → Mitigated by the `{% if page.extra.category %}` guard in the shared partial.
- [Contrast issues in light/dark themes] → Text color is explicit and chosen for contrast on each background; can be tuned per theme if needed.
- [Lowercased class collision] → Category values are single English words; no collision risk today.

## Migration Plan

Templates and SCSS only; no data migration, no build steps beyond the normal Zola `compile_sass`. Rollback is a revert of the four template/SCSS edits — frontmatter and content are untouched.
