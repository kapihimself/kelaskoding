## 2025-05-22 - IDE Performance Optimization
**Learning:** In a multi-pane IDE layout, updating a single pane (like the Editor) can trigger expensive re-renders across all other panes (Material, Preview, AI Tutor) if they are not memoized. Combining `React.memo` with `useDeferredValue` for the code-dependent preview pane effectively decouples typing latency from preview rendering.
**Action:** Always memoize peripheral panels in interactive workspace layouts and use `useDeferredValue` for expensive synchronized views.
