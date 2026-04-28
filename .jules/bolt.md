## 2025-05-15 - Workspace Performance Optimization
**Learning:** In IDE-like interfaces where a central state (code) changes on every keystroke, all sibling components will re-render by default. Combining `React.memo` for static siblings (MaterialPanel, AITutor) with `useDeferredValue` for heavy siblings (PreviewPanel) provides a significant responsiveness boost.
**Action:** Always check for unnecessary re-renders in components with high-frequency state updates like editors. Use `useDeferredValue` to prioritize UI responsiveness.
