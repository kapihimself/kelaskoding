## 2025-05-15 - [Optimization] IDE Component Memoization and Deferred Updates

**Learning:** In a multi-pane IDE layout like Workspace.tsx, where a single central state (like 'code') is frequently updated, all child components re-render by default. This is particularly wasteful for static panels like MaterialPanel and AITutor which don't depend on the typing state. Combining React.memo with useDeferredValue for the code preview allows the editor to remain highly responsive while backgrounding the expensive preview rendering and eliminating unnecessary renders of static components.

**Action:** Always wrap sidebars and static material panels in React.memo within high-frequency update contexts. Use useDeferredValue for code-dependent previews to decouple UI responsiveness from preview processing.
