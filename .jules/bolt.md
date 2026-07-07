## 2026-06-27 - [Component Decoupling in IDE Layout]
**Learning:** In a multi-pane IDE layout where a central state (code) is updated on every keystroke, all sibling components (MaterialPanel, AITutor, Preview) re-render by default. Wrapping side panels in React.memo and using useDeferredValue for the heavy preview component significantly reduces main-thread blocking without sacrificing UI consistency.
**Action:** Use React.memo for static side panels and useDeferredValue for expensive "secondary" views that depend on fast-changing input state.
