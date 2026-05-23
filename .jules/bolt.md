## 2026-05-19 - Workspace Re-render Optimization
**Learning:** In multi-pane IDE layouts, typing in the editor triggers global state updates in the parent component, causing unnecessary re-renders of static sibling panels like MaterialPanel and AITutor.
**Action:** Use React.memo for static panels and useDeferredValue for code-dependent previews to decouple editor performance from other UI components.
