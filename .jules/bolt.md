## 2026-06-10 - IDE Workspace Optimization
**Learning:** Decoupling high-frequency state updates (typing) from heavy side-effects (preview rendering) using `useDeferredValue` and `React.memo` is critical for maintainable IDE performance. `useMemo` for derived iframe content from a deferred value is cleaner and more performant than manual `useEffect` + `setTimeout` debouncing in React 19.
**Action:** Always wrap static side-panels in `React.memo` in multi-pane layouts to ensure 0 re-renders during primary interaction loops.
