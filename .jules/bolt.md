## 2025-05-15 - IDE Panel Optimization Pattern
**Learning:** In a multi-pane IDE layout where one piece of state (like 'code') is shared, every keystroke triggers a re-render of the entire Workspace. Wrapping static panels (MaterialPanel, AITutor) in React.memo is essential, but for the PreviewPanel, React.memo must be combined with useDeferredValue to avoid blocking the main thread during heavy iframe/terminal updates.
**Action:** Always memoize panels in the Workspace and use deferred values for expensive live previews to maintain editor responsiveness.
