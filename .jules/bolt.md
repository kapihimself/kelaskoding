## 2026-05-19 - IDE Performance Pattern
**Learning:** Combining `React.memo` with `useDeferredValue` is highly effective for IDE layouts where one pane (Editor) updates at high frequency. Memoization handles stable sibling panels (MaterialPanel, AITutor), while `useDeferredValue` ensures the UI thread prioritizes input responsiveness over expensive sibling updates (PreviewPanel).
**Action:** Always check for high-frequency state updates in parent components and protect stable children with `memo`, while deferring heavy dependent updates.
