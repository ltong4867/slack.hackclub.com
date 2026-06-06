## 2024-05-15 - Accessible Navigation Toggle Container
**Learning:** Found that custom navigation toggles built with Flex/Divs in Theme UI/Emotion need explicit `as="button"`, `type="button"`, explicit CSS resets for background/border, ARIA labels that dynamically reflect the toggled state, and a `&:focus-visible` outline.
**Action:** Always check custom stylized clickable containers for proper accessible button semantics and focus ring.
