## 2026-05-24 - [Workspace Performance Patterns]
**Learning:** Combining `React.memo` for static panels with `useDeferredValue` for the editor state in a multi-pane IDE layout prevents redundant re-renders and keeps typing responsive. Redundant internal debouncing (e.g., `setTimeout`) in children should be removed when using `useDeferredValue` to avoid stacking delays.
**Action:** Always prefer `useDeferredValue` at the state source to decouple heavy UI updates from user input.
