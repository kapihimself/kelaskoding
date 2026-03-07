## 2025-05-15 - IDE Optimization with useDeferredValue and React.memo
**Learning:** In a 3-pane IDE layout where the central editor updates a shared 'code' state, every keystroke triggers a re-render of all panels (Material, AI Tutor, Preview). React.memo eliminates renders for static panels, and useDeferredValue decouples the expensive Live Preview update from the high-priority editor input.
**Action:** Always memoize peripheral panels in complex IDE layouts and use deferred values for heavy secondary effects like code execution or live preview rendering to maintain editor responsiveness.
