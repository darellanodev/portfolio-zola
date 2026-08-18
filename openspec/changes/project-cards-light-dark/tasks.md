## 1. CSS Variables

- [x] 1.1 Add `--border: #2c2c33;` to `:root` in `sass/main.scss`

## 2. Card Styling

- [x] 2.1 Add `border: 1px solid var(--border);` to `.featured-list .bloglist-row` in `sass/parts/_posts_list.scss`
- [x] 2.2 Add `border-radius: 8px;` to `.featured-list .bloglist-row`
- [x] 2.3 Change padding from `1rem 0` to `1rem` on `.featured-list .bloglist-row`
- [x] 2.4 Set default background to `rgba(255, 255, 255, 0.55)` on `.featured-list .bloglist-row`
- [x] 2.5 Add dark mode override: `html[data-theme='dark'] .featured-list .bloglist-row { background-color: rgba(0, 0, 0, 0.35); }`

## 3. Verification

- [ ] 3.1 Build Zola site and verify no SCSS compilation errors
- [ ] 3.2 Verify cards show border, rounded corners, and translucent bg in light mode
- [ ] 3.3 Verify cards show border, rounded corners, and translucent bg in dark mode
- [ ] 3.4 Verify content has adequate padding inside card borders
