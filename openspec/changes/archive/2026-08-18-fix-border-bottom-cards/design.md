## Context

The project cards on the home page and `/projects/` page use a 2-column grid layout (`.featured-list`). Each card is wrapped in a `<section class="bloglist-row bottom-divider">` element. The `bottom-divider` class applies `border-bottom: none` in CSS, which was designed for single-column stacked lists to avoid double-thick borders between rows. In a 2-column grid, each card is an independent cell — there are no adjacent borders to deduplicate, so removing the bottom border makes every card except the last look incomplete.

## Goals / Non-Goals

**Goals:**
- All project cards display a complete border on all four sides
- Visual consistency between the home page and `/projects/` page

**Non-Goals:**
- Changing the grid layout or card structure
- Modifying the `bottom-divider` behavior for other contexts (blog listing)

## Decisions

**Remove `border-bottom: none` from `.featured-list .bloglist-row.bottom-divider`**

This is a single-rule CSS change. The `bottom-divider` class was designed for single-column stacked lists where adjacent cards share borders. In the 2-column featured-list grid, each card is an independent cell with its own border — there is no double-border issue to solve. The `border-bottom: none` rule simply breaks the visual completeness of every non-last card.

Alternative considered: Override `border-bottom` back to `1px solid var(--border)` instead of removing the block. Both achieve the same result; removing the block is cleaner.

## Risks / Trade-offs

- **Low risk**: The `bottom-divider` class is also used in the blog listing context (`_posts_list.scss` line ~130). That rule is scoped to `.bloglist-container .bloglist-row.bottom-divider` (without `.featured-list` prefix), so it remains unaffected by this change.
- **No breaking changes**: This is purely visual; no templates or data models change.
