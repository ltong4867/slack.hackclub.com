## 2026-06-08 - [Added ARIA Labels to Icon-Only Buttons]

**Learning:** Icon-only interactive elements in components (like mobile menu toggle and slide back button) were missing proper semantic HTML tags (like `<button>`) and `aria-label` attributes, affecting screen reader accessibility.
**Action:** Use `as="button"` and add appropriate `aria-label` attributes for all interactive, icon-based elements, and reset default button styles to match the existing UI.
