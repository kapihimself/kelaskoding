## 2025-05-15 - [IDE Render Optimization]
**Learning:** In a high-frequency update environment like a code editor, every keystroke triggers a top-down re-render if the state is managed in a shared parent. Unoptimized sibling components (MaterialPanel, AITutor) will re-render even if their props are static.
**Action:** Always use React.memo for static or infrequently changing panels in the IDE. Use useDeferredValue for code previews to prioritize editor responsiveness and keep typing smooth.
