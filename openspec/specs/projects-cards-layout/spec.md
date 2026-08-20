# Projects Cards Layout

## Purpose

Ensure the projects page (`/projects/`) reuses the home page's featured-list card format while preserving its existing header and pagination behavior.

## Requirements

### Requirement: Projects page uses the home featured-list card format

The projects page (`/projects/`) SHALL render each project using the same featured-list card format as the home page: a 2-column grid of horizontal rows with the project image on the left and the title, category badge, description and read-more link on the right.

#### Scenario: Projects page shows featured-list rows

- **WHEN** a user visits `/projects/`
- **THEN** projects are rendered as `.featured-list` blog-list rows (left image, title, category badge, description, read-more) instead of vertical `.cards` cards

#### Scenario: All projects are shown

- **WHEN** a user visits `/projects/`
- **THEN** every project in the `projects` section is displayed in the grid and no "All projects" link is shown

### Requirement: Projects page reuses the home subtitle

The projects page SHALL display the subtitle "A mix of games, tools and experiments I've built" above the project list, identical to the home page.

#### Scenario: Subtitle is displayed

- **WHEN** a user visits `/projects/`
- **THEN** the section subtitle "A mix of games, tools and experiments I've built" is shown above the project grid

### Requirement: Projects page keeps existing header and pagination behavior

The projects page SHALL keep its page header (title "Projects") and SHALL keep the existing paginator branch that resolves `paginator.pages` when pagination is active and `section.pages` otherwise.

#### Scenario: Header is preserved

- **WHEN** a user visits `/projects/`
- **THEN** the "Projects" page header is shown at the top of the page

#### Scenario: Pagination is preserved

- **WHEN** pagination is configured for the projects section
- **THEN** the projects page lists `paginator.pages` and includes the paginator partial

### Requirement: Projects page cards have visual frame styling

Each project card on the `/projects/` page SHALL have a 1px solid `--border` border, 8px border-radius, and a translucent background that adapts to the active theme, per the `project-card-styling` capability.

#### Scenario: Projects page cards display with border and rounded corners

- **WHEN** a user visits `/projects/`
- **THEN** each project card has a 1px solid `--border` border and 8px border-radius

#### Scenario: Projects page cards display translucent background

- **WHEN** a user visits `/projects/`
- **THEN** each card background is `rgba(255,255,255,0.55)` in light mode or `rgba(0,0,0,0.35)` in dark mode
