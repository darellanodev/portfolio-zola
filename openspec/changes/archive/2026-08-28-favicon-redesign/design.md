## Context

The Zola static site currently uses a single `img/seedling.png` as favicon with an emoji SVG fallback. The theme (tabi) supports `config.extra.favicon` for a single PNG and `config.extra.favicon_emoji` for an emoji-based SVG icon. Neither provides proper iOS/Android icon support.

A complete favicon set has been generated and placed in `_tmp-favicon_io/` ready to deploy.

## Goals / Non-Goals

**Goals:**
- Deploy a full favicon suite (ICO, PNG 16/32, Apple Touch Icon, Android Chrome 192/512)
- Add `site.webmanifest` for Android/PWA icon discovery
- Update template to emit proper `<link>` tags for all icon formats
- Update `config.toml` to reference the new primary favicon

**Non-Goals:**
- Redesigning the favicon itself (already designed)
- Adding PWA service worker or installability
- Changing the theme or other template files

## Decisions

**1. File location: `static/` root (not a subdirectory)**

The `site.webmanifest` references `/android-chrome-*.png` (root-relative). Placing files in `static/` root means the manifest works without path edits. Alternative considered: `static/favicon/` — cleaner organization but requires manifest path updates and extra template work for no functional benefit.

**2. Template expansion: Add apple-touch-icon and manifest links to header.html**

The tabi theme's `header.html` only renders a single `<link rel="icon">`. We add conditional blocks for:
- `<link rel="apple-touch-icon">` — needed for iOS home screen
- `<link rel="manifest">` — needed for Android/PWA icon discovery

These are guarded by `config.extra` checks so they're opt-in and don't break if files are missing.

**3. Remove `favicon_emoji` config**

The emoji fallback is redundant once the real favicon is in place. Keeping both would cause two competing icon declarations.

## Risks / Trade-offs

- **[Old favicon lingers]** → `static/img/seedling.png` remains unless manually deleted. Low risk; unused files don't affect the site.
- **[Manifest paths hardcoded]** → The manifest uses root-relative paths (`/android-chrome-*.png`). If the site is ever served from a subdirectory, paths would need updating. Mitigated by Zola's `get_url` handling in templates, but the manifest itself is a static JSON file.
