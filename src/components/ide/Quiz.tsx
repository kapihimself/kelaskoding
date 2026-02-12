"use client";

import React, { useState, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onSuccess: () => void;
}

const Quiz = memo(function Quiz({ question, options, correctAnswer, onSuccess }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheck = () => {
    if (selected === correctAnswer) {
      setIsCorrect(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
      setTimeout(onSuccess, 1500);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Card className="glass border-white/10 animate-in zoom-in-95 duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-white">Cek Pemahamanmu!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zinc-300 mb-4">{question}</p>
        <div className="space-y-2">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selected === i
                  ? 'bg-blue-600/20 border-blue-500 text-white'
                  : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {selected === i && isCorrect === true && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                {selected === i && isCorrect === false && <XCircle className="w-4 h-4 text-red-500" />}
              </div>
            </button>
          ))}
        </div>

        <Button
          className="w-full mt-4"
          disabled={selected === null || isCorrect === true}
          onClick={handleCheck}
        >
          Periksa Jawaban
        </Button>
      </CardContent>
    </Card>
  );
});

export default Quiz;
