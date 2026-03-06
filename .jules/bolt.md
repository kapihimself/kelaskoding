## 2025-05-15 - IDE Rendering Bottleneck
**Learning:** In the 3-pane IDE layout, updating the code state in the parent Workspace component triggers a full re-render of all panels (Material, Editor, Preview, and AI Tutor) on every keystroke. This causes noticeable lag during fast typing.
**Action:** Use React.memo for static panels and useDeferredValue for the preview to decouple editor responsiveness from expensive rendering.
