## 2026-05-19 - [Memoization and useDeferredValue in Multi-pane IDE]
**Learning:** In a multi-pane layout where one pane (Editor) updates a shared state frequently, sibling panes (Material, AITutor) that don't depend on the specific state changes re-render unnecessarily. Combining `React.memo` with `useDeferredValue` for the heavy pane (Preview) decoupling ensures smooth typing and eliminates redundant renders.
**Action:** Always memoize static siblings in Workspace-like components and use `useDeferredValue` for high-frequency state that drives expensive side effects like iframe updates.
