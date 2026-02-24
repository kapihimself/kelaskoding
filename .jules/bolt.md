## 2024-05-24 - IDE Responsiveness Optimization
**Learning:** In a multi-pane IDE layout, frequent state updates from the editor (keystrokes) trigger full-tree re-renders if the parent holds the state. Even if children don't use the state, they re-render unless memoized. Furthermore, synchronous rendering of the preview panel on every keystroke can block the main thread.
**Action:** Always apply `React.memo` to static panels (Material, AI Tutor) and use `useDeferredValue` for the code passed to the Preview panel to decouple typing responsiveness from preview updates.
