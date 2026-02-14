"use client";

import React from 'react';
import { useStore } from '@/store/useStore';
import { Trophy, Star, Zap } from 'lucide-react';

export default function ProfileStats() {
  // Optimization: Use individual selectors to prevent re-renders when other state changes
  const xp = useStore((state) => state.xp);
  const badges = useStore((state) => state.badges);

  const level = Math.floor(xp / 100) + 1;
  const progressToNextLevel = (xp % 100);

  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-tighter">
          <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span>Level {level}</span>
        </div>
        <div className="w-24 h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all duration-1000"
            style={{ width: `${progressToNextLevel}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-blue-400 fill-blue-400/20" />
          <span className="text-sm font-bold text-white">{xp} <span className="text-[10px] text-zinc-500 font-medium">XP</span></span>
        </div>

        <div className="flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-purple-400 fill-purple-400/20" />
          <span className="text-sm font-bold text-white">{badges.length} <span className="text-[10px] text-zinc-500 font-medium">Badge</span></span>
        </div>
      </div>
    </div>
  );
}
