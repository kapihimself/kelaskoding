## 2026-06-27 - Optimizing IDE Workspace Responsiveness
**Learning:** In a multi-pane IDE, updating state on every keystroke triggers cascading re-renders across all panels. While Monaco is fast, the surrounding React components and especially an iframe-based PreviewPanel can introduce significant lag.
**Action:** Use React.memo for static side panels and useDeferredValue for heavy preview updates. Prefer useMemo over useEffect+useState for derived state (like iframe content) to reduce render cycles.
