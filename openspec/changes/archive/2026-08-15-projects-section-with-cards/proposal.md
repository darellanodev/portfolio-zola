## Why

The projects page (`/projects/`) renders each project as a vertical card (`.cards` grid via `partials/cards_pages.html`), while the home page shows projects with a horizontal blog-list style card (`.featured-list`): image on the left, title, category badge, description and read-more on the right. The two formats are inconsistent, and the user wants the projects page to use the same card format as the home page.

## What Changes

- Replace the `cards_pages.html` include in `templates/cards.html` with the home page's featured-list block: `<div class="list featured-list">` + `<p class="section-subtitle">` + the `macros_list_posts::list_posts` macro.
- Reuse the home page subtitle "Projects I'm building to learn, contribute to the community and enjoy the process." on the projects page.
- Show all 15 projects in the 2-column grid (no "All projects" link, matching the home layout).
- Keep the existing paginator handling (`paginator.pages` vs `section.pages`) and the `page_header(title=section.title)`.

## Capabilities

### New Capabilities

- `projects-cards-layout`: The projects page renders project entries with the same card layout used on the home page (featured blog-list rows with left image, title, category badge, description, read-more).

### Modified Capabilities

<!-- None -->

## Impact

- `templates/cards.html`: only template change (remove `cards_pages.html` include, add featured-list block).
- `content/projects/_index.md`: unchanged (still `template = "cards.html"`).
- `templates/partials/cards_pages.html`: no longer used by the projects page (can remain for potential future use).
- CSS: none — `.featured-list` styles already exist in `sass/parts/_posts_list.scss`.
- Build: `./zola.exe build` recompiles; `public/` output for `/projects/` changes.
