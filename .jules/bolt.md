## 2026-06-14 - IDE Performance Optimization
**Learning:** In a multi-pane IDE layout where parent state (code) changes on every keystroke, all side panels (Material, AI Tutor, Preview) re-render by default. Combining React.memo on children with useDeferredValue for heavy preview updates significantly improves typing responsiveness.
**Action:** Always memoize sibling components in high-frequency update contexts like code editors or real-time forms.
