## 2025-05-15 - React.memo + useDeferredValue Pattern for IDE
**Learning:** Combining `React.memo` for static panels (Material, AI Tutor) with `useDeferredValue` for state-heavy panels (Preview) significantly reduces main-thread blocking during rapid typing.
**Action:** Use `useDeferredValue` in Workspace parent to decouple editor input from expensive preview renders, and memoize surrounding panels to prevent redundant re-renders.

## 2025-05-15 - Redundant Debouncing
**Learning:** Internal `setTimeout` debouncing in `PreviewPanel` becomes redundant and causes additional lag when the parent already uses `useDeferredValue`.
**Action:** Remove internal debouncing logic when transitioning to `useDeferredValue` for cleaner, more predictable scheduling.
