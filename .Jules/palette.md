## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Theme-UI Primitive Accessibility]

**Learning:** Found an accessibility issue pattern where interactive `theme-ui` primitives (like `<Box as="button">` or `<Text as="button">`) lack native accessibility attributes (`aria-expanded`, `aria-controls`, `aria-busy`) and don't provide a visible focus ring for keyboard users natively.
**Action:** Always manually add explicit `&:focus-visible` styles and relevant `aria-*` attributes when building interactive elements with theme-ui primitives to guarantee keyboard and screen reader accessibility.
