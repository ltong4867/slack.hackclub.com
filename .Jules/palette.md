## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-17 - [Accordion Accessibility Enhancement]

**Learning:** Discovered that custom accordion implementations using Theme UI's `<Box as="button">` lack necessary ARIA attributes (`aria-expanded`, `aria-controls`) and focus visibility out-of-the-box.
**Action:** Refactored the `GuideItem` component in `pages/index.js` to dynamically generate and link IDs via `aria-controls`, supply `aria-expanded` state, and apply explicit `&:focus-visible` outline styles for improved screen reader and keyboard accessibility.
