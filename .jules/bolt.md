## 2026-05-09 - Memoization of Static Workspace Panels
**Learning:** In the `Workspace` component, child components like `MaterialPanel` and `AITutor` were re-rendering on every keystroke because they received props that didn't change, but their parent state (`code`) was updating frequently.
**Action:** Use `React.memo` for components that depend on stable props like `lesson` but are hosted in a parent with high-frequency state updates. This is especially important for the IDE experience where typing should be as fluid as possible.
