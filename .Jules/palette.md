## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2024-08-03 - [Accessible Theme UI Accordions]
**Learning:** `theme-ui` primitives (like `<Box>`) when used as interactive elements (e.g. `as="button"`) do not natively provide necessary accessibility attributes like `aria-expanded` and explicit focus rings (`&:focus-visible`). Framer motion components also need proper a11y wrapping.
**Action:** When building custom disclosure widgets or accordions using Theme UI, always generate unique IDs with `useId()` for `aria-controls`, bind `aria-expanded` to the state, and implement custom `&:focus-visible` styling to ensure screen reader and keyboard accessibility.
