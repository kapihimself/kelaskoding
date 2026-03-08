## 2025-05-15 - Concurrent IDE Rendering Optimization
**Learning:** In a multi-pane IDE layout, the editor's high-frequency state updates (keystrokes) can cause lag if the entire workspace re-renders. Applying React.memo to static panels (Material, AI Tutor) and using useDeferredValue for the preview content decoupling ensures the editor remains lightning-fast while updates to other panels are prioritized correctly by React.
**Action:** Always use useDeferredValue for code-to-preview data flow and memoize all surrounding static UI components in high-interaction workspaces.
