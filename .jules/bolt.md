## 2026-06-27 - Optimizing IDE Workspace Responsiveness
**Learning:** In a multi-pane IDE layout where one pane (Editor) updates a shared state on every keystroke, all other panes (Material, AI Tutor, Preview) re-render by default. This causes significant overhead (e.g., 22 unnecessary re-renders for a short 11-character string).
**Action:** Use `React.memo` to isolate components that don't depend on the frequent state updates, and `useDeferredValue` to prioritize the editor's immediate responsiveness over heavy preview updates.
