## 2026-05-04 - [IDE Component Optimization]
**Learning:** In a Next.js 15 environment with heavy state updates (like an editor), components like MaterialPanel and AITutor that don't depend on the editor state should be memoized. Combining React.memo with useDeferredValue for the preview component significantly improves editor responsiveness. Explicitly importing React is necessary for React.memo to avoid runtime errors even if JSX transform is used.
**Action:** Always memoize static side-panels in Workspace layouts and use deferred values for heavy previews.
