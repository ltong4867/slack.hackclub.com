## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics, aria-labels, or proper controls linking. It relied purely on click events. Assistive tech needs explicit relationships.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, explicit CSS resets, visible focus rings for keyboard navigation, and `aria-controls` to link the toggle with the navigation menu.
