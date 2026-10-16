import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { BirthdayCake } from './BirthdayCake';
import { BirthdayBalloons } from './BirthdayBalloons';
import { soundManager } from '../utils/soundEffects';
import { RotateCcw, Play, Music, Award, Sparkles, Home, Star, Download } from 'lucide-react';

interface CompletionScreenProps {
  score: number;
  onPlayAgain: () => void;
  onRestart: () => void;
  onGoHome: () => void;
  voiceEnabled: boolean;
  soundEnabled: boolean;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  score,
  onPlayAgain,
  onRestart,
  onGoHome,
  voiceEnabled,
}) => {
  const [isPlayingTune, setIsPlayingTune] = useState(false);

  useEffect(() => {
    // Initial celebration blast
    soundManager.playCelebration();

    if (voiceEnabled) {
      soundManager.speak('Hooray Jiyansh! Happy 3rd Birthday! You completed all twenty six letters from A to Z!');
    }

    // Fireworks / confetti burst cycle
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 30 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Fireworks from left and right
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 450);

    return () => clearInterval(interval);
  }, [voiceEnabled]);

  const handlePlayTune = () => {
    setIsPlayingTune(true);
    soundManager.playBirthdayMelody();
    setTimeout(() => setIsPlayingTune(false), 6000);

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-purple-100 via-pink-100 to-amber-100 select-none">
      {/* Floating poppable balloons */}
      <BirthdayBalloons count={9} interactive={true} />

      {/* Top Bar */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between">
        <button
          onClick={() => {
            soundManager.playPop();
            onGoHome();
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/90 text-slate-700 font-fun font-bold text-xs sm:text-sm border border-slate-200 shadow-xs active:scale-95 transition-all"
        >
          <Home className="w-4 h-4 text-amber-500" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-amber-950 font-fun font-black text-xs sm:text-sm rounded-full shadow-xs">
          <span>🏆 A-Z Master!</span>
        </div>
      </header>

      {/* Main Celebration Content */}
      <main className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center my-auto py-2">
        {/* Crown & Trophy Badge */}
        <div className="flex items-center justify-center gap-2 mb-2 animate-bounce-fun">
          <span className="text-3xl sm:text-4xl">🎆</span>
          <span className="text-4xl sm:text-5xl">👑</span>
          <span className="text-3xl sm:text-4xl">🎆</span>
        </div>

        {/* Celebration Banner */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-2 shadow-md">
          🎉 ALL 26 LETTERS COMPLETED! 🎉
        </div>

        <h1 className="font-fun text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 leading-tight drop-shadow-sm">
          Happy Birthday Jiyansh! <br />
          <span className="text-amber-500">You Completed A to Z!</span>
        </h1>

        <p className="font-fun text-base sm:text-xl font-bold text-slate-700 mt-2">
          Awesome job! You learned all letters from Apple (A) to Zebra (Z)! 🌟
        </p>

        {/* Birthday Cake Centerpiece */}
        <div className="my-3 scale-95 sm:scale-105">
          <BirthdayCake size="lg" />
        </div>

        {/* Final Score & Birthday Star Certificate Box */}
        <div className="w-full max-w-md bg-white/95 rounded-3xl p-4 sm:p-5 border-4 border-amber-300 shadow-xl flex flex-col items-center mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="font-fun text-xl sm:text-2xl font-black text-amber-900">
              Jiyansh&apos;s Birthday Score
            </h2>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>

          <div className="flex items-center justify-center gap-2 my-2 py-2 px-6 rounded-2xl bg-amber-50 border-2 border-amber-200">
            <span className="text-3xl">⭐</span>
            <span className="font-fun text-3xl sm:text-4xl font-black text-amber-600">
              {score}
            </span>
            <span className="text-lg font-bold text-amber-700">/ 260 Stars</span>
          </div>

          <p className="text-xs sm:text-sm font-fun font-bold text-emerald-600 flex items-center gap-1 mt-1">
            <span>🎉 Outstanding Alphabet Master!</span>
            <span>⭐</span>
          </p>

          <p className="text-[11px] text-slate-400 mt-1">
            Special 3rd Birthday • October 22, 2026
          </p>
        </div>

        {/* Action Buttons: Play Again, Restart, Birthday Melody */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
          {/* Play Melody */}
          <button
            onClick={handlePlayTune}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-2xl font-fun font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
              isPlayingTune
                ? 'bg-purple-600 text-white animate-pulse'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-800 border-2 border-purple-300'
            }`}
          >
            <Music className="w-4 h-4 text-purple-600" />
            <span>{isPlayingTune ? 'Playing Melody 🎵' : 'Birthday Song 🎵'}</span>
          </button>

          {/* Play Again (Primary CTA) */}
          <button
            onClick={() => {
              soundManager.playCorrect();
              onPlayAgain();
            }}
            className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-fun font-black text-base sm:text-lg shadow-lg active:scale-95 flex items-center justify-center gap-2 toddler-btn"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Play Again!</span>
          </button>

          {/* Restart */}
          <button
            onClick={() => {
              soundManager.playPop();
              onRestart();
            }}
            className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-600 font-fun font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>Restart from Beginning</span>
          </button>
        </div>
      </main>

      {/* Footer message */}
      <footer className="relative z-10 w-full max-w-lg text-center pb-2">
        <p className="text-xs font-fun text-slate-500">
          Happy 3rd Birthday, Dear Jiyansh! Keep learning and smiling every day! 🎂🎈✨
        </p>
      </footer>
    </div>
  );
};
