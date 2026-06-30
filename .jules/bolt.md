# Bolt's Performance Journal

## 2026-06-27 - Workspace Re-render Bottleneck
**Learning:** The `Workspace` component manages the entire IDE state (`code`), causing all children (`MaterialPanel`, `AITutor`, `PreviewPanel`) to re-render on every keystroke. Even though `MaterialPanel` and `AITutor` only depend on the static `lesson` prop, they re-render because React re-renders all children of a changed component by default.
**Action:** Use `React.memo` for static side panels and `useDeferredValue` for heavy components like `PreviewPanel` to decouple them from the urgent typing state.
