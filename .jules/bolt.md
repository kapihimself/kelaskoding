## 2024-05-15 - IDE Render Bottleneck
**Learning:** In a 3-pane IDE layout, updating a central code state triggers re-renders across all panels (Material, Editor, Preview, AITutor) on every keystroke, even when props for static panels haven't changed.
**Action:** Apply `React.memo` to static panels and use `useDeferredValue` for the code state passed to the preview panel to decouple editor responsiveness from expensive rendering.

## 2024-05-15 - Deferred Value Render Pattern
**Learning:** Implementing `useDeferredValue` for the code state intentionally causes the parent component (`Workspace`) to render twice per keystroke (once for high-priority UI update, once for low-priority deferred update), but ensures the editor remains responsive.
**Action:** Use `useDeferredValue` in the parent and `React.memo` in the children to maintain a smooth typing experience without redundant child renders.
