## 2025-05-15 - Workspace IDE Optimization
**Learning:** High-frequency input in the EditorPanel caused unnecessary re-renders of adjacent panels (MaterialPanel, AITutor) and blocking updates of the PreviewPanel. Combining React.memo on peripheral panels with useDeferredValue for the shared state (code) significantly improves typing responsiveness.
**Action:** Always memoize peripheral panels in multi-pane IDE layouts and use useDeferredValue for code-dependent previews to avoid main-thread blocking.
