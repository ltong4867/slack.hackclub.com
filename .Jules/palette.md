## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2024-08-12 - [Accessible Theme-UI Accordions]

**Learning:** In Next.js with Theme UI, custom accordion components built with `Box` and Framer Motion often lack keyboard navigation (missing `&:focus-visible`), and fail to dynamically link buttons and content via `aria-controls` and `aria-expanded` because these components don't provide them natively.
**Action:** When implementing toggles/accordions, always generate a unique ID (using `useId()` for SSR compatibility), assign it to the content, link it via `aria-controls` on the button, and enforce strict `&:focus-visible` outline styles in the `sx` prop.