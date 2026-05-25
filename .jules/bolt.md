## 2026-05-19 - [Workspace Re-render Isolation]
**Learning:** In multi-pane IDE layouts where a shared parent state (like `code`) is updated frequently (every keystroke), sibling components that don't depend on that state (like MaterialPanel or AITutor) will redundantly re-render, causing typing lag.
**Action:** Use `React.memo` to isolate static panels and `useDeferredValue` for heavy consumer panels (like PreviewPanel) to keep the main thread responsive for the editor.
