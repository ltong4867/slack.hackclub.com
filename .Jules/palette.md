## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2026-07-03 - Theme UI Interactive Primitives Need Manual A11y Attributes
**Learning:** When using `theme-ui` primitives as interactive elements (e.g. `<Box as="button">`), accessibility features like `aria-expanded`, `aria-controls`, and especially `:focus-visible` states are entirely absent by default, even if the element functionally acts as a button or disclosure widget. Relying on default browser focus outlines often looks poor, leading developers to sometimes add `outline: none` without providing a fallback.
**Action:** When building interactive disclosure widgets (like accordions) in this app with Theme UI, explicitly generate unique IDs using React's `useId()`, manually attach `aria-expanded`/`aria-controls` bindings, and explicitly define `:focus-visible` styling in the `sx` prop (e.g., using `boxShadow`) to ensure robust keyboard navigation support without sacrificing visual fidelity.
