
## 2026-06-27 - Workspace Performance Optimization
**Learning:** In a multi-pane IDE layout, frequent state updates (typing) trigger cascading re-renders across all panels. React.memo on static panels (Material, AI Tutor) and useDeferredValue on heavy panels (Preview) are essential for maintaining 60fps responsiveness.
**Action:** Always wrap non-interactive or purely prop-driven side panels in React.memo and use useDeferredValue when passing frequently updated state to expensive child components.
