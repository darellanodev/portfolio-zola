## Context

- The home page (`templates/main-page.html`) renders featured projects inside `<div class="list featured-list">` with a `section-subtitle` and the `macros_list_posts::list_posts` macro. This produces a 2-column grid of horizontal rows: image on the left (`.left-img-project`, 120px rounded), title, category badge, description and "Read more →" on the right.
- The projects page (`/projects/`, `templates/cards.html`) renders the same projects via `partials/cards_pages.html`, which produces a `.cards` grid of vertical cards: image on top (`.card-image`), centered `.card-title`, category badge, `.card-description`.
- The two formats are inconsistent. The user wants `/projects/` to use the home page's card format (featured-list rows).
- The CSS for `.featured-list` already exists in `sass/parts/_posts_list.scss` and is used by the home page, so no new styles are needed.
- `cards.html` extends `base.html`, so `language_strings` (defined in `templates/base.html`) is available for the `list_posts` macro.
- `content/projects/_index.md` sets `sort_by = "weight"`, `template = "cards.html"`. It must remain unchanged (it selects the cards template).

## Goals / Non-Goals

**Goals:**

- `/projects/` shows all projects (15) using the exact same card format as the home page featured list.
- Reuse the home subtitle "Projects I'm building to learn, improve and enjoy the process".
- Keep pagination behavior (`paginator.pages` vs `section.pages`) working.

**Non-Goals:**

- No CSS changes (existing `.featured-list` styles are reused as-is).
- No content changes (`content/projects/_index.md`, project pages untouched).
- No changes to the home page or other templates.
- Not removing `partials/cards_pages.html` from the repo (unused by projects but harmless; removing would break nothing, but it's out of scope).

## Decisions

- **D1 — Reuse the featured-list block instead of restyling `.cards`.** Mirror `main-page.html`: wrap in `<div class="list featured-list">`, include the `section-subtitle` `<p>`, and call `macros_list_posts::list_posts`. Rationale: guarantees pixel-identical behavior to the home page and requires zero CSS. Alternative considered: adapting `cards_pages.html` styling to look like rows — rejected because it duplicates logic and risks visual drift from the home page.
- **D2 — `max=999999` so no "All projects" link appears.** The `list_posts` macro only renders its "All posts"/"All projects" link when `loop.index == max` and not last; with `max=999999` (the default used in `section.html`) the link never shows. Rationale: `/projects/` already is the full list, so a link to itself is pointless. Alternative: `max=4` + "All projects" link — rejected; that would truncate the list.
- **D3 — Keep the paginator branch.** `cards.html` already resolves `show_pages = paginator.pages | default(section.pages)`. The macro is called with `posts=show_pages`, preserving behavior if pagination is ever configured. The `paginate.html` include stays as-is.
- **D4 — Subtitle is the home's exact string.** Hardcoded in the template, same as `main-page.html`. Rationale: consistent wording across both surfaces; user confirmed "El mismo que la home".

## Risks / Trade-offs

- [Subtitle duplication] → The subtitle string is duplicated between `main-page.html` and `cards.html`. Acceptable; the site hardcodes such strings in templates, and extracting a shared partial is out of scope.
- [Responsive behavior change] → `/projects/` currently shows a vertical-card grid; after the change it collapses to 1 column below 1100px like the home featured list. This is the intended consistent behavior.
- [Image source difference] → `cards_pages.html` used `get_image_metadata`/`get_url` for `local_image`, while `list_posts` uses `post.extra.local_image` directly as `src`. Since the home page already works this way (absolute `base_url` URLs), no action needed.

## Migration Plan

- Single template edit to `templates/cards.html`.
- Rebuild with `./zola.exe build` and visually verify `/projects/` in light and dark mode.
- Rollback: `git checkout -- templates/cards.html`.

## Open Questions

- None.
