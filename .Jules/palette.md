## 2026-06-10 - [Accessible Mobile Menu Toggles]

**Learning:** Found a custom mobile menu toggle that was implemented as an interactive div without button semantics or aria-labels. It relied purely on click events.
**Action:** Refactored to use semantic `as="button"`, added dynamic `aria-label` based on toggle state, `aria-expanded`, and visible focus rings for keyboard navigation.
## 2026-07-12 - [Focus Rings on Slides Buttons]

**Learning:** Found custom button components in the onboarding slides (`PrimaryButton`, `SecondaryButton`, and back buttons) that lacked visible focus styles, making keyboard navigation difficult. The main back button was also an icon-only button without an `aria-label`.
**Action:** Added `:focus-visible` styles using `outline` and `outlineOffset` to match the design system, and added an `aria-label` to the icon-only back button.
