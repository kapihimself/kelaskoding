## 2026-06-14 - Initial Setup
**Learning:** Initializing Bolt's journal for the first time in this repository.
**Action:** Always check this file before starting new optimizations.

## 2026-06-14 - IDE Render Bottleneck
**Learning:** In the multi-pane Workspace IDE, state updates from the editor (Monaco) trigger re-renders across all sibling panels (MaterialPanel, AITutor) because they share the same parent state. Applying `React.memo` to these siblings and `useDeferredValue` to the PreviewPanel successfully decouples typing latency from heavy side-panel rendering.
**Action:** Always check for sibling re-renders in high-frequency interaction components (like editors or search inputs) and apply memoization to static neighbors.
