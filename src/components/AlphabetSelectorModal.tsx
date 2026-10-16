import React from 'react';
import { ALPHABET_DATA } from '../data/alphabetData';
import { soundManager } from '../utils/soundEffects';

interface AlphabetSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLetter: (index: number) => void;
  currentIndex: number;
  completedLetters: Set<string>;
}

export const AlphabetSelectorModal: React.FC<AlphabetSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectLetter,
  currentIndex,
  completedLetters,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-4 border-amber-300 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎈</span>
            <h2 className="font-fun text-xl sm:text-2xl font-black text-amber-800">
              Pick Any Letter (A to Z)
            </h2>
          </div>
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 font-bold text-xl flex items-center justify-center hover:bg-rose-200 active:scale-90 transition-transform"
          >
            ✕
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 my-2">
          Tap any letter to jump right in! ⭐ Stars show completed letters.
        </p>

        {/* Alphabet Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2.5 overflow-y-auto py-2 pr-1 flex-1">
          {ALPHABET_DATA.map((item, idx) => {
            const isCompleted = completedLetters.has(item.letter);
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={item.letter}
                onClick={() => {
                  soundManager.playPop();
                  onSelectLetter(idx);
                  onClose();
                }}
                className={`relative flex flex-col items-center justify-center p-2 rounded-2xl border-2 transition-all active:scale-95 ${
                  isCurrent
                    ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400 shadow-md'
                    : isCompleted
                    ? 'bg-emerald-50 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-slate-50 border-slate-200 hover:bg-amber-50'
                }`}
              >
                {/* Completed Star */}
                {isCompleted && (
                  <span className="absolute -top-1.5 -right-1.5 text-xs bg-amber-400 text-amber-900 rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-xs">
                    ⭐
                  </span>
                )}

                <span className="font-fun text-xl sm:text-2xl font-black text-slate-800">
                  {item.letter}
                </span>
                <span className="text-base sm:text-lg">{item.emoji}</span>
                <span className="text-[10px] font-bold text-slate-500 truncate max-w-full">
                  {item.word}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Close */}
        <div className="pt-3 border-t border-amber-100 flex justify-center">
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-fun font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            Back to Adventure 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
