## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Theme-UI Component Accessibility]
**Learning:** Interactive components built with `theme-ui` primitives (like `<Box as="button">`) lack native accessibility features such as ARIA roles, states (`aria-expanded`, `aria-busy`), dynamic ID relationships (`aria-controls`), and clear keyboard focus indicators (`&:focus-visible`).
**Action:** When building interactive elements using `theme-ui`, explicitly bind semantic ARIA attributes and generate dynamic IDs (using `useId()`) to associate related components, while always including a distinct `&:focus-visible` outline in the `sx` prop for keyboard users.
