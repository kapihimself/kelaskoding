## 2025-05-15 - [IDE Deferred Render Profile]
**Learning:** Using useDeferredValue for the code state in the Workspace causes the parent component to render twice during typing sessions (once for high-priority UI updates and once for background deferred updates), but combined with React.memo, it keeps static child panels like Material and AI Tutor at 0 renders, significantly improving responsiveness.
**Action:** Use useDeferredValue for heavy state that impacts preview panels while keeping the editor state immediate. Always memoize sibling panels that don't depend on the typing state.
