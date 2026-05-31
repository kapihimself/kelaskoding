# Bolt Journal ⚡

## 2026-05-30 - Workspace Component Re-render Bottleneck
**Learning:** In the multi-pane `Workspace` component, the `code` state is held at the top level. Every keystroke in `EditorPanel` triggers a state update in `Workspace`, causing sibling components like `MaterialPanel` and `AITutor` to re-render, even though they only depend on the stable `lesson` prop.
**Action:** Use `React.memo` for static panels (`MaterialPanel`, `AITutor`) and `useDeferredValue` for the code passed to `PreviewPanel` to ensure typing remains fluid while heavy updates are deferred.
