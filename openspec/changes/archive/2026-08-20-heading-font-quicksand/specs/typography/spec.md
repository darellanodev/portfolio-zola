## ADDED Requirements

### Requirement: Heading font is Quicksand
The site SHALL use Quicksand as the heading font family, loaded from Google Fonts, with weights 500, 600, and 700.

#### Scenario: Heading font CSS variable
- **WHEN** the CSS `:root` is evaluated
- **THEN** `--heading-font` SHALL resolve to `'Quicksand', sans-serif`

#### Scenario: Google Fonts link loads Quicksand
- **WHEN** the page `<head>` is rendered
- **THEN** a `<link>` tag SHALL load `https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700`

#### Scenario: Heading elements use Quicksand
- **WHEN** h1 through h5 elements are rendered
- **THEN** their `font-family` SHALL be `var(--heading-font)` with the appropriate weight (h1/h2: 700, h3/h4: 600, h5: 500)

### Requirement: Typography documented in DESIGN.md
The DESIGN.md file SHALL include a Typography section documenting Quicksand for headings and Inter for body text, with their respective weights.

#### Scenario: DESIGN.md contains typography section
- **WHEN** DESIGN.md is read
- **THEN** it SHALL contain a Typography section listing Quicksand (headings, 500/600/700) and Inter (body, 400/600)
