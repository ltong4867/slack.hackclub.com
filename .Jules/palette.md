## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-07-20 - [Theme UI Button Accessibility]
**Learning:** When using Theme UI's `Box` or `Text` components with `as="button"`, native button accessibility features like keyboard focus rings and ARIA states are not automatically provided.
**Action:** Always manually implement explicit `&:focus-visible` outline styles and necessary ARIA attributes (like `aria-expanded`, `aria-controls`, or `aria-busy`) when converting structural components into interactive buttons.
