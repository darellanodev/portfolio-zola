# Projects Cards Layout

## ADDED Requirements

### Requirement: Projects page cards have visual frame styling

Each project card on the `/projects/` page SHALL have a 1px solid `--border` border, 8px border-radius, and a translucent background that adapts to the active theme, per the `project-card-styling` capability.

#### Scenario: Projects page cards display with border and rounded corners

- **WHEN** a user visits `/projects/`
- **THEN** each project card has a 1px solid `--border` border and 8px border-radius

#### Scenario: Projects page cards display translucent background

- **WHEN** a user visits `/projects/`
- **THEN** each card background is `rgba(255,255,255,0.55)` in light mode or `rgba(0,0,0,0.35)` in dark mode
