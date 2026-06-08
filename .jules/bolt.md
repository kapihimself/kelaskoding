## 2026-05-30 - Memoization in Workspace IDE
**Learning:** Sibling components in the Workspace IDE (MaterialPanel, AITutor) were re-rendering on every keystroke because they shared a parent state (code) with the Editor.
**Action:** Use React.memo() on non-code-dependent side panels to ensure they stay static during editing, reducing re-renders from ~40 to 0 per typing session.
