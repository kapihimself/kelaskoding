## 2024-05-15 - IDE Panel Memoization
**Learning:** In the 3-pane IDE layout, the Workspace state (`code`) changes on every keystroke. Components like `MaterialPanel` and `AITutor` that only depend on the `lesson` object re-render unnecessarily because the parent state updates.
**Action:** Use `React.memo` for static panels and `useDeferredValue` for the code preview to decouple editor responsiveness from expensive re-renders.
