import { create } from 'zustand';

interface ProgressState {
  completedLessons: string[];
  completeLesson: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  completedLessons: [],
  completeLesson: (lessonId: string) => set((state) => ({
    completedLessons: state.completedLessons.includes(lessonId)
      ? state.completedLessons
      : [...state.completedLessons, lessonId]
  })),
  isLessonComplete: (lessonId: string) => get().completedLessons.includes(lessonId)
}));