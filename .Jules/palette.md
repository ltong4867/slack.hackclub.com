## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-05-30 - Theme UI Interactive Primitives Accessibility
**Learning:** This application relies on `theme-ui` primitives (like `<Box as="button">`) which do not automatically include semantic accessibility states or focus rings. Interactive components built this way are inherently inaccessible to keyboard and screen readers by default.
**Action:** When creating or modifying interactive elements using Theme UI primitives, always manually implement necessary ARIA attributes (e.g., `aria-expanded`, `aria-controls`) and explicitly define `&:focus-visible` styles to ensure keyboard accessibility.
