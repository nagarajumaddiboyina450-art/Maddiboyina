import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';

interface BirthdayCakeProps {
  onAllCandlesBlown?: () => void;
  size?: 'md' | 'lg';
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ size = 'lg' }) => {
  const [litCandles, setLitCandles] = useState<boolean[]>([true, true, true]);

  const toggleCandle = (index: number) => {
    soundManager.playPop();
    const updated = [...litCandles];
    updated[index] = !updated[index];
    setLitCandles(updated);

    const activeCount = updated.filter(Boolean).length;
    if (activeCount === 0) {
      soundManager.playCelebration();
    }
  };

  const relightAll = () => {
    soundManager.playBirthdayMelody();
    setLitCandles([true, true, true]);
  };

  const scaleClass = size === 'lg' ? 'w-64 h-56 sm:w-72 sm:h-64' : 'w-48 h-44';

  return (
    <div className={`relative flex flex-col items-center justify-end ${scaleClass} select-none`}>
      {/* Candles Row */}
      <div className="flex items-end justify-center gap-6 sm:gap-8 mb-[-4px] z-20">
        {[0, 1, 2].map(i => {
          const isLit = litCandles[i];
          const colors = ['#F43F5E', '#3B82F6', '#10B981'];
          return (
            <div
              key={i}
              onClick={() => toggleCandle(i)}
              className="flex flex-col items-center cursor-pointer group active:scale-95 transition-transform"
              title={isLit ? 'Tap to blow out candle!' : 'Tap to light candle!'}
            >
              {/* Flame */}
              {isLit ? (
                <div className="relative w-4 h-6 mb-1 animate-bounce-fun">
                  <div className="w-4 h-6 bg-amber-400 rounded-full blur-[1px] animate-pulse" />
                  <div className="absolute inset-1 w-2 h-4 bg-yellow-200 rounded-full mx-auto" />
                  <div className="absolute bottom-0 left-1.5 w-1 h-1.5 bg-sky-400 rounded-full" />
                </div>
              ) : (
                <div className="h-6 flex items-center justify-center mb-1">
                  <span className="text-xs text-slate-400 font-bold opacity-80 animate-fade-in">💨</span>
                </div>
              )}

              {/* Candle Stick */}
              <div
                style={{ backgroundColor: colors[i] }}
                className="w-3.5 h-12 rounded-t-sm shadow-inner relative flex flex-col items-center overflow-hidden"
              >
                {/* Spiral stripes */}
                <div className="w-full h-2 bg-white/40 transform -rotate-12 mt-1" />
                <div className="w-full h-2 bg-white/40 transform -rotate-12 mt-2" />
                <div className="w-full h-2 bg-white/40 transform -rotate-12 mt-2" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Cake Top Tier */}
      <div className="relative w-44 sm:w-52 h-14 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-t-3xl border-t-4 border-pink-400 shadow-md flex items-center justify-center z-10">
        {/* Frosting Drips */}
        <div className="absolute top-0 inset-x-0 flex justify-around text-pink-400 text-lg leading-none">
          <span>🍓</span>
          <span>✨</span>
          <span>🍓</span>
          <span>✨</span>
          <span>🍓</span>
        </div>
        <span className="text-pink-600 font-fun font-bold text-sm tracking-wide mt-3">
          JIYANSH
        </span>
      </div>

      {/* Cake Bottom Tier */}
      <div className="relative w-56 sm:w-64 h-20 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-t-2xl border-t-4 border-amber-300 shadow-lg flex items-center justify-center overflow-hidden">
        {/* Sprinkles */}
        <div className="absolute inset-0 flex flex-wrap gap-3 p-3 opacity-80 pointer-events-none">
          <span className="w-2 h-1 bg-red-400 rounded rotate-45" />
          <span className="w-2 h-1 bg-blue-400 rounded -rotate-12" />
          <span className="w-2 h-1 bg-green-400 rounded rotate-90" />
          <span className="w-2 h-1 bg-purple-400 rounded rotate-12" />
          <span className="w-2 h-1 bg-amber-500 rounded -rotate-45" />
          <span className="w-2 h-1 bg-pink-400 rounded rotate-30" />
          <span className="w-2 h-1 bg-sky-400 rounded -rotate-60" />
        </div>

        {/* Big Golden Number 3 Badge */}
        <div
          onClick={relightAll}
          className="relative z-10 w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full border-2 border-white shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          title="Tap to light candles & play tune!"
        >
          <span className="font-fun text-2xl font-black text-amber-900 drop-shadow">3</span>
        </div>
      </div>

      {/* Cake Plate Stand */}
      <div className="w-64 sm:w-72 h-4 bg-slate-200 rounded-full shadow-md border-b-2 border-slate-300" />

      {/* Little hint for child */}
      <p className="text-[11px] font-bold text-amber-700/80 mt-1">
        Tap candles to blow 🎂 Tap &apos;3&apos; for music 🎵
      </p>
    </div>
  );
};
