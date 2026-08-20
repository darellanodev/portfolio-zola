# Featured Projects Section

## Purpose

Ensure the home page presents its project listing as a "Featured projects" section with a subtitle phrase and a responsive two-column grid of stacked cards, without affecting the blog listing layout.

## Requirements

### Requirement: Featured projects section on home page

The home page SHALL present its project listing as a "Featured projects" section that includes a subtitle phrase and lays the projects out as a two-column grid of stacked cards on wide viewports.

#### Scenario: Section title

- **WHEN** the home page renders the featured projects section heading
- **THEN** the heading reads "Featured projects"

#### Scenario: Subtitle phrase

- **WHEN** the home page renders the featured projects section
- **THEN** the phrase "Projects I'm building to learn, improve and enjoy the process" is displayed between the section heading and the project listing

#### Scenario: Two-column listing on wide viewport

- **WHEN** the viewport is wider than 1100px
- **THEN** the home project listing is arranged in two columns of stacked cards, each showing the project image on top and its title, category badge and description below

#### Scenario: Single-column listing on narrow viewport

- **WHEN** the viewport width is 1100px or less
- **THEN** the home project listing collapses to a single column

#### Scenario: Blog listing unaffected

- **WHEN** the blog listing renders
- **THEN** it keeps its existing single-column layout unchanged

#### Scenario: Projects section uses the shared featured-list format

- **WHEN** the projects section (`/projects/`) renders
- **THEN** it uses the same featured-list card format as the home page, per the `projects-cards-layout` capability

### Requirement: Featured project cards have visual frame styling

Each featured project card on the home page SHALL have a 1px solid `--border` border, 8px border-radius, and a translucent background that adapts to the active theme (`rgba(255,255,255,0.55)` light, `rgba(0,0,0,0.35)` dark), per the `project-card-styling` capability.

#### Scenario: Cards display with border and rounded corners on home page

- **WHEN** the home page renders featured project cards
- **THEN** each card has a 1px solid `--border` border and 8px border-radius

#### Scenario: Cards display translucent background on home page

- **WHEN** the home page renders featured project cards
- **THEN** each card background is `rgba(255,255,255,0.55)` in light mode or `rgba(0,0,0,0.35)` in dark mode
