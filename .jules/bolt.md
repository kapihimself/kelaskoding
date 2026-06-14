## 2026-06-14 - IDE Render Storm
**Learning:** High-frequency state updates in a parent component (like a code editor) trigger full sub-tree re-renders, causing significant lag in side panels (MaterialPanel, AITutor) and heavy previews.
**Action:** Use React.memo for static side panels and useDeferredValue for heavy preview updates to decouple typing responsiveness from UI synchronization.
