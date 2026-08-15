## Context

The home page (`content/_index.md`) uses `templates/main-page.html`, which extends the tabi theme section template. It renders a page header with the section title (currently "Latest projects"), then the project listing via the shared `macros_list_posts::list_posts` macro wrapped in a `<div class="list">`. The macro outputs a `.bloglist-container` grid defined in `sass/parts/_posts_list.scss` as `grid-template-columns: 1fr` (single column). The same macro is used by the blog listing via the theme's section.html, so any base change would affect the blog too. Each project row is a flex `.bloglist-row` with a fixed-width `.bloglist-meta` (image) column and a `.bloglist-content` column (title, badge, description).

## Goals / Non-Goals

**Goals:**

- Rename the home section title to "Featured projects".
- Show the subtitle "Projects I'm building to learn, improve and enjoy the process" between the heading and the project listing.
- Lay out the home project listing as two columns of stacked cards (image on top, content below) to use horizontal space better.
- Keep the change isolated to the home page (blog listing and projects section cards unaffected).

**Non-Goals:**

- No changes to project frontmatter, categories, or badges.
- No changes to blog listing or the projects section (`cards.html` / `cards_pages.html`).
- No reordering/filtering of projects.
- No config.toml changes.

## Decisions

### 1. Subtitle placement as a dedicated element in main-page.html

The `_index.md` body paragraph renders inside the home banner partial (`templates/partials/home_banner.html`, `{{ section.content | safe }}`), not in the list area. Therefore the subtitle is added as a static `<p class="section-subtitle">Projects I'm building to learn, improve and enjoy the process</p>` in `templates/main-page.html` between the page_header `<div>` and the `list_posts` macro call.

- Alternative (append to `_index.md` body): rejected — it would render inside the banner, below the avatar, not under the "Featured projects" heading.

### 2. Two-column layout via a home-only modifier class

Add a `featured-list` class to the home list wrapper (`<div class="list featured-list">`) and scope the two-column grid under `.featured-list` in `sass/parts/_posts_list.scss`:

- `.featured-list .bloglist-container { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }`
- `.featured-list .bloglist-row { flex-direction: column; padding: 0; background: none; }` (stacked card)
- `.featured-list .bloglist-meta { width: 100%; }` with `.left-img-project` full-width and rounded corners
- `.featured-list .bloglist-content { width: 100%; }`
- suppress the bottom divider inside cards (`.featured-list .bloglist-row.bottom-divider { border-bottom: none; }`)
- `.featured-list .all-posts { grid-column: 1 / -1; }` so the "All projects" link spans both columns
- `@media (max-width: 1100px)`: back to `grid-template-columns: 1fr`.
- Alternative (change the base `.bloglist-container` to two columns): rejected — it would also restyle the blog listing, which is out of scope.
- Alternative (macro param `columns`): rejected — more invasive, touches all `list_posts` call sites.

### 3. Subtitle styling

New `.section-subtitle` rule in `sass/parts/_posts_list.scss`: `font-size ~1.1rem`, color `var(--meta-color)`, margin below the heading (e.g. `margin: -0.5rem 0 1.5rem`), so it reads as a subtitle for "Featured projects".

## Risks / Trade-offs

- Two-column grid with the shared macro couples home layout to bloglist styles → Mitigation: all rules are scoped under `.featured-list`; base `.bloglist-*` rules untouched.
- Cards in two-column mode could look cramped on mid-size screens → Mitigation: collapse to one column at `max-width: 1100px` (existing breakpoint).
- Subtitle is hardcoded English text in the template → Acceptable: the user provided the exact phrase; matches the site's default English language.

## Migration Plan

Template/SCSS-only change. Rollback = revert the edits to `templates/main-page.html` and `sass/parts/_posts_list.scss` plus the single line in `content/_index.md` (title). No data migration.
