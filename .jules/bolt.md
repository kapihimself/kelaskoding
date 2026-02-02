# Bolt's Journal - KodeLokal Performance

## 2025-05-15 - Prevent IDE Panel Re-renders
**Learning:** In a 3-pane IDE layout where the central state (code) changes on every keystroke, the entire component tree re-renders if not properly memoized. Granular Zustand selectors and `React.memo` are essential to keep the editor responsive.
**Action:** Apply `React.memo` to non-code-dependent panels (Material, AI Tutor) and use granular selectors in components consuming the global store.
