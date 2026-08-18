## Context

The site uses a layered CSS gradient background system (`_aura.scss`) with two themes:
- **Light mode ("Cotton Candy")**: mesh category, `#faf8f2` backdrop, `normal`/`multiply` blend modes
- **Dark mode ("Cosmic Dust")**: nebula category, `#100e0b` backdrop, `screen` blend modes

Design specs were originally stored in two temporary text files (`tmp-prompt.txt`, `tmp-prompt-light-mode.txt`). These need to be consolidated into a permanent `DESIGN.md` and the temp files deleted.

The actual implementation in `_aura.scss` diverges from the original specs in several ways that are improvements (see Decisions).

## Goals / Non-Goals

**Goals:**
- Consolidate gradient theme specs into a single permanent `DESIGN.md` at project root
- Capture architectural rules that must be followed when modifying the gradient system
- Document the deviations from original specs and why they exist
- Delete the temporary files

**Non-Goals:**
- Changing any CSS or SCSS
- Adding new gradient themes
- Modifying the HTML template

## Decisions

### 1. DESIGN.md goes at project root

**Choice:** `DESIGN.md` at project root, not inside `openspec/specs/` or `sass/`

**Why:** This is a design reference document, not a code spec or implementation detail. Project root is where you look for "how this site works" context.

### 2. Capture deviations from original specs

The implementation improved on the specs in several ways:

| Aspect | Original Spec | Implemented | Why |
|---|---|---|---|
| Container positioning | `position: relative` + `min-height: 100vh` | `position: fixed` + `inset: 0` | Fixed is better for a persistent full-viewport background that stays while scrolling |
| Mobile behavior | Layers always visible | `display: none` on `≤768px` | Saves GPU resources on mobile where the effect is less noticeable |
| Base color source | Set directly on `<body>` | Via `--background-color` CSS variable in `:root` | Centralizes theme colors; body uses the variable, keeping single source of truth |
| `aria-hidden` | On each individual layer | Only on the `.aura-bg` container | Cleaner HTML; container-level hidden is sufficient since layers are decorative |

DESIGN.md should document the **implemented** state, not the original specs.

### 3. No new capabilities or specs needed

This is purely a documentation/file organization change. No behavioral changes, no new requirements.

## Risks / Trade-offs

- **Low risk**: Only file creation/deletion, no code changes
- **Temp files deletion**: Ensure DESIGN.md captures everything from both files before deleting. Both files have been read and their content fully understood.
