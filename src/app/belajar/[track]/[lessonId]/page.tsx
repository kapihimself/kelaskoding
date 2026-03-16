"use client";

import React, { use } from 'react';
import { curriculum } from '@/data/curriculum';
import Workspace from '@/components/ide/Workspace';
import ProfileStats from '@/components/ProfileStats';
import { useStore } from '@/store/useStore';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    track: string;
    lessonId: string;
  }>;
}

export default function BelajarPage({ params }: PageProps) {
  const { track, lessonId } = use(params);
  const lessons = curriculum[track];

  if (!lessons) return notFound();

  const lessonIndex = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[lessonIndex];

  if (!lesson) return notFound();

  const nextLesson = lessons[lessonIndex + 1];
  const completedLessons = useStore((state) => state.completedLessons);

  // Calculate progress for this track
  const trackLessonsCount = lessons.length;
  const completedTrackLessonsCount = lessons.filter(l => completedLessons.includes(l.id)).length;
  const progressValue = (completedTrackLessonsCount / trackLessonsCount) * 100;

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white overflow-hidden">
      {/* Workspace Header */}
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
            <span className="text-sm font-semibold">KodeLokal</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Jalur:</span>
            <span className="text-sm font-bold text-white capitalize">
              {track.replace('_', ' ')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <ProfileStats />
          </div>
          <div className="w-48">
            <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-1">
              <span>Progress Jalur</span>
              <span>{Math.round(progressValue)}%</span>
            </div>
            <Progress value={progressValue} className="h-1.5 bg-white/5" />
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 overflow-hidden">
        <Workspace
          lesson={lesson}
          trackId={track}
          nextLessonId={nextLesson?.id}
        />
      </main>
    </div>
  );
}
