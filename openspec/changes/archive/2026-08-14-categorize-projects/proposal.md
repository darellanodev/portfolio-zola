## Why

The portfolio lists projects but has no way to group or filter them by type (games, learning resources, management tools, etc.). Adding a `category` field to each project's frontmatter enables displaying the category in project listings (e.g. the home page) and future filtering/grouping, without changing any existing content.

## What Changes

- Add a `category` field inside the `[extra]` block of every project frontmatter in `content/projects/<slug>/index.md`.
- Assign one of four exact values per project, based on what the project actually does: `Games`, `Learning`, `Management`, `Tools`.
- Assignments:
  - `Games`: giftowerdefense, jetpack, breadbaron, croacvim, monkeybananarun, facetoonmaker, cavedrop, memoryfarm, spacelab
  - `Learning`: jsconcepts
  - `Management`: bookmarkbox, dailyboostcalendar, stellartask
  - `Tools`: mediamagnet
- No other frontmatter field, description, title, or content is modified. No templates are changed in this change.

## Capabilities

### New Capabilities
- `project-categories`: Each project page carries a `category` value in its `[extra]` frontmatter, drawn from the allowed set `Games`, `Learning`, `Management`, `Tools`, reflecting what the project does.

### Modified Capabilities
<!-- None: openspec/specs/ contains no existing specs, and no spec-level behavior is changing. -->

## Impact

- Files: the 14 `content/projects/<slug>/index.md` frontmatter blocks (only `[extra]` gains `category`).
- Zola serializes `[extra]` into `page.extra`, so the field will be readable in templates as `page.extra.category` later; the values `Portfolio` and `Webdesign` are deliberately not used for now.
- No changes to config.toml, templates, layouts, assets, or dependencies.
