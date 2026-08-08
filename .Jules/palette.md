## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Theme-UI and Manual Accessibility Attributes]

**Learning:** When using  primitives like `<Box as="button">`, accessibility attributes like `aria-expanded`, `aria-controls`, and explicit focus visible styles (`&:focus-visible`) are not automatically provided and must be explicitly added to ensure full accessibility.
**Action:** When creating or modifying interactive elements using `theme-ui` primitives, manually verify and add necessary ARIA attributes and focus styles.

## 2026-06-11 - [Theme-UI and Manual Accessibility Attributes]

**Learning:** When using theme-ui primitives like Box as=button, accessibility attributes like aria-expanded, aria-controls, and explicit focus visible styles (&:focus-visible) are not automatically provided and must be explicitly added to ensure full accessibility.
**Action:** When creating or modifying interactive elements using theme-ui primitives, manually verify and add necessary ARIA attributes and focus styles.
