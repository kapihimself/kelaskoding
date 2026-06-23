## 2026-06-14 - Initial Performance Audit
**Learning:** Found that Workspace.tsx state updates on every keystroke, causing all sub-panes (MaterialPanel, AITutor, PreviewPanel) to re-render.
**Action:** Use React.memo and useDeferredValue to isolate editor updates from other UI components.
