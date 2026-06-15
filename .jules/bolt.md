## 2026-06-14 - IDE Workspace Performance Pattern
**Learning:** Sibling panels in the IDE Workspace (MaterialPanel, AITutor) were re-rendering on every keystroke in the Monaco editor because they shared a parent state (code). Wrapping them in React.memo and using useDeferredValue for the PreviewPanel successfully decoupled the typing experience from heavy side-panel updates.
**Action:** Always memoize static sibling components in interactive IDE layouts to maintain 60fps typing performance.
