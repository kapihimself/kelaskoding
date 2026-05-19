## 2026-05-19 - Workspace Rendering Optimization
**Learning:** In multi-pane IDE layouts, sibling components (MaterialPanel, AITutor) often re-render unnecessarily when the editor state changes, even if they don't depend on that specific state. Using `React.memo` effectively isolates these components. Furthermore, `useDeferredValue` is essential for heavy preview panels to ensure the editor remains responsive during fast typing.
**Action:** Always wrap static or semi-static side panels in `React.memo` when they are siblings to a high-frequency state producer like a code editor.
