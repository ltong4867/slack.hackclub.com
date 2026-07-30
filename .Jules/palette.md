## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-05-24 - Theme UI Interactive Primitives Require Manual Focus & ARIA
**Learning:** When using `theme-ui` interactive primitives like `<Box as="button">`, they do not natively enforce or provide accessibility structures like `aria-expanded`, `aria-controls`, or explicit focus indicators for custom implementations (such as custom accordions). Screen readers and keyboard navigation users rely on these properties.
**Action:** Always manually define ARIA attributes (e.g. `aria-expanded={isOpen}`, `aria-controls={id}`) and explicit `&:focus-visible` styles (e.g., `outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px'`) when building interactive elements using `theme-ui` primitives to ensure proper keyboard navigation and screen reader support.
