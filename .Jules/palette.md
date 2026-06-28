## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2026-06-11 - [Accordion Accessibility in Theme UI]
**Learning:** Theme UI primitives (like `<Box as="button">`) used for interactive disclosure widgets do not inherently provide `aria-expanded` attributes or `&:focus-visible` styles, leading to inaccessible accordion components for screen readers and keyboard users.
**Action:** When building interactive toggles or accordions with Theme UI, manually assign `aria-expanded` dynamically based on state, link content with `aria-controls`, and include explicit `&:focus-visible` styles to ensure full keyboard navigation and screen reader support.
