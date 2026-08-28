## Why

The current site uses a single `seedling.png` as favicon, which lacks modern browser/OS support (iOS home screen icons, Android Chrome icons, PWA manifest). A complete favicon set improves brand presence on mobile devices and ensures proper icon display across all platforms.

## What Changes

- Replace the single `favicon.png` with a full favicon.ico suite (ICO, PNG 16/32, Apple Touch Icon, Android Chrome 192/512)
- Add `site.webmanifest` for PWA/Android icon discovery
- Update `config.toml` to point to the new favicon
- Remove the emoji favicon fallback (`favicon_emoji`)
- Expand `header.html` template to include `apple-touch-icon` and manifest link tags

## Capabilities

### New Capabilities
- `favicon-set`: Complete modern favicon implementation covering ICO, multiple PNG sizes, Apple Touch Icon, Android Chrome icons, and web manifest

### Modified Capabilities
<!-- No existing capabilities have their requirements changed -->

## Impact

- **Templates**: `templates/partials/header.html` — new `<link>` tags for apple-touch-icon and manifest
- **Config**: `config.toml` — updated `favicon` path, removed `favicon_emoji`
- **Static assets**: New files in `static/` root (favicon.ico, PNGs, manifest)
- **Old assets**: `static/img/seedling.png` can be removed (or kept for backward compat)
