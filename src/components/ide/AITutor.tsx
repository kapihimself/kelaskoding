"use client";

import React, { memo } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { Lesson } from '@/data/curriculum';

interface AITutorProps {
  lesson: Lesson;
}

/** PERFORMANCE: Memoizing AITutor prevents unnecessary re-renders
 * when the user types in the editor, keeping the AI suggestions
 * stable until a lesson or error state change occurs. */
const AITutor = memo(function AITutor({ lesson }: AITutorProps) {
  const getSuggestion = () => {
    if (lesson.previewMode === 'html') {
      return "Ingat, setiap tag pembuka harus ada penutupnya. Pastikan kamu mengetik teksnya persis seperti yang diminta.";
    }
    return "Di Python, fungsi print() membutuhkan tanda kurung dan tanda kutip untuk mencetak kalimat.";
  };

  return (
    <div className="bg-zinc-900/80 border border-blue-500/20 rounded-xl p-4 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">AI Tutor KodeLokal</span>
      </div>

      <div className="flex gap-3">
        <div className="shrink-0">
          <MessageSquare className="w-4 h-4 text-zinc-500 mt-1" />
        </div>
        <p className="text-[13px] text-zinc-300 leading-relaxed italic">
          "{getSuggestion()}"
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] text-zinc-500">Status: Aktif</span>
        <button className="text-[10px] text-blue-400 hover:underline font-medium">Tanya Mentor?</button>
      </div>
    </div>
  );
});

export default AITutor;
