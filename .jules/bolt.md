## 2025-05-15 - [IDE Rendering Optimization]
**Learning:** In a multi-pane IDE where one pane (Editor) updates frequently (on every keystroke), all other panes will re-render if they are children of the same parent state, even if their props haven't changed. Using `React.memo` is essential for static panes like `MaterialPanel` and `AITutor` to achieve 0 renders during typing. Additionally, `useDeferredValue` is a powerful tool to decouple the high-priority editor UI from the lower-priority preview rendering, improving perceived responsiveness without manual debouncing.

**Action:** Always profile render counts during frequent interactions (like typing) and apply `React.memo` + `useCallback` + `useDeferredValue` patterns to isolate the performance impact of high-frequency state updates.
