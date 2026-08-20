# Project Card Styling

## Purpose

Define the visual frame styling (border, border-radius, translucent background) for featured project cards, adapting to light and dark themes.

## Requirements

### Requirement: Project cards have a subtle border

Each `.featured-list .bloglist-row` SHALL have a `1px solid` border using the `--border` CSS variable (`#2c2c33`).

#### Scenario: Border is visible in light mode

- **WHEN** the site is in light mode
- **THEN** each featured project card shows a 1px solid border in color `#2c2c33`

#### Scenario: Border is visible in dark mode

- **WHEN** the site is in dark mode
- **THEN** each featured project card shows a 1px solid border in color `#2c2c33`

### Requirement: Project cards have rounded corners

Each `.featured-list .bloglist-row` SHALL have `border-radius: 8px`.

#### Scenario: Rounded corners applied

- **WHEN** a featured project card renders
- **THEN** the card has 8px rounded corners matching the "Latest videos" card style

### Requirement: Project cards have translucent backgrounds per theme

Each `.featured-list .bloglist-row` SHALL have a translucent background that adapts to the active theme: `rgba(0,0,0,0.35)` in dark mode, `rgba(255,255,255,0.55)` in light mode.

#### Scenario: Dark mode translucent background

- **WHEN** the site is in dark mode (`data-theme="dark"` on `<html>`)
- **THEN** each featured project card has background `rgba(0,0,0,0.35)`

#### Scenario: Light mode translucent background

- **WHEN** the site is in light mode (default, no `data-theme="dark"`)
- **THEN** each featured project card has background `rgba(255,255,255,0.55)`

### Requirement: Project cards have internal padding

Each `.featured-list .bloglist-row` SHALL have `padding: 1rem` so that content does not touch the card border.

#### Scenario: Content has breathing room

- **WHEN** a featured project card renders
- **THEN** the card content (icon, title, badge, description) has at least 1rem of space from all card edges
