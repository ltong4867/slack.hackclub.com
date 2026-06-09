## 2026-06-09 - Accessible Mobile Nav Toggle
**Learning:** The mobile menu toggle was styled as a generic `Flex` div rather than a semantic button, preventing keyboard navigation and screen reader use.
**Action:** Always verify `onClick` handlers are attached to semantic `button` or `a` tags, and ensure they have dynamic `aria-label` and `aria-expanded` attributes. Also ensure to clear out temporary workspace script leftovers and verify formatting doesn't leak into unmodified files.
