## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-07-07 - Interactive Theme UI Elements Require Manual Focus Styling
**Learning:** In this application's design system, interactive components built using Theme UI primitives (like `<Box as="button">`) lack native browser accessibility properties. They do not automatically receive `:focus-visible` styling nor semantic ARIA attributes.
**Action:** When building custom interactive elements, always manually implement a clear `:focus-visible` indicator (e.g., `outline: '2px solid'`) and ensure necessary ARIA roles and states (e.g., `aria-expanded`, `aria-controls`) are explicitly defined.
