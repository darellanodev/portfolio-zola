## 1. Title rename

- [x] 1.1 Change `title = "Latest projects"` to `title = "Featured projects"` in `content/_index.md`

## 2. Subtitle phrase

- [x] 2.1 Add `<p class="section-subtitle">A mix of games, tools and experiments I've built</p>` in `templates/main-page.html` between the page_header `<div>` and the `list_posts` macro call

## 3. Two-column home listing

- [x] 3.1 Add `featured-list` modifier class to the home list wrapper (`<div class="list featured-list">`) in `templates/main-page.html`
- [x] 3.2 Add `.section-subtitle` style rule in `sass/parts/_posts_list.scss` (font-size ~1.1rem, `var(--meta-color)`, margin below heading)
- [x] 3.3 Add `.featured-list` scoped rules in `sass/parts/_posts_list.scss`: two-column grid (`.featured-list .bloglist-container { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }`), stacked card rows (`.bloglist-row { flex-direction: column; padding: 0; background: none; }`), full-width meta + rounded `.left-img-project`, full-width content, no bottom divider inside cards
- [x] 3.4 Ensure `.featured-list .all-posts` spans both columns (`grid-column: 1 / -1`) and add `@media (max-width: 1100px)` fallback back to `grid-template-columns: 1fr`

## 4. Verification

- [x] 4.1 Confirm blog listing (theme section.html) and projects section cards (`cards.html`/`cards_pages.html`) are unchanged and still single-column / card grid
- [x] 4.2 Confirm only `content/_index.md`, `templates/main-page.html`, and `sass/parts/_posts_list.scss` were modified (no other content, config, or template files)
