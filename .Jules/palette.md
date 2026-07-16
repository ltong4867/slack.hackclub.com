## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-05-18 - Theme UI Interactive Primitives Accessibility
**Learning:** When using Theme UI primitives for interactive elements (e.g., `Box as="button"`), accessibility attributes like `aria-expanded`, `aria-controls`, and visible focus styles (`&:focus-visible`) are not automatically provided. This can lead to screen readers not conveying the component's state and keyboard users being unable to determine focus.
**Action:** Always manually implement explicit ARIA attributes and focus styles when building custom interactive components (like accordions or tabs) using framework primitives.
