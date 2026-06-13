## 2026-06-10 - IDE Workspace Optimization
**Learning:** High-frequency state updates like typing in a Monaco editor trigger cascading re-renders across all child components in a shared parent state, even if they only depend on static or infrequently updated props.
**Action:** Use React.memo for side-panels (Material, AI Tutor) and useDeferredValue for heavy preview renders to maintain 60fps typing responsiveness.
