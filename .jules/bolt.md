## 2026-06-14 - IDE Workspace Optimization
**Learning:** In a multi-pane IDE layout, parent state updates (like code changes) trigger expensive re-renders across all panels. `useDeferredValue` alone isn't enough; child components must be wrapped in `React.memo` to skip the "urgent" render pass and only update during the transition pass.
**Action:** Always pair `useDeferredValue` with `React.memo` for heavy consumer components to ensure the UI remains responsive during high-frequency events like typing.
