## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-11 - [Theme UI Box button semantics and states]
**Learning:** Found that using Theme UI's `Box as="button"` requires manual `aria-label` definitions for icon-only components, and lacks native browser-like focus indicators which breaks keyboard navigation accessibility.
**Action:** Always verify icon-only interactive elements have semantic meaning (e.g. `aria-label`) and explicitly add `&:focus-visible` styles with a solid outline to Theme UI primitive buttons to guarantee standard keyboard accessibility.
