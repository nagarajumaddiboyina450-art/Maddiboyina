/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameRound } from './components/GameRound';
import { CompletionScreen } from './components/CompletionScreen';
import { AlphabetSelectorModal } from './components/AlphabetSelectorModal';
import { ALPHABET_DATA } from './data/alphabetData';
import { soundManager } from './utils/soundEffects';

type ScreenState = 'start' | 'playing' | 'completed';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [completedLetters, setCompletedLetters] = useState<Set<string>>(new Set());

  // Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
  const [teluguEnabled, setTeluguEnabled] = useState<boolean>(true);

  // Alphabet Quick Navigation Modal
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  // Keep soundManager settings synchronized
  useEffect(() => {
    soundManager.soundEnabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    soundManager.voiceEnabled = voiceEnabled;
  }, [voiceEnabled]);

  useEffect(() => {
    soundManager.teluguEnabled = teluguEnabled;
  }, [teluguEnabled]);

  const handleStartGame = () => {
    setScreen('playing');
  };

  const handleAnswerCorrect = (letter: string) => {
    if (!completedLetters.has(letter)) {
      setScore(prev => prev + 10);
      setCompletedLetters(prev => new Set(prev).add(letter));
    }
  };

  const handleNextLetter = () => {
    if (currentIndex >= ALPHABET_DATA.length - 1) {
      // Completed all 26 letters (A to Z)!
      setScreen('completed');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevLetter = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSelectLetter = (index: number) => {
    setCurrentIndex(index);
    setScreen('playing');
  };

  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setScore(0);
    setCompletedLetters(new Set());
    setScreen('playing');
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setCompletedLetters(new Set());
    setScreen('start');
  };

  const handleGoHome = () => {
    setScreen('start');
  };

  return (
    <div className="relative min-h-screen w-full font-fun text-slate-800 antialiased select-none">
      {screen === 'start' && (
        <StartScreen
          onStartGame={handleStartGame}
          onOpenLetterPicker={() => setIsPickerOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(v => !v)}
          voiceEnabled={voiceEnabled}
          onToggleVoice={() => setVoiceEnabled(v => !v)}
          teluguEnabled={teluguEnabled}
          onToggleTelugu={() => setTeluguEnabled(v => !v)}
        />
      )}

      {screen === 'playing' && (
        <GameRound
          currentIndex={currentIndex}
          score={score}
          onAnswerCorrect={handleAnswerCorrect}
          onNextLetter={handleNextLetter}
          onPrevLetter={handlePrevLetter}
          onGoHome={handleGoHome}
          onOpenLetterPicker={() => setIsPickerOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(v => !v)}
          voiceEnabled={voiceEnabled}
          onToggleVoice={() => setVoiceEnabled(v => !v)}
          teluguEnabled={teluguEnabled}
          onToggleTelugu={() => setTeluguEnabled(v => !v)}
        />
      )}

      {screen === 'completed' && (
        <CompletionScreen
          score={score}
          onPlayAgain={handlePlayAgain}
          onRestart={handleRestart}
          onGoHome={handleGoHome}
          soundEnabled={soundEnabled}
          voiceEnabled={voiceEnabled}
        />
      )}

      {/* Alphabet quick navigation modal */}
      <AlphabetSelectorModal
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelectLetter={handleSelectLetter}
        currentIndex={currentIndex}
        completedLetters={completedLetters}
      />
    </div>
  );
}
