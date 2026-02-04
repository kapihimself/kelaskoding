## 2025-05-22 - [IDE Performance: useDeferredValue + React.memo]
**Learning:** In a multi-pane IDE where one pane's state (code) drives updates in other expensive panes (Live Preview, AI Tutor), using `useDeferredValue` for the shared state and wrapping child panels in `React.memo` significantly improves typing responsiveness. It allows React to prioritize the editor's immediate feedback while deferring the heavy preview update to idle time.
**Action:** Always consider `useDeferredValue` for "live" features that depend on high-frequency input.

## 2025-05-22 - [Zustand Anti-pattern: Object Destructuring]
**Learning:** Using `const { x, y } = useStore()` causes the component to re-render whenever *any* part of the store changes. In a persisted store with many fields (like user progress), this can lead to frequent unnecessary re-renders.
**Action:** Use granular selectors like `const x = useStore(s => s.x)` or `useShallow` for selecting multiple specific fields.
