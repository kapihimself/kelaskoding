## 2026-02-03 - [IDE Workspace Re-render Optimization]
**Learning:** In a high-interactivity component like an IDE, state updates on every keystroke can cause expensive re-renders of side panels (Material, AI Tutor) and the Live Preview. Using `React.memo` on side panels and `useDeferredValue` for the code passed to the Preview panel significantly improves editor responsiveness.
**Action:** Always use granular memoization and deferred values for secondary panels that depend on high-frequency state like editor code.
