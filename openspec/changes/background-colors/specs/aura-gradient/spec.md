## ADDED Requirements

### Requirement: Aura gradient background in dark mode
The system SHALL display a "Cosmic Jelly" aura gradient background on all pages when dark mode is active. The gradient consists of 3 radial-gradient layers with `mix-blend-mode: screen` over a `#100e0b` dark backdrop.

#### Scenario: Dark mode shows aura gradient
- **WHEN** user views any page with dark mode active (`data-theme="dark"`)
- **THEN** the page displays 3 radial-gradient layers (purple, cyan, pink) with `mix-blend-mode: screen` and blur filters (126px, 144px, 108px respectively)

#### Scenario: Light mode has no aura gradient
- **WHEN** user views any page with light mode active
- **THEN** no aura gradient layers are displayed

### Requirement: Content sits above gradient layers
The system SHALL ensure all page content (nav, articles, footer) renders above the aura gradient layers using z-index layering.

#### Scenario: Content is interactive above layers
- **WHEN** aura gradient is visible (dark mode)
- **THEN** all links, buttons, and interactive elements remain fully clickable and readable

### Requirement: Mobile performance
The system SHALL disable the aura gradient effect on viewports narrower than 768px.

#### Scenario: Mobile shows no gradient
- **WHEN** viewport width is 768px or less
- **THEN** the aura gradient is not rendered (entire `.aura-bg` element hidden)

### Requirement: Dark mode base color
The system SHALL use `#100e0b` as the dark mode `--background-color` value.

#### Scenario: Dark mode background color
- **WHEN** dark mode is active
- **THEN** the html/body background-color is `#100e0b`
