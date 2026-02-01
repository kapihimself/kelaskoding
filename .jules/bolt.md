# Bolt's Journal - Critical Learnings

## 2025-02-01 - Initial Optimization Strategy
**Learning:** In a React-based IDE, high-frequency state updates (like typing) can cause expensive re-renders across the entire component tree. Memoizing stable panels and using specific Zustand selectors are crucial first steps.
**Action:** Apply React.memo to Material and AI Tutor panels and use granular Zustand selectors.
