## 2026-02-05 - [IDE Responsiveness Optimization]
**Learning:** In a multi-pane IDE where typing updates a common state, useDeferredValue combined with React.memo is critical to keep the editor responsive while allowing heavy panels (like Preview) to update lazily.
**Action:** Always memoize panels that depend on high-frequency state updates and use deferred values for the non-editor panels.
