## ADDED Requirements

### Requirement: Favicon files deployed to static root
The system SHALL serve the following favicon files from the `static/` directory root:
- `favicon.ico` (multi-resolution ICO)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

#### Scenario: Favicon files accessible via browser
- **WHEN** a user requests any of the above files by their root-relative path
- **THEN** the server returns the corresponding file with the correct MIME type

### Requirement: Browser favicon link tag
The system SHALL emit a `<link rel="icon" type="image/png">` tag pointing to the primary favicon (`.ico` or `.png`) when `config.extra.favicon` is set.

#### Scenario: Favicon config set
- **WHEN** `config.extra.favicon` is set in `config.toml`
- **THEN** the HTML `<head>` contains `<link rel="icon" type="image/png" href="<resolved-url>">`

#### Scenario: Favicon config not set
- **WHEN** `config.extra.favicon` is not set
- **THEN** no favicon `<link>` tag is emitted

### Requirement: Apple Touch Icon link tag
The system SHALL emit a `<link rel="apple-touch-icon">` tag when `config.extra.apple_touch_icon` is set.

#### Scenario: Apple touch icon config set
- **WHEN** `config.extra.apple_touch_icon` is set in `config.toml`
- **THEN** the HTML `<head>` contains `<link rel="apple-touch-icon" href="<resolved-url>">`

#### Scenario: Apple touch icon config not set
- **WHEN** `config.extra.apple_touch_icon` is not set
- **THEN** no apple-touch-icon `<link>` tag is emitted

### Requirement: Web manifest link tag
The system SHALL emit a `<link rel="manifest">` tag when `config.extra.webmanifest` is set.

#### Scenario: Webmanifest config set
- **WHEN** `config.extra.webmanifest` is set in `config.toml`
- **THEN** the HTML `<head>` contains `<link rel="manifest" href="<resolved-url>">`

#### Scenario: Webmanifest config not set
- **WHEN** `config.extra.webmanifest` is not set
- **THEN** no manifest `<link>` tag is emitted

### Requirement: Emoji favicon removed
The system SHALL NOT emit an emoji-based favicon SVG when `config.extra.favicon_emoji` is removed from `config.toml`.

#### Scenario: Favicon emoji config removed
- **WHEN** `config.extra.favicon_emoji` is not present in `config.toml`
- **THEN** no emoji-based favicon `<link>` tag is emitted
