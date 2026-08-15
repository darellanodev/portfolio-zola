## Context

The `.gradient-color` class is defined only in `sass/parts/_misc.scss:283-292` (a project override, not part of the upstream tabi theme). It uses the `background-clip: text` technique with `color: transparent` and `-webkit-text-fill-color: transparent` to render gradient-filled text. A black text-stroke (`-webkit-text-stroke: 1px black`) was previously used to help pastel colors stand out on light backgrounds.

The site supports light/dark theming via a `data-theme="dark"` attribute on `<html>`, toggled by `static/js/themeSwitcher.js`. All colors are defined in `sass/main.scss` under `:root` (light) and `[data-theme='dark']` (dark). The tabi theme skins (`sass/skins/*.scss`) only override `--primary-color` and do not affect this gradient.

The `.gradient-color` class is used in three templates: home banner header, section page headers, and article titles.

## Goals / Non-Goals

**Goals:**
- Remove the black text-stroke from `.gradient-color`.
- Make `.gradient-color` legible in light mode by using darker colors of the same hue family.
- Keep the current pastel gradient colors in dark mode.
- Keep the change self-contained to the stylesheet — no template, config, JS, or markup changes.

**Non-Goals:**
- Refactoring the theming system (e.g., migrating gradient colors to CSS custom properties in `main.scss`).
- Introducing new CSS variables or new Sass variables.
- Changing any other styles, skins, or the tabi theme itself.

## Decisions

### D1: Hardcode the themed colors in `_misc.scss` instead of CSS variables
The light-mode darker colors are placed directly in the base `.gradient-color` rule, and a `[data-theme='dark'] .gradient-color` override re-declares the pastel colors. No new CSS custom properties are introduced.

Rationale: keeps the change to a single self-contained file (`sass/parts/_misc.scss`), matching how the class is already written. The colors are only used in this one class, so variable indirection adds no benefit.

Alternative considered: defining `--gradient-*` variables in `main.scss` under `:root` and `[data-theme='dark']`. Rejected because it spreads the change across two files and the values are not reused anywhere else.

### D2: Full rule override for dark mode rather than color-only overrides
The dark override re-declares the gradient via `background-image` (a longhand that does not reset `background-clip`), and the base gradient styling remains on the base rule. The `-webkit-text-stroke` is removed from the base rule and not re-added in the dark override.

Rationale: a single `background-image` re-declaration is the minimal, unambiguous way to swap colors per theme; removing the stroke once from the base rule applies to both themes. Note: using the `background` shorthand here would reset `background-clip` back to `border-box`, painting a gradient rectangle over the element instead of clipping the gradient to the text — this bug was caught during verification and fixed by switching to the `background-image` longhand.

### D3: Light-mode colors chosen as ~2 shades darker in the same hue family
`#3f7a35` (green), `#2e6e9e` (blue), `#a04a6e` (pink) replace `#7eb871`, `#91cfff`, `#ffaacc`. These stay in the same hue family while providing contrast on the light background.

Rationale: preserves brand color identity between themes while fixing light-mode legibility. Alternatives considered: even darker variants (e.g., `#2f5f27`, `#1f4a6e`, `#7c3553`) were judged too aggressive; lighter variants (`#4c8f3f`, `#3a7fb5`, `#b35580`) would not fix the contrast problem.

## Risks / Trade-offs

- Dark-mode override depends on the `data-theme="dark"` selector convention used across the site. If the site ever changes how dark mode is selected, this rule must be updated too. → Mitigation: the selector matches the existing convention in `main.scss`; no change expected.
- Removing the text-stroke may slightly reduce the perceived boldness/outline of gradient text on some backgrounds. → Mitigation: the darker light-mode colors compensate for contrast; this matches the user's explicit request.
- Exact rendered colors depend on the user's display/browser. → Mitigation: colors are standard hex values; no color management involved.
