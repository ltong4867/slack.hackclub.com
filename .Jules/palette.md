## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2025-02-12 - Missing ARIA attributes and focus states on Theme UI primitives
**Learning:** When building interactive elements using `theme-ui` primitives (e.g., `<Box as="button">`), accessibility attributes (like `aria-expanded`, `aria-controls`) and explicit `&:focus-visible` styles are not provided natively and are often missed by developers.
**Action:** Always manually implement necessary ARIA attributes and `&:focus-visible` styles on interactive `theme-ui` primitives, and use React's `useId()` hook to generate element IDs for ARIA bindings to prevent SSR/hydration mismatches in Next.js.
