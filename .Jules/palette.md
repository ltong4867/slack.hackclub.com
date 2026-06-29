## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.

## 2026-06-29 - [WAI-ARIA Accordion Pattern for Custom Expanders]

**Learning:** It's common in this codebase to use custom expandable areas (`Box as="button"`) lacking the proper structural semantic relationship (like `aria-expanded` and `aria-controls`), which impairs screen reader usability.
**Action:** Always implement the WAI-ARIA Accordion pattern by giving the toggle button `aria-expanded` and `aria-controls`, wrapping the panel content with `role="region"`, `id` and `aria-labelledby`, and explicitly implementing `:focus-visible` styles for better keyboard discoverability.
