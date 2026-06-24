"use client";

import React, { useState, useEffect, useDeferredValue } from 'react';
import { Lesson } from '@/data/curriculum';
import MaterialPanel from './MaterialPanel';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import AITutor from './AITutor';
import Quiz from './Quiz';
import { useStore } from '@/store/useStore';
import { validateCode } from '@/lib/validator';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface WorkspaceProps {
  lesson: Lesson;
  nextLessonId?: string;
  trackId: string;
}

export default function Workspace({ lesson, nextLessonId, trackId }: WorkspaceProps) {
  const [code, setCode] = useState(lesson.initialCode);

  /** PERFORMANCE: Decouples high-priority typing updates from the more expensive
   * live preview rendering to ensure a responsive editing experience. */
  const deferredCode = useDeferredValue(code);
  const [output, setOutput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const completeLesson = useStore((state) => state.completeLesson);
  const addBadge = useStore((state) => state.addBadge);

  useEffect(() => {
    setCode(lesson.initialCode);
    setIsSuccess(false);
    setShowQuiz(false);
    setError(null);
    setOutput('');
  }, [lesson]);

  const handleRun = async () => {
    setError(null);
    const result = await validateCode(code, lesson.validationRules, lesson.previewMode);

    if (result.success) {
      setIsSuccess(true);
      if (lesson.previewMode === 'terminal') {
        setOutput(`> Running python script...\n${lesson.validationRules.find(r => r.type === 'python_logic')?.value || 'Success!'}`);
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (lesson.quiz) {
        setTimeout(() => setShowQuiz(true), 1000);
      } else {
        completeLesson(lesson.id, lesson.xpGain);
        if (lesson.id === 'se-1' || lesson.id === 'ai-1') addBadge('Coder Pemula');
      }
    } else {
      setError(result.message || 'Coba cek lagi kodemu ya!');
      if (lesson.previewMode === 'terminal') {
        setOutput(`> Error: ${result.message}`);
      }
    }
  };

  const handleReset = () => {
    setCode(lesson.initialCode);
    setIsSuccess(false);
    setShowQuiz(false);
    setError(null);
    setOutput('');
  };

  const handleQuizSuccess = () => {
    completeLesson(lesson.id, lesson.xpGain + 20);
    if (lesson.id === 'se-1' || lesson.id === 'ai-1') addBadge('Coder Pemula');
    setShowQuiz(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-zinc-950 relative">
      {showQuiz && lesson.quiz && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Quiz
              {...lesson.quiz}
              onSuccess={handleQuizSuccess}
            />
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium text-zinc-400">
            {lesson.title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-zinc-400 hover:text-white hover:bg-white/5"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>

          {!isSuccess ? (
            <Button
              size="sm"
              onClick={handleRun}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Jalankan
            </Button>
          ) : (
            nextLessonId ? (
              <Link href={`/belajar/${trackId}/${nextLessonId}`}>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 animate-in zoom-in-95 duration-300"
                >
                  Lanjut
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <Link href="/">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 animate-in zoom-in-95 duration-300"
                >
                  Selesai! Kembali ke Home
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )
          )}
        </div>
      </div>

      {/* 3-Pane Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Material */}
        <div className="w-1/3 border-r border-white/5 overflow-y-auto flex flex-col">
          <MaterialPanel lesson={lesson} error={error} isSuccess={isSuccess} />

          <div className="mt-auto p-6">
            <AITutor lesson={lesson} />
          </div>
        </div>

        {/* Middle: Editor */}
        <div className="w-1/3 border-r border-white/5">
          <EditorPanel
            code={code}
            onChange={setCode}
            language={lesson.previewMode === 'html' ? 'html' : 'python'}
          />
        </div>

        {/* Right: Preview */}
        <div className="w-1/3 bg-zinc-900/30">
          <PreviewPanel
            code={deferredCode}
            mode={lesson.previewMode}
            output={output}
          />
        </div>
      </div>
    </div>
  );
}
