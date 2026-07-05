## 2026-06-27 - IDE Workspace Optimization
**Learning:** In the Workspace component, state updates from the Monaco Editor (on every keystroke) were triggering full re-renders of heavy sibling components like MaterialPanel and AITutor. Wrapping these in React.memo and using useDeferredValue for the PreviewPanel code prop effectively decouples the UI interaction from heavy rendering.
**Action:** Always memoize sibling components in high-frequency state-update parent containers (like IDE editors) and use useDeferredValue to lower the priority of non-urgent visual updates like code previews.
