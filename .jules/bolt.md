## 2026-06-14 - Workspace Optimization
**Learning:** In the Workspace IDE, state updates on every keystroke were triggering full re-renders of heavy side panels (MaterialPanel, AITutor) and the PreviewPanel. This creates a noticeable lag in the editor responsiveness.
**Action:** Applied `React.memo` to all major children of `Workspace` and used `useDeferredValue` for the code prop passed to `PreviewPanel`. This decouples the "urgent" task of updating the Monaco editor from the "low-priority" task of updating the preview and keeps side panels static.
