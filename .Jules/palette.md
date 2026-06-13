## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-13 - [Theme-UI custom buttons missing accessibility]

**Learning:** Discovered a pattern where custom `<Box as="button">` elements created with `theme-ui` often lack native accessibility affordances, specifically explicit `&:focus-visible` styles and necessary `aria-*` attributes (like `aria-expanded`, `aria-label`, or `aria-busy`).
**Action:** Manually added explicit `&:focus-visible` definitions (e.g. `outline: 2px solid currentColor`) and context-appropriate `aria-*` properties across multiple `theme-ui` interactive components (like accordion toggles and icon-only navigation buttons).
