## 2026-05-13 - [Performance] Workspace re-render optimization
**Learning:** In a multi-pane IDE layout, updating parent state (like 'code') on every keystroke causes all sibling panels (MaterialPanel, AITutor) to re-render. These panels are mostly static during a lesson and should be memoized. Additionally, heavy sibling panels like PreviewPanel can cause typing lag; useDeferredValue helps by deprioritizing these updates.
**Action:** Always wrap static sibling panels in React.memo when a parent manages high-frequency state like text input. Use useDeferredValue for heavy preview components.

**Measurement:** MaterialPanel and AITutor renders dropped from ~2 renders/keystroke to 0. Preview update is debounced via deferred value, keeping typing smooth.
