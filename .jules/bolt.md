## 2026-06-27 - [React IDE Optimization]
**Learning:** In a multi-pane IDE where one pane (Editor) updates a shared state, other panes (Material, AI Tutor) that don't depend on that specific state should be memoized. Using `useDeferredValue` for the Preview pane successfully decouples urgent typing from heavy iframe updates.
**Action:** Always check for shared state bottlenecks in layout components and apply memoization/deferred values to keep the UI responsive during frequent updates like typing.
