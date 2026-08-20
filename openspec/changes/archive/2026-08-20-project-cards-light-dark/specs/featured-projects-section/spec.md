# Featured Projects Section

## ADDED Requirements

### Requirement: Featured project cards have visual frame styling

Each featured project card on the home page SHALL have a 1px solid `--border` border, 8px border-radius, and a translucent background that adapts to the active theme (`rgba(255,255,255,0.55)` light, `rgba(0,0,0,0.35)` dark), per the `project-card-styling` capability.

#### Scenario: Cards display with border and rounded corners on home page

- **WHEN** the home page renders featured project cards
- **THEN** each card has a 1px solid `--border` border and 8px border-radius

#### Scenario: Cards display translucent background on home page

- **WHEN** the home page renders featured project cards
- **THEN** each card background is `rgba(255,255,255,0.55)` in light mode or `rgba(0,0,0,0.35)` in dark mode
