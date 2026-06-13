import React, { memo } from 'react';
import { Lesson } from '@/data/curriculum';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface MaterialPanelProps {
  lesson: Lesson;
  error: string | null;
  isSuccess: boolean;
}

/** PERFORMANCE: MaterialPanel is memoized to prevent re-renders during high-frequency typing in sibling EditorPanel. */
const MaterialPanel = memo(function MaterialPanel({ lesson, error, isSuccess }: MaterialPanelProps) {
  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Materi Content */}
      <section className="prose prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: lesson.content }}
          className="text-zinc-300 leading-relaxed space-y-4"
        />
      </section>

      {/* Instruksi */}
      <section className="bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Instruksi</h4>
        <p className="text-zinc-300 text-sm leading-relaxed">
          {lesson.task}
        </p>
      </section>

      {/* Feedback */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-sm text-red-400 font-medium">{error}</p>
        </div>
      )}

      {isSuccess && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
          <div>
            <p className="text-sm text-green-400 font-bold mb-1">Mantap! Kamu berhasil.</p>
            <p className="text-xs text-green-400/80">Klik tombol "Lanjut" untuk ke tantangan berikutnya.</p>
          </div>
        </div>
      )}

      {/* Hint */}
      {!isSuccess && !error && (
        <div className="mt-auto pt-6 opacity-40 hover:opacity-100 transition-opacity">
          <details className="cursor-pointer group">
            <summary className="text-xs font-medium text-zinc-500 list-none flex items-center gap-1 group-open:mb-2">
              <span className="w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center text-[10px]">?</span>
              Lihat Petunjuk (Hint)
            </summary>
            <p className="text-xs text-zinc-400 bg-zinc-900 p-3 rounded-lg border border-white/5">
              {lesson.hint}
            </p>
          </details>
        </div>
      )}
    </div>
  );
});

export default MaterialPanel;
