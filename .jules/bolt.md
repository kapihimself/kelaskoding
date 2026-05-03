## 2025-05-15 - Memoizing Side Panels in IDE Workspace
**Learning:** In the Workspace component, typing in the editor triggers state updates that cause the entire Workspace to re-render. Side panels like MaterialPanel and AITutor, which only depend on the static lesson data or discrete success/error states, re-render unnecessarily on every keystroke.
**Action:** Use React.memo for side panels to skip re-renders when the parent's code state changes, reducing CPU usage during typing.
