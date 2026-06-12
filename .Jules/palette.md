## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Theme UI Primitive Button Accessibility]
**Learning:** Found a recurring pattern across the app where `theme-ui` primitives used as buttons (`<Box as="button">` or `<Text as="button">`) lacked proper `aria-` attributes (like `aria-expanded` for accordions or `aria-label` for icon-only buttons) and visible focus rings (`:focus-visible`). The framework does not provide these natively for its primitives.
**Action:** Added manual `aria-` attributes where necessary and explicit `:focus-visible` styles with outlines and offsets to support keyboard navigation on custom primitive buttons.
