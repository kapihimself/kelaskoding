## 2026-02-25 - IDE Rendering Optimization
**Learning:** Combining `React.memo` with `useDeferredValue` is highly effective for classroom IDEs. It decouples the editor's responsiveness from the preview's processing, reducing redundant renders of static components (MaterialPanel, AITutor) to zero during typing.
**Action:** Always memoize peripheral panels in IDE layouts and use deferred values for code-dependent previews.
