## 2026-05-30 - [IDE Performance Pattern]
**Learning:** Combining `React.memo` with `useDeferredValue` for code-dependent panels (e.g., PreviewPanel) significantly reduces redundant re-renders. Declaring `useDeferredValue` in the parent (`Workspace`) decouples typing from heavy child updates.
**Action:** Use `useDeferredValue` in the parent component to handle high-frequency state updates like code editing, and wrap static sibling components in `React.memo`.
