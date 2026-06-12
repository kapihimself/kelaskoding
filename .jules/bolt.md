## 2026-06-10 - IDE Workspace Optimization
**Learning:** In a multi-pane IDE layout, frequent state updates (like keystrokes) in one panel (Editor) trigger expensive re-renders in sibling panels (Material, AI Tutor, Preview) if they share a common parent state. Memoizing static-prop-dependent components and using `useDeferredValue` for heavy side-effects like the Preview iframe significantly improves perceived responsiveness.
**Action:** Always wrap side-panels in `React.memo` and use concurrent features like `useDeferredValue` when handling high-frequency state updates in complex UIs.
