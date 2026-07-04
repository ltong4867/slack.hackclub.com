## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Accessible Accordion Toggles]

**Learning:** Discovered accordion toggles built with `theme-ui` primitives (`<Box as="button">`) that lacked `aria-expanded`, `aria-controls`, and explicit `&:focus-visible` styles. Interactive elements mimicking buttons must manually declare these properties for screen readers and keyboard navigation.
**Action:** Added `aria-expanded`, `aria-controls` linked to a generated content ID, and explicit `&:focus-visible` outline styles to ensure proper keyboard accessibility and screen reader support.
