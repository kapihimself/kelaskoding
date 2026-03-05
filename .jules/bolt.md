## 2025-05-14 - IDE Performance Pattern
**Learning:** In a 3-pane IDE layout, the Editor panel (e.g., Monaco) emits high-frequency state updates during typing. Without memoization, secondary panels like MaterialPanel and AITutor re-render on every keystroke, leading to input lag. Additionally, coupling the code state directly to the PreviewPanel causes expensive iframe/terminal updates to block the main thread.
**Action:** Use React.memo for static/contextual panels and useDeferredValue for the code state passed to the PreviewPanel to ensure a smooth typing experience.
