## 2025-05-15 - IDE Responsiveness Optimization
**Learning:** Combining React.memo with useDeferredValue significantly reduces unnecessary renders in a multi-pane IDE layout where one pane (editor) frequently updates shared state. Memoizing static panels like MaterialPanel and AITutor reduced their render count from 10 to 0 during a 5-keystroke typing session.
**Action:** Always memoize peripheral panels in complex workspaces that rely on frequently changing central state (like editor code).
