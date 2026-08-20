## Context

The Zola portfolio site currently self-hosts three fonts via `@font-face` in `sass/main.scss`: Inter (sans-serif), Source Serif (serif), and Cascadia Code (monospace). CSS variables `--sans-serif-font`, `--serif-font`, and `--code-font` in `:root` control font assignment. All headings (h1–h5) use `font-weight: 550`.

The site uses the `tabi` Zola theme with project-level overrides. The `<head>` is in `templates/partials/header.html`. A CSP directive in `config.toml` restricts `font-src` to `'self' data:` only.

**Goal**: Load Fredoka (500, 600, 700) for headings and Inter (400, 600) for body text from Google Fonts via `<link>` tags. Typography only — no color or size changes.

## Goals / Non-Goals

**Goals:**
- Load Google Fonts externally with proper `<link>` tags and preconnect hints
- Use Fredoka for headings, Inter for body text
- Maintain fallback fonts for offline/graceful degradation
- Keep CSP secure while allowing Google Fonts domains
- Zero visual changes beyond font-family and font-weight adjustments

**Non-Goals:**
- Changing font sizes, colors, spacing, or layout
- Removing self-hosted Inter font (keep as fallback)
- Switching to a self-hosted approach for Fredoka
- Modifying the custom subset font system

## Decisions

### 1. External `<link>` loading (not self-hosted)
**Decision**: Load fonts from `fonts.googleapis.com` via `<link>` tags in `header.html`.
**Rationale**: Simpler setup, automatic serving of optimal woff2 subsets by Google's CDN, no need to download and host font files. The user explicitly requested Google Fonts.
**Alternatives considered**: Self-hosting Fredoka (rejected — adds maintenance burden, user wants Google Fonts).

### 2. Font loading order
**Decision**: Place Google Fonts `<link>` tags after the preconnect hints but before `custom_subset.css` and `main.css` in `header.html`.
**Rationale**: Preconnect early to warm connections; font CSS loads before site CSS so custom properties reference available font families.

### 3. CSS variable updates
**Decision**: Update `--sans-serif-font` to include Fredoka as the first family and Inter as fallback for headings. Keep separate variable or use a single variable with both families.
**Rationale**: Since headings and body use different fonts, `--sans-serif-font` should reference Fredoka (for headings, the default sans context) with Inter fallback. Body text in `article` already uses `--serif-font` via the article block, but body paragraphs should use Inter. A new `--heading-font` variable may be cleaner.
**Revised approach**: Add `--heading-font: 'Fredoka', sans-serif` for headings. Keep `--sans-serif-font: 'Inter', sans-serif` for body text. Update heading styles to use `--heading-font`.

### 4. CSP update
**Decision**: Add `fonts.googleapis.com` and `fonts.gstatic.com` to `font-src` and `style-src` directives in `config.toml`.
**Rationale**: Google Fonts CSS is served from `fonts.googleapis.com`, font files from `fonts.gstatic.com`. Both domains must be allowed.

### 5. Font-weight alignment
**Decision**: Update h1–h5 to use weights 500, 600, or 700 (Fredoka's available weights) instead of current 550.
**Rationale**: 550 is not a standard Fredoka weight. Map to nearest available weight per heading level.

## Risks / Trade-offs

- **External dependency** → If Google Fonts CDN is unavailable, fallback fonts activate. Self-hosted Inter remains as fallback.
- **Privacy** → Google Fonts loading reveals user IP to Google. Acceptable trade-off per user request.
- **Performance** → Extra DNS lookup + connection to Google. Mitigated by preconnect hints.
- **CSP changes** → Expanding font-src reduces CSP strictness. Only adds trusted Google domains.
