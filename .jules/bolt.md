## 2026-06-27 - Workspace Performance Optimization

**Learning:** Typing in the Monaco editor within the `Workspace` component triggered full re-renders of the entire 3-pane layout on every keystroke. This happened because the `code` state lived in the `Workspace` parent, and components like `MaterialPanel` and `AITutor` were not memoized, despite their props remaining stable during typing.

**Action:** Applied `React.memo` to `MaterialPanel`, `AITutor`, and `PreviewPanel`. Combined this with `useDeferredValue` for the `code` prop passed to `PreviewPanel` to decouple urgent editor updates from heavier preview renders. This reduced non-editor re-renders from ~46 per typing session to 0 for side panels, significantly improving UI responsiveness.
