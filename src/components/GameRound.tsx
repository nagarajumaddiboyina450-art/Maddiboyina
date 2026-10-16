import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AlphabetItem, ALPHABET_DATA } from '../data/alphabetData';
import { Illustration } from './Illustration';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Mic, MicOff, Languages, ArrowLeft, ArrowRight, Home, Grid, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface GameRoundProps {
  currentIndex: number;
  score: number;
  onAnswerCorrect: (letter: string) => void;
  onNextLetter: () => void;
  onPrevLetter: () => void;
  onGoHome: () => void;
  onOpenLetterPicker: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
  teluguEnabled: boolean;
  onToggleTelugu: () => void;
}

export const GameRound: React.FC<GameRoundProps> = ({
  currentIndex,
  score,
  onAnswerCorrect,
  onNextLetter,
  onPrevLetter,
  onGoHome,
  onOpenLetterPicker,
  soundEnabled,
  onToggleSound,
  voiceEnabled,
  onToggleVoice,
  teluguEnabled,
  onToggleTelugu,
}) => {
  const currentItem = ALPHABET_DATA[currentIndex];
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [wrongWord, setWrongWord] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Generate exactly 5 choices: 1 correct + 4 distinct distractors, shuffled
  const choices = useMemo(() => {
    const distractors = ALPHABET_DATA.filter(item => item.letter !== currentItem.letter);
    // Fisher-Yates shuffle distractors
    const shuffledDistractors = [...distractors].sort(() => Math.random() - 0.5);
    const selectedDistractors = shuffledDistractors.slice(0, 4);

    const fiveChoices = [currentItem, ...selectedDistractors];
    // Shuffle the 5 choices
    return fiveChoices.sort(() => Math.random() - 0.5);
  }, [currentIndex, currentItem]);

  // Read prompt on round change
  useEffect(() => {
    setIsSuccess(false);
    setSelectedWord(null);
    setWrongWord(null);
    setFeedbackMessage('');

    if (voiceEnabled) {
      const prompt = `Letter ${currentItem.letter}! Find the picture starting with ${currentItem.letter}!`;
      soundManager.speak(prompt);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, voiceEnabled, currentItem.letter]);

  const handleCardClick = (choice: AlphabetItem) => {
    if (isSuccess) return; // Already answered correctly, waiting for next round transition

    setSelectedWord(choice.word);

    if (choice.letter === currentItem.letter) {
      // CORRECT ANSWER!
      setIsSuccess(true);
      setWrongWord(null);
      setFeedbackMessage(`Super Jiyansh! ${choice.letter} is for ${choice.word}! ⭐`);

      soundManager.playCorrect();

      // Confetti burst for toddler delight
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#EF4444'],
      });

      // Voice praise
      if (voiceEnabled) {
        const teluguAddon = teluguEnabled ? `. In Telugu: ${choice.teluguScript}` : '';
        soundManager.speak(`Super Jiyansh! ${choice.letter} is for ${choice.word}! +10 points!${teluguAddon}`);
      }

      onAnswerCorrect(choice.letter);

      // Advance to next letter after cheerful delay (~1.4s)
      timeoutRef.current = setTimeout(() => {
        onNextLetter();
      }, 1400);
    } else {
      // INCORRECT ANSWER: Gentle "Try Again!"
      setWrongWord(choice.word);
      setFeedbackMessage(`Oops! That's ${choice.word}. Try again for Letter ${currentItem.letter}!`);
      soundManager.playTryAgain();

      if (voiceEnabled) {
        soundManager.speak(`Oops! That is ${choice.word}. Try again, Jiyansh! Find letter ${currentItem.letter}!`);
      }

      // Reset wobble after 600ms so child can tap freely
      setTimeout(() => {
        setWrongWord(null);
      }, 600);
    }
  };

  const speakPromptAgain = () => {
    soundManager.playPop();
    const teluguText = teluguEnabled ? ` (${currentItem.teluguScript})` : '';
    soundManager.speak(`Find the picture that starts with letter ${currentItem.letter}. ${currentItem.letter} is for ${currentItem.word}${teluguText}!`);
  };

  const speakWord = (choice: AlphabetItem, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playPop();
    const teluguCue = teluguEnabled ? choice.teluguScript : '';
    soundManager.speak(`${choice.word}. ${teluguCue}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-amber-50 via-sky-50 to-pink-50 p-3 sm:p-5 select-none overflow-x-hidden">
      {/* Top Header & Controls */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Home & Letter Picker */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              soundManager.playPop();
              onGoHome();
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs flex items-center gap-1 font-fun font-bold text-xs sm:text-sm active:scale-95 transition-all"
            title="Back to Birthday Start Screen"
          >
            <Home className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onOpenLetterPicker();
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-2xl bg-white hover:bg-slate-50 text-indigo-700 border border-indigo-200 shadow-xs flex items-center gap-1 font-fun font-bold text-xs sm:text-sm active:scale-95 transition-all"
            title="Browse all letters A to Z"
          >
            <Grid className="w-4 h-4 text-indigo-500" />
            <span className="hidden sm:inline">A-Z</span>
          </button>
        </div>

        {/* Center: Score Counter */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full shadow-md">
          <span className="text-lg">⭐</span>
          <div className="flex items-baseline gap-1">
            <span className="font-fun font-black text-lg sm:text-xl text-amber-950">
              {score}
            </span>
            <span className="text-xs font-bold text-amber-900/80">/ 260</span>
          </div>
          <span className="hidden xs:inline text-xs font-fun font-bold text-amber-900 ml-1">
            Stars
          </span>
        </div>

        {/* Right: Audio & Language Toggles */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              soundManager.playPop();
              onToggleTelugu();
            }}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-2xl text-xs font-fun font-bold transition-all shadow-xs ${
              teluguEnabled
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-700 border border-purple-200'
            }`}
            title="Telugu Hints"
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">తెలుగు:</span>
            <span>{teluguEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onToggleVoice();
            }}
            className={`p-2 rounded-2xl transition-all shadow-xs ${
              voiceEnabled ? 'bg-emerald-500 text-white' : 'bg-white text-slate-400 border border-slate-200'
            }`}
            title={voiceEnabled ? 'Voice ON' : 'Voice OFF'}
          >
            {voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onToggleSound();
            }}
            className={`p-2 rounded-2xl transition-all shadow-xs ${
              soundEnabled ? 'bg-amber-500 text-white' : 'bg-white text-slate-400 border border-slate-200'
            }`}
            title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Alphabet Rail Track (A to Z progress) */}
      <div className="w-full max-w-5xl mx-auto my-2 overflow-x-auto scrollbar-none py-1">
        <div className="flex items-center gap-1.5 min-w-max px-2">
          {ALPHABET_DATA.map((item, idx) => {
            const isDone = idx < currentIndex;
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={item.letter}
                onClick={() => {
                  soundManager.playPop();
                  if (idx !== currentIndex) {
                    onAnswerCorrect(ALPHABET_DATA[idx].letter); // Allow free explore
                  }
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-fun text-xs font-black transition-all ${
                  isCurrent
                    ? 'bg-amber-500 text-white ring-4 ring-amber-200 scale-110 shadow-md'
                    : isDone
                    ? 'bg-emerald-500 text-white opacity-90'
                    : 'bg-white text-slate-400 border border-slate-200'
                }`}
                title={`Letter ${item.letter}`}
              >
                {item.letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Letter Showcase Box */}
      <section className="w-full max-w-xl mx-auto flex flex-col items-center text-center my-1">
        <div className="relative flex items-center justify-center gap-4 sm:gap-6 bg-white/90 backdrop-blur-xs px-6 py-3 rounded-3xl border-2 border-amber-200 shadow-md">
          {/* Previous Letter Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onPrevLetter();
            }}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full border transition-all ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed border-slate-200 text-slate-300'
                : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100 active:scale-90'
            }`}
            title="Previous Letter"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Big Colorful Target Letter */}
          <div
            onClick={speakPromptAgain}
            className="flex items-baseline gap-2 cursor-pointer group active:scale-95 transition-transform"
            title="Tap to hear target letter sound!"
          >
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-400 via-rose-400 to-indigo-500 text-white shadow-lg animate-pulse-glow">
              <span className="font-fun text-5xl sm:text-6xl font-black drop-shadow-md">
                {currentItem.letter}
              </span>
            </div>

            <div className="flex flex-col items-start justify-center text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-fun text-2xl sm:text-3xl font-black text-slate-800">
                  {currentItem.letter.toLowerCase()}
                </span>
                <span className="text-xl sm:text-2xl">{currentItem.emoji}</span>
              </div>
              <span className="text-xs sm:text-sm font-fun font-bold text-amber-600">
                Letter {currentIndex + 1} of 26
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Tap to hear voice 🔊
              </span>
            </div>
          </div>

          {/* Next Letter Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onNextLetter();
            }}
            disabled={currentIndex === ALPHABET_DATA.length - 1}
            className={`p-2 rounded-full border transition-all ${
              currentIndex === ALPHABET_DATA.length - 1
                ? 'opacity-30 cursor-not-allowed border-slate-200 text-slate-300'
                : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100 active:scale-90'
            }`}
            title="Next Letter"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions banner */}
        <div className="mt-2 flex items-center justify-center gap-2">
          <p className="font-fun text-base sm:text-lg font-extrabold text-indigo-900">
            Touch the picture starting with &quot;
            <span className="text-amber-600 underline font-black">{currentItem.letter}</span>
            &quot;!
          </p>
          <button
            onClick={speakPromptAgain}
            className="p-1.5 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 active:scale-90 transition-transform"
            title="Replay instructions"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Toddler Feedback Bar */}
        <div className="h-7 mt-1 flex items-center justify-center">
          {feedbackMessage ? (
            <div
              className={`inline-flex items-center gap-1.5 px-4 py-0.5 rounded-full text-xs sm:text-sm font-fun font-black shadow-xs transition-all ${
                isSuccess
                  ? 'bg-emerald-500 text-white animate-bounce-fun'
                  : 'bg-rose-100 text-rose-700 animate-wobble border border-rose-300'
              }`}
            >
              {isSuccess ? <CheckCircle2 className="w-4 h-4" /> : <span>🎈</span>}
              <span>{feedbackMessage}</span>
            </div>
          ) : (
            <span className="text-xs text-slate-400 font-fun">
              Jiyansh, can you find {currentItem.letter}?
            </span>
          )}
        </div>
      </section>

      {/* EXACTLY FIVE PICTURE CHOICES (Grid / Flex designed for preschool fingers) */}
      <main className="w-full max-w-4xl mx-auto my-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 justify-center">
          {choices.map((choice, i) => {
            const isCorrectChoice = choice.letter === currentItem.letter;
            const isSelected = selectedWord === choice.word;
            const isWrongChoice = wrongWord === choice.word;

            return (
              <button
                key={`${choice.word}-${i}`}
                onClick={() => handleCardClick(choice)}
                className={`relative flex flex-col items-center justify-between p-3 sm:p-4 rounded-3xl border-4 transition-all duration-200 select-none cursor-pointer toddler-btn ${
                  choice.color.bg
                } ${
                  isSuccess && isCorrectChoice
                    ? 'border-emerald-500 ring-4 ring-emerald-300 scale-105 bg-emerald-50 shadow-xl'
                    : isWrongChoice
                    ? 'border-rose-400 animate-wobble bg-rose-50'
                    : `${choice.color.border} hover:border-amber-400 active:scale-95 shadow-md`
                }`}
              >
                {/* Initial Letter Badge */}
                <div className="absolute top-2 left-2.5 w-6 h-6 rounded-full bg-white/90 shadow-xs border border-slate-200 flex items-center justify-center">
                  <span className="font-fun font-black text-xs text-slate-700">
                    {choice.letter}
                  </span>
                </div>

                {/* Speaker button on each card */}
                <div
                  onClick={e => speakWord(choice, e)}
                  className="absolute top-2 right-2.5 w-6 h-6 rounded-full bg-white/80 hover:bg-white text-slate-500 flex items-center justify-center shadow-xs"
                  title={`Pronounce ${choice.word}`}
                >
                  <Volume2 className="w-3 h-3" />
                </div>

                {/* Big Illustration */}
                <div className="my-1.5 flex items-center justify-center">
                  <Illustration letter={choice.letter} size="md" />
                </div>

                {/* English Word with highlighted first letter */}
                <div className="w-full text-center mt-1">
                  <span className="font-fun font-black text-base sm:text-lg text-slate-800 tracking-wide">
                    <span className="text-amber-600 font-black text-lg sm:text-xl">
                      {choice.word.charAt(0)}
                    </span>
                    {choice.word.slice(1)}
                  </span>

                  {/* Optional Telugu Script & Phonetic Hint */}
                  {teluguEnabled && (
                    <div className="mt-0.5 pt-0.5 border-t border-slate-200/60 flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-bold text-purple-700 font-sans">
                        {choice.teluguScript}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        ({choice.teluguPhonetic})
                      </span>
                    </div>
                  )}
                </div>

                {/* Success Star Checkmark */}
                {isSuccess && isCorrectChoice && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md animate-bounce">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </main>

      {/* Bottom Cheerful Nav & Phonics Tip */}
      <footer className="w-full max-w-xl mx-auto flex flex-col items-center gap-1.5 text-center pt-1 pb-1">
        <div className="flex items-center justify-center gap-2 text-xs font-fun font-semibold text-slate-500 bg-white/70 px-4 py-1 rounded-full border border-slate-200">
          <span>💡 Phonics:</span>
          <span className="text-indigo-600 font-bold">{currentItem.phonics}</span>
        </div>
        <p className="text-[11px] text-slate-400 font-fun">
          Touch any card to answer • A happy sound & +10 points for the right answer!
        </p>
      </footer>
    </div>
  );
};
