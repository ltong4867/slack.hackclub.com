## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2024-07-17 - [Accessible Accordion Toggles]
**Learning:** Discovered that the custom `GuideItem` accordion toggles (`<Box as="button">`) in `pages/index.js` lacked `aria-expanded` attributes and `&:focus-visible` styles, making it hard for keyboard and screen reader users to understand their state and navigate them.
**Action:** Added `aria-expanded={isOpen}` and explicit `&:focus-visible` styles (`outline: '2px solid currentColor'`) to ensure keyboard navigability and screen reader accessibility for custom accordion components.
