## 2026-06-27 - Workspace Memoization & Deferred Updates
**Learning:** In the IDE workspace, typing in the Monaco editor triggers state updates in the parent `Workspace` component, causing all children (`MaterialPanel`, `AITutor`, `PreviewPanel`) to re-render on every keystroke. This is especially problematic for `PreviewPanel` which performs heavy HTML updates.
**Action:** Use `React.memo` to isolate side panels from parent state updates and `useDeferredValue` to decouple the urgent typing state from the expensive preview rendering.
