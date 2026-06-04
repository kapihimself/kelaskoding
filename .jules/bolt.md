## 2026-05-30 - IDE Workspace Rendering Optimization
**Learning:** High-frequency state updates (like typing in an editor) can cause expensive sibling components to re-render, leading to keystroke latency. Combining `useDeferredValue` for the content state with `React.memo` for static or secondary panels (MaterialPanel, AITutor) effectively decouples the "hot path" from peripheral UI updates.
**Action:** Use `useDeferredValue` in parent components to transition heavy child updates (like live previews) to idle time, and always memoize stable sibling components to avoid redundant render cycles.
