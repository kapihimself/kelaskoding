## 2026-06-14 - Optimized Workspace Re-renders
**Learning:** Sibling components in a shared parent (like MaterialPanel and AITutor in Workspace) re-render on every parent state update (keystrokes) even if their props are static. Wrapping them in `React.memo` effectively drops their re-render count from 1:1 with keystrokes to zero during typing sessions. `useDeferredValue` for the preview pane further improves perceived editor responsiveness by decoupling typing from heavy iframe updates.
**Action:** Always memoize static side-panels in high-frequency update components like IDEs.
