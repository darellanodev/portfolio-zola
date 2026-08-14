## ADDED Requirements

### Requirement: Category badge is rendered for projects

The site SHALL render a visual badge showing the category of a project whenever a project page is displayed. The badge MUST show the project's category value from `page.extra.category` and MUST be styled with a distinct color per category. The badge MUST NOT appear on pages that have no category.

#### Scenario: Badge on home page project listing

- **WHEN** a project with a `category` is listed on the home page
- **THEN** a badge showing that category is rendered next to the project entry

#### Scenario: Badge on projects section cards

- **WHEN** a project with a `category` is displayed as a card in the projects section
- **THEN** a badge showing that category is rendered on the card

#### Scenario: Badge on individual project page

- **WHEN** an individual project page with a `category` is displayed
- **THEN** a badge showing that category is rendered in the page metadata

#### Scenario: Distinct color per category

- **WHEN** two badges with different categories are rendered
- **THEN** they use different colors

#### Scenario: No badge without category

- **WHEN** a page (such as a blog post) has no `category` in its `[extra]` block
- **THEN** no badge is rendered for that page
