import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/soundEffects';

interface Balloon {
  id: number;
  x: number; // percentage 5% - 90%
  color: string;
  size: number;
  speed: number;
  delay: number;
  popped: boolean;
  letter?: string;
}

const BALLOON_COLORS = [
  '#EF4444', // Red
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#8B5CF6', // Purple
  '#06B6D4', // Cyan
];

export const BirthdayBalloons: React.FC<{ interactive?: boolean; count?: number }> = ({
  interactive = true,
  count = 7,
}) => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const letters = ['J', 'I', 'Y', 'A', 'N', 'S', 'H', '3'];
    const initialBalloons: Balloon[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 8 + (i * 84) / Math.max(1, count - 1),
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      size: 56 + (i % 3) * 12,
      speed: 12 + (i % 4) * 3,
      delay: (i * 0.8) % 3,
      popped: false,
      letter: letters[i % letters.length],
    }));
    setBalloons(initialBalloons);
  }, [count]);

  const popBalloon = (id: number) => {
    if (!interactive) return;
    soundManager.playPop();

    setBalloons(prev =>
      prev.map(b => (b.id === id ? { ...b, popped: true } : b))
    );

    // Respawn balloon after 2.5 seconds
    setTimeout(() => {
      setBalloons(prev =>
        prev.map(b => (b.id === id ? { ...b, popped: false } : b))
      );
    }, 2500);
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {balloons.map(b => {
        if (b.popped) return null;
        return (
          <div
            key={b.id}
            onClick={() => popBalloon(b.id)}
            style={{
              left: `${b.x}%`,
              animationDuration: `${b.speed}s`,
              animationDelay: `${b.delay}s`,
            }}
            className={`absolute bottom-[-100px] animate-float cursor-pointer ${
              interactive ? 'pointer-events-auto active:scale-125' : ''
            } transition-transform duration-150 select-none group`}
          >
            {/* Balloon Body */}
            <div
              style={{
                width: `${b.size}px`,
                height: `${b.size * 1.25}px`,
                backgroundColor: b.color,
              }}
              className="relative rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] shadow-lg flex items-center justify-center filter drop-shadow-md"
            >
              {/* Highlight gleam */}
              <div className="absolute top-2 left-2.5 w-3.5 h-6 rounded-full bg-white/40 transform -rotate-30" />

              {/* Letter on Balloon */}
              {b.letter && (
                <span className="text-white font-fun font-black text-xl sm:text-2xl drop-shadow-md">
                  {b.letter}
                </span>
              )}

              {/* Balloon Knot */}
              <div
                style={{ backgroundColor: b.color }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-2 rounded-sm"
              />

              {/* Balloon String */}
              <svg
                className="absolute top-full left-1/2 -translate-x-1/2 overflow-visible"
                width="20"
                height="45"
              >
                <path
                  d="M10,0 Q18,15 10,25 Q2,35 10,45"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
