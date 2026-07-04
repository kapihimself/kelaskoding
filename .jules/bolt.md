## 2026-06-27 - Workspace Render Optimization
**Learning:** In the IDE workspace, typing in the Monaco Editor triggers frequent state updates in the parent `Workspace` component. This causes all side panels (MaterialPanel, AITutor, PreviewPanel) to re-render on every keystroke, even when their props haven't changed.
**Action:** Use `React.memo` to prevent side panels from re-rendering unless their specific props change, and `useDeferredValue` for the code prop passed to the `PreviewPanel` to decouple heavy preview updates from the high-priority typing interaction.
