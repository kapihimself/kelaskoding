
## 2026-06-14 - Workspace Re-render Bottleneck
**Learning:** Every keystroke in the EditorPanel triggers a full re-render of the Workspace IDE, including heavy side-panels like MaterialPanel and AITutor which are static during typing. This leads to 2+ re-renders per character across all panes.
**Action:** Use React.memo for side-panels and useDeferredValue for the PreviewPanel to decouple editor responsiveness from preview updates.
