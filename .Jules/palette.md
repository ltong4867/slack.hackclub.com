## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Accessible Accordion Toggles]
**Learning:** Found that custom accordion toggles (GuideItem) were implemented as interactive `<Box as="button">` elements without ARIA attributes or explicit focus styles, making it hard for screen readers to understand the state and keyboard users to see focus.
**Action:** Refactored to add `aria-expanded`, a dynamically generated `id` and `aria-controls` for screen reader clarity, along with visible `&:focus-visible` outline styles for keyboard navigation.
