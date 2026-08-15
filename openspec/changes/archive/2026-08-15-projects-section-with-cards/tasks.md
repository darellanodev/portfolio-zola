## 1. Template Implementation

- [x] 1.1 Replace `{%- include "partials/cards_pages.html" -%}` in `templates/cards.html` with the featured-list block: `<div class="list featured-list">` + `<p class="section-subtitle">Projects I'm building to learn, improve and enjoy the process</p>` + `macros_list_posts::list_posts(posts=show_pages, max=999999, language_strings=language_strings)`
- [x] 1.2 Keep `page_header(title=section.title)` and the paginator branch (`show_pages = paginator.pages` vs `section.pages`); close the `</div>` correctly

## 2. Verification

- [x] 2.1 Rebuild the site (`./zola.exe build --base-url http://localhost:8123`) and serve `public/` locally
- [x] 2.2 Verify `/projects/` shows all projects as `.featured-list` rows (left image, title, category badge, description, read-more) in a 2-column grid, with the home subtitle above, in light mode
- [x] 2.3 Verify `/projects/` looks the same in dark mode (same card format, only theme colors change)
- [x] 2.4 Rebuild for production (`./zola.exe build` with the production base_url) so `public/` reflects the change
