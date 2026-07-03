## 2026-06-27 - Workspace Performance Optimization
**Learning:** In the IDE Workspace, typing state updates were triggering 10+ re-renders per character across child components (MaterialPanel, AITutor, PreviewPanel) because they were not memoized.
**Action:** Wrapped side panels in React.memo and used useDeferredValue for the preview code prop. This keeps the editor responsive by prioritizing typing updates over heavy preview rendering.
