## 2026-05-10 - [Optimization of IDE Workspace re-renders]
**Learning:** In a multi-pane IDE layout, frequently updating state (like code in an editor) causes all sibling panels to re-render if they are children of the same state-holding component (Workspace). Static panels like MaterialPanel (lesson content) and AITutor do not need to re-render on every keystroke.
**Action:** Use `React.memo` for static side-panels and `useDeferredValue` for expensive UI updates (like the Preview iframe) to ensure the editor remains responsive during heavy typing.
