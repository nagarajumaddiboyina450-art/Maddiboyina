import React, { useState } from 'react';
import { BirthdayBalloons } from './BirthdayBalloons';
import { BirthdayCake } from './BirthdayCake';
import { soundManager } from '../utils/soundEffects';
import { Illustration } from './Illustration';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Mic, MicOff, Languages, Play, Sparkles, Download } from 'lucide-react';

interface StartScreenProps {
  onStartGame: () => void;
  onOpenLetterPicker: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
  teluguEnabled: boolean;
  onToggleTelugu: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStartGame,
  onOpenLetterPicker,
  soundEnabled,
  onToggleSound,
  voiceEnabled,
  onToggleVoice,
  teluguEnabled,
  onToggleTelugu,
}) => {
  const [partyTapped, setPartyTapped] = useState(false);

  const triggerConfetti = () => {
    soundManager.playCelebration();
    setPartyTapped(true);
    setTimeout(() => setPartyTapped(false), 2000);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'],
    });

    if (voiceEnabled) {
      soundManager.speak('Happy Third Birthday Jiyansh! Let us learn ABC!');
    }
  };

  const handleStart = () => {
    soundManager.playCorrect();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
    onStartGame();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-amber-50 via-sky-50 to-pink-50">
      {/* Background Floating Poppable Balloons */}
      <BirthdayBalloons count={8} interactive={true} />

      {/* Top Controls Bar */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between gap-2 pt-2">
        {/* Occasion Badge */}
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/90 backdrop-blur-xs rounded-full border border-amber-200 shadow-sm text-xs sm:text-sm font-fun font-bold text-amber-800">
          <span>🎂</span>
          <span>Special Day: October 22, 2026</span>
        </div>

        {/* Settings Toggles */}
        <div className="flex items-center gap-2">
          {/* Telugu Toggle */}
          <button
            onClick={() => {
              soundManager.playPop();
              onToggleTelugu();
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-fun font-bold transition-all shadow-xs ${
              teluguEnabled
                ? 'bg-purple-600 text-white shadow-purple-200'
                : 'bg-white/80 text-purple-700 border border-purple-200'
            }`}
            title="Telugu Pronunciation Hints"
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">తెలుగు:</span>
            <span>{teluguEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Voice Narration Toggle */}
          <button
            onClick={() => {
              soundManager.playPop();
              onToggleVoice();
            }}
            className={`p-2 rounded-full transition-all shadow-xs ${
              voiceEnabled
                ? 'bg-emerald-500 text-white'
                : 'bg-white/80 text-slate-400 border border-slate-200'
            }`}
            title={voiceEnabled ? 'Voice Narration ON' : 'Voice Narration OFF'}
          >
            {voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              soundManager.playPop();
            }}
            className={`p-2 rounded-full transition-all shadow-xs ${
              soundEnabled
                ? 'bg-amber-500 text-white'
                : 'bg-white/80 text-slate-400 border border-slate-200'
            }`}
            title={soundEnabled ? 'Sound FX ON' : 'Sound FX OFF'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Hero Birthday Showcase */}
      <main className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center my-auto py-4">
        {/* Festive Star Streamer */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 animate-bounce-fun">
          <span className="text-2xl sm:text-3xl">⭐</span>
          <span className="text-xl sm:text-2xl">🎈</span>
          <span className="text-2xl sm:text-3xl">👑</span>
          <span className="text-xl sm:text-2xl">🎉</span>
          <span className="text-2xl sm:text-3xl">⭐</span>
        </div>

        {/* Birthday Title Lockup */}
        <div
          onClick={triggerConfetti}
          className="cursor-pointer group select-none transition-transform active:scale-95"
          title="Tap to celebrate!"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-2 shadow-md">
            🎈 Special 3rd Birthday Celebration 🎈
          </div>

          <h1 className="font-fun text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 filter drop-shadow-sm leading-tight">
            Happy 3rd Birthday <br className="hidden sm:inline" />
            <span className="text-amber-500 underline decoration-wavy decoration-pink-400">Jiyansh!</span>
          </h1>

          <p className="font-fun text-xl sm:text-2xl md:text-3xl font-extrabold text-indigo-700 mt-2">
            ✨ ABC Birthday Adventure ✨
          </p>
        </div>

        {/* Cartoon Animal Friends Cheering Jiyansh */}
        <div className="flex items-center justify-center gap-2 sm:gap-6 my-4">
          {/* Dog */}
          <div className="flex flex-col items-center animate-float">
            <Illustration letter="D" size="md" />
            <span className="text-[11px] font-fun font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
              Doggy 🐶
            </span>
          </div>

          {/* Elephant */}
          <div className="flex flex-col items-center animate-float-reverse">
            <Illustration letter="E" size="md" />
            <span className="text-[11px] font-fun font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
              Elephant 🐘
            </span>
          </div>

          {/* Interactive Birthday Cake Centerpiece */}
          <div className="mx-1 sm:mx-2 scale-90 sm:scale-100">
            <BirthdayCake size="md" />
          </div>

          {/* Lion */}
          <div className="flex flex-col items-center animate-float">
            <Illustration letter="L" size="md" />
            <span className="text-[11px] font-fun font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
              Lion 🦁
            </span>
          </div>

          {/* Rabbit */}
          <div className="flex flex-col items-center animate-float-reverse">
            <Illustration letter="R" size="md" />
            <span className="text-[11px] font-fun font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
              Rabbit 🐰
            </span>
          </div>
        </div>

        {/* Large Touch-Friendly Play Button */}
        <div className="flex flex-col items-center gap-3 mt-2 w-full max-w-sm">
          <button
            onClick={handleStart}
            className="w-full py-4 sm:py-5 px-8 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-fun font-black text-2xl sm:text-3xl shadow-xl toddler-btn active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white text-white ml-0.5" />
            </div>
            <span>PLAY GAME!</span>
            <Sparkles className="w-6 h-6 text-yellow-200 animate-spin-slow" />
          </button>

          {/* Pick Any Letter Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenLetterPicker();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-2xl bg-white/90 hover:bg-white text-indigo-700 font-fun font-bold text-sm sm:text-base border-2 border-indigo-200 shadow-sm active:scale-95 transition-all"
          >
            <span>🔤</span>
            <span>Pick Any Letter (A to Z)</span>
          </button>
        </div>

        {/* Birthday Tap Prompt */}
        <p className="text-xs sm:text-sm font-fun font-semibold text-slate-500 mt-4 flex items-center justify-center gap-1">
          <span>🎈</span>
          <span>Tip: Tap floating balloons & candles to pop & blow them!</span>
          <span>🎂</span>
        </p>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 w-full max-w-xl text-center pb-2">
        <p className="text-[11px] sm:text-xs text-slate-400 font-fun">
          Made with love for Jiyansh’s 3rd Birthday • Fun Preschool English & Telugu Learning
        </p>
      </footer>
    </div>
  );
};
