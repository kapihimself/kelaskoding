## 2026-05-13 - [Workspace Rendering Optimization]
**Learning:** High-frequency events like typing in an IDE component cause every sibling component to re-render if they share a common parent state.
**Action:** Use `React.memo` for static sibling components (MaterialPanel, AITutor) and `useDeferredValue` for expensive preview updates to keep the editor responsive.
