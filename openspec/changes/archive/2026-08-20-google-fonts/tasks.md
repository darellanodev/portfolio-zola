## 1. CSP Configuration

- [x] 1.1 Update `config.toml` CSP `font-src` directive to add `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- [x] 1.2 Update `config.toml` CSP `style-src` directive to add `https://fonts.googleapis.com`

## 2. Font Loading in HTML

- [x] 2.1 Add `<link rel="preconnect" href="https://fonts.googleapis.com">` to `templates/partials/header.html`
- [x] 2.2 Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to `templates/partials/header.html`
- [x] 2.3 Add `<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">` to `templates/partials/header.html`

## 3. SCSS Typography Updates

- [x] 3.1 Add `--heading-font: 'Fredoka', sans-serif` to `:root` in `sass/main.scss`
- [x] 3.2 Update `--sans-serif-font` to `'Inter', sans-serif` if not already set
- [x] 3.3 Update heading styles (h1–h5) in `sass/main.scss` to use `var(--heading-font)` and appropriate weights (500, 600, or 700)

## 4. Verification

- [x] 4.1 Run Zola build to verify no errors
- [x] 4.2 Verify Google Fonts load correctly in browser (no CSP violations in console)
- [x] 4.3 Verify fallback fonts work by blocking fonts.googleapis.com in dev tools
