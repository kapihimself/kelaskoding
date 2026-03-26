## 2025-05-15 - IDE Render Optimization
**Learning:** In a multi-pane IDE layout, updating the editor state triggers re-renders across all panels (Material, Editor, Preview, AITutor) even if their props haven't changed. Combining `React.memo` for static panels with `useDeferredValue` for the expensive preview panel significantly improves typing responsiveness.
**Action:** Always wrap heavy IDE sub-components in `React.memo` and use `useDeferredValue` in the parent workspace to decouple editor state updates from secondary UI updates like live previews.
