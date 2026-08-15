## ADDED Requirements

### Requirement: Light mode uses dark gradient colors

In light mode (`:root`, default), the `.gradient-color` class SHALL render text with a darker gradient in the same hue family as the original pastel colors: green `#3f7a35`, blue `#2e6e9e`, pink `#a04a6e`.

#### Scenario: Light mode default rendering
- **WHEN** a page is rendered without `data-theme="dark"` on the `<html>` element
- **THEN** `.gradient-color` text displays the gradient `linear-gradient(90deg, #3f7a35 0%, #2e6e9e 50%, #a04a6e 100%)`

#### Scenario: Hue family preserved
- **WHEN** comparing light-mode gradient colors to the dark-mode pastel colors
- **THEN** each color keeps the same hue family (green, blue, pink) while being noticeably darker for contrast on the light background

### Requirement: Dark mode keeps pastel gradient colors

When `data-theme="dark"` is set on the `<html>` element, the `.gradient-color` class SHALL keep the current pastel gradient colors unchanged: green `#7eb871`, blue `#91cfff`, pink `#ffaacc`.

#### Scenario: Dark mode rendering
- **WHEN** the `<html>` element has `data-theme="dark"` set
- **THEN** `.gradient-color` text displays the gradient `linear-gradient(90deg, #7eb871 0%, #91cfff 50%, #ffaacc 100%)`

### Requirement: No text-stroke on gradient text

The `.gradient-color` class SHALL NOT apply any text-stroke (`-webkit-text-stroke`). The existing `-webkit-text-stroke: 1px black;` declaration SHALL be removed so the gradient renders cleanly without a black outline.

#### Scenario: No stroke applied
- **WHEN** `.gradient-color` text is rendered in any theme
- **THEN** the element has no `-webkit-text-stroke` value applied

### Requirement: Gradient renders on all existing usages

The `.gradient-color` styling SHALL continue to apply to all existing usages: home banner header (`templates/partials/home_banner.html`), section headers (`templates/macros/page_header.html`), and article titles (`templates/page.html`).

#### Scenario: Home banner header renders gradient
- **WHEN** the home page is displayed in light mode
- **THEN** the banner header text uses the dark gradient colors

#### Scenario: Section headers render gradient
- **WHEN** any section page is displayed in dark mode
- **THEN** the section header text uses the pastel gradient colors

#### Scenario: Article titles render gradient
- **WHEN** an article page is displayed in light mode
- **THEN** the article title text uses the dark gradient colors
