## 2026-05-30 - IDE Workspace Optimization
**Learning:** High-frequency typing in the Monaco editor was triggering full re-renders of static side panels (MaterialPanel, AITutor) because they shared the same parent state (Workspace). Combining React.memo with useDeferredValue and useMemo effectively decouples typing from heavy UI updates.
**Action:** Always memoize sibling panels in complex multi-pane layouts if they don't need to update on every keystroke. Use useDeferredValue for code state that drives heavy previews.
