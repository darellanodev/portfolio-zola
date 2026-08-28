## 1. Deploy favicon files

- [x] 1.1 Copy all favicon files from `_tmp-favicon_io/` to `static/` root (favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png, site.webmanifest)

## 2. Update config.toml

- [x] 2.1 Change `favicon` value from `"img/seedling.png"` to `"favicon.ico"`
- [x] 2.2 Add `apple_touch_icon = "apple-touch-icon.png"` under `[extra]`
- [x] 2.3 Add `webmanifest = "site.webmanifest"` under `[extra]`
- [x] 2.4 Remove the `favicon_emoji` line

## 3. Update header template

- [x] 3.1 Add conditional `<link rel="apple-touch-icon">` block in `templates/partials/header.html` (after the existing favicon block, guarded by `config.extra.apple_touch_icon`)
- [x] 3.2 Add conditional `<link rel="manifest">` block in `templates/partials/header.html` (after apple-touch-icon, guarded by `config.extra.webmanifest`)

## 4. Verify

- [x] 4.1 Run `zola build` and confirm no errors
- [x] 4.2 Check generated HTML contains all three `<link>` tags (icon, apple-touch-icon, manifest)
