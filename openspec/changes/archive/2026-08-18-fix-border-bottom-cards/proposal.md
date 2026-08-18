## Why

The project cards on both the home page and the projects page display incomplete borders: every card except the last one is missing its bottom border. This creates a visual inconsistency that makes the grid look broken. The bug is caused by a `bottom-divider` CSS class (designed for single-column stacked lists) being applied to a 2-column grid layout where each card is an independent cell.

## What Changes

- Remove the `border-bottom: none` rule applied to `.featured-list .bloglist-row.bottom-divider` so that all project cards render a complete border on all four sides.

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

_(none — this is an implementation-level CSS fix; no spec-level requirements change)_

## Impact

- **Files**: `sass/parts/_posts_list.scss` — one rule block removed
- **Visual**: All project cards on the home page and `/projects/` page will display a complete border
- **Risk**: Minimal — the `bottom-divider` class was designed for single-column lists and has no correct use in the 2-column featured-list grid
