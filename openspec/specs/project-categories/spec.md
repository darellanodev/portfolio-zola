# Project Categories

## Purpose

Ensure every project in `content/projects/` carries a single `category` value in its `[extra]` frontmatter block so the site can group and display projects by what they actually do.

## Requirements

### Requirement: Project carries a category value

Every project page in `content/projects/` MUST define a `category` field inside its `[extra]` frontmatter block. The value MUST be exactly one of: `Games`, `Learning`, `Management`, `Tools`. The category MUST reflect what the project actually does. No other frontmatter field, description, title, or content SHALL be modified.

#### Scenario: Project in the Games group

- **WHEN** a project belongs to the Games group (giftowerdefense, jetpack, breadbaron, croacvim, monkeybananarun, facetoonmaker, cavedrop, memoryfarm, spacelab)
- **THEN** its `[extra]` block contains `category = "Games"`

#### Scenario: Project in the Learning group

- **WHEN** the project is jsconcepts
- **THEN** its `[extra]` block contains `category = "Learning"`

#### Scenario: Project in the Management group

- **WHEN** a project belongs to the Management group (bookmarkbox, dailyboostcalendar, stellartask)
- **THEN** its `[extra]` block contains `category = "Management"`

#### Scenario: Project in the Tools group

- **WHEN** the project is mediamagnet
- **THEN** its `[extra]` block contains `category = "Tools"`

#### Scenario: Frontmatter is otherwise unchanged

- **WHEN** inspecting any categorized project page
- **THEN** the `title`, `description`, `weight`, and other `[extra]` fields (e.g. `local_image`) are unchanged from their previous values

#### Scenario: Category is exposed to templates

- **WHEN** Zola renders a project page
- **THEN** the value is accessible to templates as `page.extra.category`
