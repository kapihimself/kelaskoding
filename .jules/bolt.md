## 2025-05-23 - IDE Deferred Render Profile
**Learning:** Using `useDeferredValue` for the code state in the Workspace causes the parent component and the direct consumer (PreviewPanel) to render twice during typing sessions (representing both high-priority UI updates and background deferred updates), but it ensures the editor remains responsive by decoupling it from the heavier preview logic.
**Action:** Always combine `useDeferredValue` with `React.memo` on sibling components (MaterialPanel, AITutor) to ensure they stay at 0 renders during typing sessions, even when the parent re-renders.
