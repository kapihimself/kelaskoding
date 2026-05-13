## 2026-05-13 - [Component Memoization & Deferred State]
**Learning:** In a multi-pane IDE layout where a shared parent state (like code) is updated frequently via one pane (Editor), sibling panes (Material, AITutor) that don't depend on that state will re-render unnecessarily unless memoized. Furthermore, using useDeferredValue for the "preview" pane keeps the editor interaction smooth.
**Action:** Always wrap non-interactive/static sibling panels in React.memo and use deferred values for expensive side-effects like live previews in Workspace-style components.
