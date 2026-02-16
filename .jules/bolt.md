## 2026-02-16 - IDE Performance Optimization
**Learning:** Without memoization, MaterialPanel and AITutor re-render on every keystroke in the Editor, even though their props remain unchanged. This creates unnecessary overhead during high-frequency typing.
**Action:** Apply React.memo to stable panels and use useDeferredValue for the code prop passed to the PreviewPanel to decouple editor responsiveness from preview updates.
