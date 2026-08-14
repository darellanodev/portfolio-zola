## 1. Shared badge partial

- [x] 1.1 Create `templates/partials/category_badge.html` that renders the category as a pill: `{% if page.extra.category %}<span class="category-badge category-{{ page.extra.category | lower }}">{{ page.extra.category }}</span>{% endif %}`

## 2. Home page listing

- [x] 2.1 Include the badge partial in `templates/macros/list_posts.html` inside `.bloglist-content`, right after the `<h2 class="bloglist-title">` block, so it appears on the home project listing (and stays hidden for blog posts without a category)

## 3. Projects section cards

- [x] 3.1 Include the badge partial in `templates/partials/cards_pages.html` inside `.card-info`, right after the `<h2 class="card-title">` block

## 4. Individual project page

- [x] 4.1 Include the badge partial in `templates/page.html` as the first `<li>` inside the existing `<ul class="meta">`

## 5. Badge styles

- [x] 5.1 Create `sass/parts/_badges.scss` with the base pill style (border-radius 999px, padding, font-size .75rem, explicit text color)
- [x] 5.2 Add per-category color classes using CSS variables for light and dark themes: `.category-games` (#7c3aed light / #a78bfa dark), `.category-learning` (#2563eb / #60a5fa), `.category-management` (#d97706 / #fbbf24), `.category-tools` (#059669 / #34d399), each with a translucent tint background and opaque text
- [x] 5.3 Import the new file in `sass/main.scss` with `@use 'parts/_badges.scss';` inserted between `_archive` and `_cards` to keep alphabetical order

## 6. Verification

- [x] 6.1 Confirm no project frontmatter, content, or `config.toml` files were modified (only the 4 templates and 2 SCSS files)
- [x] 6.2 Confirm the badge is rendered in all three surfaces (home, projects cards, individual project) and absent for blog posts
