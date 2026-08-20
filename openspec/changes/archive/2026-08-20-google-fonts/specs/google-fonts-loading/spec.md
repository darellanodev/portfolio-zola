## ADDED Requirements

### Requirement: Google Fonts loaded via link tags
The system SHALL load Fredoka (weights 500, 600, 700) and Inter (weights 400, 600) from Google Fonts via `<link>` tags in the HTML `<head>`.

#### Scenario: Font CSS is loaded
- **WHEN** a page is rendered
- **THEN** the `<head>` contains a `<link>` tag loading `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;600&display=swap`

### Requirement: Preconnect hints for Google Fonts
The system SHALL include `<link rel="preconnect">` hints for both `fonts.googleapis.com` and `fonts.gstatic.com` to reduce font loading latency.

#### Scenario: Preconnect tags present
- **WHEN** a page is rendered
- **THEN** the `<head>` contains `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

### Requirement: Fallback fonts specified
The system SHALL specify fallback font stacks for both Fredoka and Inter so that text remains readable if Google Fonts fails to load.

#### Scenario: CSS font-family fallbacks
- **WHEN** Google Fonts CSS is applied
- **THEN** Fredoka uses a fallback stack ending in `sans-serif` and Inter uses a fallback stack ending in `sans-serif`

### Requirement: Heading font-weight values match available weights
The system SHALL use only font weights 500, 600, or 700 for headings h1–h5, matching Fredoka's available weights.

#### Scenario: Heading weights are valid Fredoka weights
- **WHEN** headings are styled
- **THEN** h1–h5 each use a font-weight of exactly 500, 600, or 700

### Requirement: CSP allows Google Fonts domains
The system SHALL allow `fonts.googleapis.com` and `fonts.gstatic.com` in the CSP `font-src` and `style-src` directives.

#### Scenario: CSP permits font loading
- **WHEN** the CSP header is evaluated
- **THEN** `font-src` includes `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- **AND** `style-src` includes `https://fonts.googleapis.com`

### Requirement: Typography-only changes
The system SHALL NOT modify any font sizes, colors, spacing, or layout — only font-family and font-weight assignments.

#### Scenario: No visual side effects beyond fonts
- **WHEN** the changes are applied
- **THEN** all font sizes, colors, line-heights, margins, and layout properties remain unchanged from their pre-change values
