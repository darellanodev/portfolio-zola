## 1. Update gradient styles in _misc.scss

- [x] 1.1 Remove the `-webkit-text-stroke: 1px black;` line from `.gradient-color` in `sass/parts/_misc.scss`
- [x] 1.2 Replace the light-mode gradient colors in `.gradient-color` with the darker variants (`#3f7a35`, `#2e6e9e`, `#a04a6e`)
- [x] 1.3 Add a `[data-theme='dark'] .gradient-color` rule after `.gradient-color` that re-declares the pastel gradient (`#7eb871`, `#91cfff`, `#ffaacc`) and keeps the clip/text-fill styling

## 2. Verification

- [x] 2.1 Rebuild the site with Zola and confirm the Sass compiles without errors
- [x] 2.2 Visually verify light mode renders dark gradient text with no black stroke on the home banner, section headers, and article titles
- [x] 2.3 Visually verify dark mode keeps the pastel gradient colors on the same three usages
