import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  completedLessons: string[];
  xp: number;
  badges: string[];
  completeLesson: (lessonId: string, xpGain: number) => void;
  addBadge: (badge: string) => void;
  resetProgress: () => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      completedLessons: [],
      xp: 0,
      badges: [],
      completeLesson: (lessonId, xpGain) =>
        set((state) => {
          const alreadyCompleted = state.completedLessons.includes(lessonId);
          return {
            completedLessons: alreadyCompleted
              ? state.completedLessons
              : [...state.completedLessons, lessonId],
            xp: alreadyCompleted ? state.xp : state.xp + xpGain,
          };
        }),
      addBadge: (badge) =>
        set((state) => ({
          badges: state.badges.includes(badge)
            ? state.badges
            : [...state.badges, badge],
        })),
      resetProgress: () => set({ completedLessons: [], xp: 0, badges: [] }),
    }),
    {
      name: 'kodelokal-storage',
    }
  )
);
