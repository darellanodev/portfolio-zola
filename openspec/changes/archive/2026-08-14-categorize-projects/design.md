## Context

The site is a Zola static portfolio (tabi theme) with 14 project pages under `content/projects/<slug>/index.md`. Every project frontmatter follows the same TOML structure: `title`, `description`, `weight`, then an `[extra]` block with `local_image`. Zola only exposes custom frontmatter data to templates via `[extra]` (`page.extra.*`); top-level unknown keys are silently ignored. The goal is to record a category per project so future listings (e.g. the home page) can show it.

## Goals / Non-Goals

**Goals:**
- Every one of the 14 projects has exactly one `category` value in its `[extra]` frontmatter, drawn from `Games`, `Learning`, `Management`, `Tools`.
- No other frontmatter field, description, title, or content is modified.
- The category reflects what the project actually does, per the agreed mapping.

**Non-Goals:**
- Not rendering the category in any template yet (no template changes in this change).
- Not creating a Zola taxonomy for categories.
- Not using the `Portfolio` or `Webdesign` values for now.

## Decisions

- **Store `category` inside the existing `[extra]` block** (as `category = "Games"`), not as a top-level key.
  - Rationale: Zola ignores unknown top-level frontmatter keys but serializes everything under `[extra]` into `page.extra`. This guarantees the field is available to templates later via `page.extra.category` and satisfies "add only the category field".
  - Alternative considered: top-level `category = "..."` — rejected because Zola would silently drop it.
- **Use a fixed string value (single quoted)**, matching the existing style of string values in the frontmatter.
- **No taxonomy/terms change**: `config.toml` only defines a `tags` taxonomy; categories are purely data for now.

## Risks / Trade-offs

- **Value typos or wrong assignments** → The mapping is enforced by the tasks (one task lists the exact `slug = value` pairs); verified by re-reading each file after edit.
- **Silent drop if placed at top level** → Mitigated by placing the field inside `[extra]` and verifying each file contains `[extra]` + `category = "<value>"`.
- **Future rendering relies on `page.extra.category`** → This is by design; the value is the single source of truth for the eventual home-page display.
