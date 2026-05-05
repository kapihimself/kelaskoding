## 2025-05-15 - IDE Performance Pattern
**Learning:** Combine `React.memo` with `useDeferredValue` for code-dependent panels (e.g., PreviewPanel). While `useDeferredValue` handles prioritization, keeping a minimal `setTimeout` (debounce) inside the panel can still be beneficial for very large codebases to prevent excessive iframe reloads. Verification confirmed memoization reduced static panel renders (MaterialPanel, AITutor) to zero during typing.
**Action:** Always memoize panels that receive deferred values to ensure React only performs the deferred render once.
