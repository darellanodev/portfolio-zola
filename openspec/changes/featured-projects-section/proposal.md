## Why

The home page presents a section titled "Latest projects" as a single-column list, which is understated and wastes horizontal space. The user wants the home project listing to feel more curated and use the available width better.

## What Changes

- Rename the home section title from "Latest projects" to "Featured projects".
- Add a subtitle phrase "Projects I'm building to learn, improve and enjoy the process" directly below the "Featured projects" heading, before the project listing.
- Render the home project listing as a two-column grid of stacked cards (image on top, content below), collapsing back to a single column on narrow screens.
- Add a small subtitle style (`.section-subtitle`) to the SCSS.
- Scope the two-column layout to the home page only; the blog listing and the projects section cards remain unaffected.

## Capabilities

### New Capabilities

- `featured-projects-section`: The home page renders a "Featured projects" section with a subtitle phrase and the project listing laid out as a two-column grid of stacked cards that collapses to one column on narrow screens.

### Modified Capabilities

<!-- None: existing capabilities (project-categories, category-badges) are unchanged; this change only extends the home page presentation. -->

## Impact

- `content/_index.md`: home section title changed to "Featured projects".
- `templates/main-page.html`: subtitle element added between the section heading and the project listing; the list wrapper gets a `featured-list` modifier class.
- `sass/parts/_posts_list.scss`: scoped `.featured-list` two-column grid styles plus a `.section-subtitle` rule.
- No changes to frontmatter data, other templates, config.toml, or content pages.
