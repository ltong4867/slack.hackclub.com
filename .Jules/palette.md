## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-09 - Accessible Mobile Nav Toggle
**Learning:** The mobile menu toggle was styled as a generic `Flex` div rather than a semantic button, preventing keyboard navigation and screen reader use.
**Action:** Always verify `onClick` handlers are attached to semantic `button` or `a` tags, and ensure they have dynamic `aria-label` and `aria-expanded` attributes. Also ensure to clear out temporary workspace script leftovers and verify formatting doesn't leak into unmodified files.
