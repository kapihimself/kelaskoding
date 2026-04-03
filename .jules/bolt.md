## 2025-05-15 - IDE Component Re-render Bottleneck
**Learning:** In the 3-pane IDE layout, the `Workspace` parent state updates on every keystroke to keep the `EditorPanel` controlled. This causes adjacent panels like `MaterialPanel` and `AITutor` to re-render unnecessarily because they are children of `Workspace`, even though their props remain static.
**Action:** Use `React.memo` for static panels and `useDeferredValue` for expensive panels (like `PreviewPanel`) to decouple editor responsiveness from side-panel rendering.

## 2025-05-15 - Transitioning from setTimeout to useDeferredValue
**Learning:** Using `setTimeout` for debouncing in `PreviewPanel` introduced a fixed lag regardless of CPU availability. `useDeferredValue` allows React to prioritize the editor typing (high priority) and update the preview as soon as the main thread is free (low priority).
**Action:** Favor `useDeferredValue` for UI-heavy updates that need to stay in sync with user input but shouldn't block it.
