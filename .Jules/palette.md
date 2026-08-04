## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-08-04 - [Interactive Primitives in Theme UI]

**Learning:** Theme UI interactive primitives (like `<Box as="button">`) require manual implementation of ARIA attributes (`aria-expanded`, `aria-controls`) and explicit `&:focus-visible` styles, as they do not inherit default button behaviors.
**Action:** Manually add React `useId()` for dynamic element linking and define explicit focus ring styles in the `sx` prop when building interactive elements with Theme UI.
