## 2024-05-15 - React Render Optimization in IDE
**Learning:** In a multi-pane IDE layout, frequent state updates (like typing in an editor) can trigger expensive re-renders across all panels if not properly decoupled. MaterialPanel and AITutor were re-rendering on every keystroke despite having static content for the current lesson.
**Action:** Use React.memo for side panels (Material, AI Tutor) and combine it with useDeferredValue for the code prop in the PreviewPanel to ensure the editor remains responsive while the preview updates asynchronously.
