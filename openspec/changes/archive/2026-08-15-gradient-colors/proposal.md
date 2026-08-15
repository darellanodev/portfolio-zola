## Why

The site's `.gradient-color` text uses light pastel gradient colors that are barely legible on the light background. In light mode the text needs darker gradient colors for contrast, while dark mode should keep the current pastel gradient. The black text-stroke currently added for readability also distorts the gradient and should be removed.

## What Changes

- Remove the `-webkit-text-stroke: 1px black;` declaration from `.gradient-color`.
- Change the light-mode gradient colors to a darker variant of the same hue family: green `#3f7a35`, blue `#2e6e9e`, pink `#a04a6e`.
- Add a `[data-theme='dark'] .gradient-color` override that keeps the current pastel gradient colors (`#7eb871`, `#91cfff`, `#ffaacc`) in dark mode.

## Capabilities

### New Capabilities
- `gradient-color-styling`: Themed gradient text styling for the `.gradient-color` class — light mode uses dark gradient colors, dark mode uses pastel gradient colors, and no text-stroke is applied.

### Modified Capabilities
<!-- No existing specs are affected; this is a new visual-styling capability. -->

## Impact

- `sass/parts/_misc.scss` — only file modified. `.gradient-color` rule updated and `[data-theme='dark'] .gradient-color` override added.
- Rendering of all existing `.gradient-color` usages: home banner header (`templates/partials/home_banner.html`), section headers (`templates/macros/page_header.html`), and article titles (`templates/page.html`).
- No changes to templates, config, JS, or dependencies. Colors are hardcoded in the stylesheet, so behavior is independent of the tabi theme skins (which only override `--primary-color`).
