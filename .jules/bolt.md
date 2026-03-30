## 2025-05-15 - [IDE Rendering Optimization]
**Learning:** Combining `React.memo` for static UI panels (Material, AI Tutor) with `useDeferredValue` for high-frequency state updates (Code Editor) effectively decouples typing responsiveness from expensive side-effects like live previews.
**Action:** Always prioritize `useDeferredValue` for "non-urgent" updates in IDE-like interfaces to ensure the main input thread remains fluid.

## 2025-05-15 - [Stabilizing Callbacks for Memoized Components]
**Learning:** `React.memo` is only effective if the props passed are stable. Wrapping event handlers in `useCallback` is essential when they are passed to memoized child components, especially when the parent state (like code) changes frequently.
**Action:** When applying `React.memo` to a component, audit its parent for any unstable callback references being passed as props.
