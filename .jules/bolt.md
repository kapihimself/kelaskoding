## 2024-05-22 - IDE Performance Pattern
**Learning:** Combining React.memo with useDeferredValue for code-dependent panels (e.g., PreviewPanel) significantly improves editor responsiveness. Static panels like MaterialPanel and AITutor should be memoized to avoid renders on every keystroke when their props don't change.
**Action:** Always check if parent state updates (like code editing) are triggering unnecessary renders in static or expensive sibling components.
