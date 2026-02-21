## 2025-05-15 - IDE Rendering Optimization
**Learning:** Combining React.memo with useDeferredValue is highly effective for classroom IDEs. Memoization prevents static panels (Material, AI Tutor) from re-rendering on every keystroke, while useDeferredValue decouples the expensive preview processing from the main editor thread.
**Action:** Always check for component re-renders during high-frequency events (like typing) and apply React.memo to components whose props remain stable.
