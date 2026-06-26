## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-26 - [Theme UI Custom Buttons Accessibility]

**Learning:** Custom interactive elements built with Theme UI primitives (e.g. `<Box as="button">`) lack native keyboard focus indicators and essential screen reader labels. Without explicit `aria-label` and `:focus-visible` styles, they are inaccessible to keyboard and screen reader users.
**Action:** When using `as="button"` in Theme UI, explicitly configure an `aria-label` (especially for icon-only buttons) and provide visible `:focus-visible` styles using the `sx` prop.
