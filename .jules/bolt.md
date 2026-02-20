# Bolt Performance Journal ⚡

## 2025-05-15 - Initializing Bolt Journal
**Learning:** React components that don't depend on high-frequency state (like editor code) should be memoized to avoid unnecessary re-renders during typing sessions.
**Action:** Use React.memo for MaterialPanel and AITutor, and useDeferredValue for PreviewPanel updates.
