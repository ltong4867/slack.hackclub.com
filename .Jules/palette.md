## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-07-19 - [Theme UI Primitives Keyboard Accessibility]
**Learning:** In this Next.js app, using `theme-ui` components as interactive elements (e.g., `<Box as="button">`) lacks default browser focus rings and requires manual implementation of focus styles (`&:focus-visible`) and ARIA attributes (like `aria-expanded`, `aria-controls`). This pattern is common and easily missed, leading to inaccessible custom controls.
**Action:** Always verify keyboard accessibility and manually inject `&:focus-visible` styles and semantic ARIA states when building or reviewing custom interactive elements using `theme-ui` primitives.
