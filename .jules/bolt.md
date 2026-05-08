## 2025-05-14 - Optimized IDE Workspace Rendering

**Learning:** Typing in the Monaco Editor updates the global `code` state in the `Workspace` component, which by default triggers a full re-render of all sibling panels (`MaterialPanel`, `AITutor`, `PreviewPanel`). These panels often contain static content or expensive elements like `iframes` that don't need to refresh on every keystroke.

**Action:**
1. Use `React.memo` to wrap static panels that only depend on initial props or less frequent state changes (e.g., `MaterialPanel`, `AITutor`).
2. Use `useDeferredValue` for state passed to expensive components like `PreviewPanel` to ensure UI responsiveness (the editor) is prioritized over non-critical visual feedback (the live preview).
