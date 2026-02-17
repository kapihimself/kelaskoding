## 2025-05-15 - IDE Performance Optimization
**Learning:** In the 3-pane IDE layout, typing in the Editor causes the parent Workspace component to re-render, which in turn triggers re-renders of MaterialPanel, AITutor, and PreviewPanel. Since MaterialPanel and AITutor don't depend on the current code, they should be memoized. PreviewPanel's responsiveness can be improved by using useDeferredValue to decouple it from the main thread during typing.
**Action:** Apply React.memo to static-ish panels and useDeferredValue for code-dependent previews.
