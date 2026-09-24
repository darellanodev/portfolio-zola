## ADDED Requirements

### Requirement: Projects section on home page

The home page SHALL present its project listing as a "Projects" section that includes a subtitle phrase and lays the projects out as a two-column grid of stacked cards on wide viewports.

#### Scenario: Section title

- **WHEN** the home page renders the Projects section heading
- **THEN** the heading reads "Projects"

#### Scenario: Subtitle phrase

- **WHEN** the home page renders the Projects section
- **THEN** the phrase "Projects I'm building to learn, contribute to the community and enjoy the process." is displayed between the section heading and the project listing

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
