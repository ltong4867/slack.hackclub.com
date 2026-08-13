## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-08-13 - [Theme UI Box Accordion Accessibility]
**Learning:** Found custom accordion components built with Theme UI's `<Box as="button">` lacking screen reader and keyboard accessibility semantics. `Theme UI` does not automatically provide outline styles for interactive primitives, nor does it generate IDs for ARIA associations.
**Action:** Always manually supply `aria-expanded`, generate unique IDs with `useId()` for `aria-controls`, and explicitly add `&:focus-visible` styles with a high-contrast outline when turning `Box` into interactive elements.
