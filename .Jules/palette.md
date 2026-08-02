## 2024-05-24 - Interactive Slide Accessibility
**Learning:** `theme-ui` icon buttons lack intrinsic accessible names and their CSS transitions completely bypass React-level prefers-reduced-motion hooks unless explicitly guarded by `@media (prefers-reduced-motion: reduce)`.
**Action:** When implementing custom interactive sliders or modals with `theme-ui`, enforce `aria-label` on all icon-only controls and embed native CSS reduced-motion media queries directly within the `sx` props for continuous animations, even if framer-motion is used elsewhere.
