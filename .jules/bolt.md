## 2025-05-22 - IDE Rendering Optimization
**Learning:** In a 3-pane IDE layout where one pane (Editor) frequently updates state (code), static panes like MaterialPanel and AITutor re-render unnecessarily on every keystroke if not memoized. Furthermore, heavy panes like PreviewPanel can cause typing lag if they synchronously process every state change.
**Action:** Use `React.memo` on non-editor panels and `useDeferredValue` for the code prop in the PreviewPanel to ensure the main UI thread remains responsive for the user's typing.
