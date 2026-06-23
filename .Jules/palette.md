## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2024-03-24 - Theme UI Button Accessibility
**Learning:** Theme UI's `<Box as="button">` primitive removes native button styling but does NOT automatically provide necessary ARIA states (like `aria-expanded` for accordions) or explicit focus rings (`&:focus-visible`), potentially causing keyboard users to lose track of focus and screen reader users to miss component state context.
**Action:** Always manually implement explicit `&:focus-visible` styles with sufficient contrast and appropriate ARIA attributes (`aria-expanded`, `aria-controls`) when repurposing generic Theme UI primitives into interactive disclosure widgets.
