## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-05-15 - Improve theme-ui Accordion Accessibility
**Learning:** Found that `theme-ui` interactive primitives (like `<Box as="button">`) lack native accessibility features for complex components like accordions. They require manual implementation of ARIA attributes (like `aria-expanded`, `aria-controls`, `aria-hidden` for decorative icons) and explicit `&:focus-visible` styles to ensure proper screen reader and keyboard navigation support.
**Action:** Always manually add required ARIA attributes and focus styles when building or modifying interactive UI components using `theme-ui` base primitives.
