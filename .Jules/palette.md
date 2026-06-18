## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-18 - [Missing Focus States in Theme UI Buttons]
**Learning:** Discovered that Theme UI's `<Box as="button">` pattern natively misses explicit focus states and `aria-label` attributes on icon-only buttons, requiring manual accessibility implementation across the app.
**Action:** Added `:focus-visible` styles (with `outline` and `outlineOffset`) to interactive slide components and provided an `aria-label` to the icon-only back button.
