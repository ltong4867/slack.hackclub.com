## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-07-10 - [Theme UI Button Primitives Accessibility Constraints]
**Learning:** In this project, `theme-ui` primitives rendered as interactive elements (e.g., `<Box as="button">`) are commonly used for components like accordion toggles, but they inherently lack required disclosure states (`aria-expanded`) and explicit keyboard focus indicators (`&:focus-visible`).
**Action:** Always manually implement explicit `aria-expanded` (or relevant ARIA state) and `&:focus-visible` styles on custom interactive `theme-ui` components to ensure parity with native accessible elements.
