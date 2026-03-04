## 2024-05-15 - IDE Render Optimization
**Learning:** In a 3-pane IDE where one panel (Editor) updates frequently, static panels (Material, AI Tutor) should be wrapped in `React.memo`. However, `React.memo` alone isn't enough for the Preview panel because it *must* receive the code. Using `useDeferredValue` for the code prop allows the UI to prioritize editor responsiveness while still updating the preview.
**Action:** Always combine `React.memo` with `useDeferredValue` when dealing with high-frequency state updates that must be shared with heavy consumer components.
