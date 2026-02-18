## 2024-05-15 - React 19 IDE Performance Pattern
**Learning:** In a multi-pane IDE environment, uncontrolled re-renders of stable panels (Material, AI Tutor) during high-frequency typing can lead to noticeable input lag. Combining `React.memo` with `useDeferredValue` for code-dependent panels (Preview) creates a "smooth typing" experience by prioritizing the editor's UI thread while lazily updating the preview.
**Action:** Always wrap non-interactive classroom panels in `React.memo` and use `useDeferredValue` for code props passed to heavy preview components.
