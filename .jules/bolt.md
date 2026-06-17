## 2026-06-14 - IDE Performance Optimization
**Learning:** In a multi-pane IDE layout, frequent state updates (like typing in an editor) trigger re-renders across all sibling panels. If these panels (Material, AI Tutor) depend on stable props, they should be memoized. Additionally, using `useDeferredValue` for the preview content keeps the editor highly responsive by prioritizing typing over heavy preview updates.
**Action:** Always wrap side-panels in `React.memo` and use `useDeferredValue` for live previews in interactive learning platforms.
