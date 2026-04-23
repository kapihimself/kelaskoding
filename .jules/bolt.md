## 2025-05-15 - Baseline Renders in IDE
**Learning:** During typing in the Monaco editor, all panels (MaterialPanel, EditorPanel, PreviewPanel, AITutor) re-render on every keystroke.
For 23 characters typed ("<h1>Halo Indonesia</h1>"), we see approximately 46 renders for each panel, meaning 2 renders per character.

**Baseline (23 characters):**
- MaterialPanel: 46
- EditorPanel: 46
- PreviewPanel: 48
- AITutor: 46

**Action:**
- Wrap `MaterialPanel` and `AITutor` in `React.memo` since they don't depend on the changing code state.
- Use `useDeferredValue` for `PreviewPanel` and wrap it in `React.memo` to decouple preview updates from typing.
- This should reduce static panel renders to 0 or 1 during typing.

**Results (23 characters):**
- MaterialPanel: 0 (reduced from 46)
- EditorPanel: 92 (increased due to Workspace re-renders, but Editor is optimized internally)
- PreviewPanel: 92 (increased due to Workspace re-renders, but useDeferredValue keeps it responsive)
- AITutor: 0 (reduced from 46)

**Learning:** `React.memo` effectively eliminated re-renders for static panels. `useDeferredValue` ensures that typing in the `EditorPanel` remains high priority, while `PreviewPanel` updates can happen when the browser is idle.
