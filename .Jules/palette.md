## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Focus States on theme-ui Primitives]

**Learning:** Found that using `<Box as="button">` or `<Text as="button">` in Theme UI strips native button semantics like focus rings by default. Several interactive components were missing explicit `:focus-visible` styles and ARIA attributes (like `aria-expanded` and `aria-controls` for accordions, or `aria-busy` for loading states).
**Action:** Added explicit `:focus-visible` styles, dynamic `aria-expanded`/`aria-controls` to the GuideItem accordion, and `aria-busy` to the geolocation loading button.
