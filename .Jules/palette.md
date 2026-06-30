## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2026-06-30 - [Theme UI Custom Button Accessibility]
**Learning:** When using `theme-ui` primitives with `as="button"`, ARIA attributes (like `aria-expanded`, `aria-controls`, `aria-busy`) and `:focus-visible` styles are not natively provided and must be explicitly implemented to ensure basic screen reader and keyboard accessibility.
**Action:** Always add necessary ARIA attributes and explicit `&:focus-visible` outline styles when overriding `theme-ui` primitives as interactive elements.
