## 2025-05-15 - IDE Rendering Optimization
**Learning:** Typing in the Monaco Editor triggers frequent state updates in the parent `Workspace` component. Without memoization, non-code-dependent panels like `MaterialPanel` and `AITutor` re-render on every keystroke, causing unnecessary CPU usage and potential input lag.
**Action:** Use `React.memo` on all IDE sub-components and `useDeferredValue` for the code prop passed to `PreviewPanel`. This ensures that typing remains high-priority and responsive, while the more expensive preview update and irrelevant panel renders are deferred or skipped.
