## 2026-06-09 - Workspace Optimization
**Learning:** In IDE-style layouts, keystroke state updates in the parent component trigger full re-renders of all sibling panels (Material, AITutor, Preview).
**Action:** Use `React.memo` for static/infrequent panels and `useDeferredValue` for heavy preview panels to decouple typing feedback from secondary UI updates. This reduced re-renders from ~10 per 4 characters to 2 for side panels.
