## Why

The portfolio site currently uses Inter as its sole sans-serif font for both body text and headings. To improve visual hierarchy and give the site a more distinctive, professional identity, the user wants to load Google Fonts externally: **Fredoka** (weights 500, 600, 700) for headings and **Inter** (weights 400, 600) for body text. This only changes typography — no color or size modifications.

## What Changes

- Add Google Fonts `<link>` tags to load Fredoka and Inter from `fonts.googleapis.com` with preconnect hints to `fonts.gstatic.com`
- Update SCSS `:root` CSS variables (`--sans-serif-font`, heading font references) to use the new fonts with fallbacks
- Update `h1`–`h5` font-weight values to match available Fredoka weights (500, 600, 700)
- Update CSP `font-src` directive in `config.toml` to allow `fonts.googleapis.com` and `fonts.gstatic.com`
- Existing self-hosted Inter font remains as fallback; no font files are removed

## Capabilities

### New Capabilities
- `google-fonts-loading`: Loading external Google Fonts via `<link>` tags with preconnect, fallback fonts, and CSP compatibility

### Modified Capabilities

## Impact

- `templates/partials/header.html` — add `<link>` tags for Google Fonts and preconnect hints
- `sass/main.scss` — update `:root` CSS custom properties for font-family variables
- `config.toml` — update CSP `font-src` to allow Google Fonts domains
- `sass/parts/_misc.scss` — verify heading font-weight values align with Fredoka weights
- No API or dependency changes; purely visual/template-level impact
