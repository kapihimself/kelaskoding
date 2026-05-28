## 2026-05-19 - Workspace Re-render Chain
**Learning:** Typing in the Monaco editor triggers high-frequency state updates in the parent `Workspace`. This causes all sibling panels (`MaterialPanel`, `AITutor`, `PreviewPanel`) to re-render 1:1 with keystrokes, even though their content is largely static. `PreviewPanel` is particularly heavy due to iframe `srcDoc` updates.
**Action:** Use `React.memo` on all static sidebars. Apply `useDeferredValue` to the code state passed to `PreviewPanel` to decouple it from the urgent typing task, significantly improving editor responsiveness.
