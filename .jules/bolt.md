## 2025-05-14 - [Workspace Re-render Optimization]
**Learning:** In a multi-pane IDE layout, updating the editor state triggers re-renders across all panels (Material, AI Tutor, Preview) by default. Wrapping these in `React.memo` is highly effective because their props (lesson data) are often stable during typing.
**Action:** Always memoize static side panels and use `useDeferredValue` combined with `memo` for preview panels to ensure peak editor responsiveness.
