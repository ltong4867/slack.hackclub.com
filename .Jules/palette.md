## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-05-18 - Missing Focus States & ARIA Attributes on Theme-UI Accordions
**Learning:** When using `theme-ui` primitives (`<Box as="button">`) to build interactive components like accordion toggles (`GuideItem`), native accessibility attributes (like `aria-expanded` and `aria-controls`) and focus states (`&:focus-visible`) must be manually added. The framework doesn't provide these implicitly. Also, decorative elements like a +/- toggle icon require `aria-hidden="true"` so they aren't redundantly parsed by screen readers.
**Action:** When building or enhancing interactive elements with `theme-ui`, deliberately verify keyboard navigation (`&:focus-visible` styles) and the presence of ARIA semantics appropriate to the interaction pattern (e.g., disclosure/accordion).
