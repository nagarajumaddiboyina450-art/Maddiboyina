/**
 * Kid-friendly Web Audio sound generator
 * Requires no external audio files - 100% reliable offline & instant
 */

class SoundController {
  private ctx: AudioContext | null = null;
  public soundEnabled: boolean = true;
  public voiceEnabled: boolean = true;
  public teluguEnabled: boolean = true;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Cheerful correct chime
  public playCorrect() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 4-note ascending sparkle: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.001, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.35, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.36);
      });
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Gentle cartoon boing for "try again" - supportive & friendly, not scary
  public playTryAgain() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Pitch bend down: 320Hz to 200Hz
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Balloon pop sound
  public playPop() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Burst of high noise + quick resonant pop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.08);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Twinkling celebration fanfare
  public playCelebration() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const melody = [
        { f: 523.25, t: 0.0, d: 0.15 }, // C
        { f: 659.25, t: 0.15, d: 0.15 }, // E
        { f: 783.99, t: 0.3, d: 0.2 },  // G
        { f: 1046.5, t: 0.5, d: 0.4 },  // High C
        { f: 880.0,  t: 0.75, d: 0.2 }, // A
        { f: 1046.5, t: 0.95, d: 0.6 }, // High C hold
      ];

      melody.forEach(item => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.f, now + item.t);

        gain.gain.setValueAtTime(0.01, now + item.t);
        gain.gain.exponentialRampToValueAtTime(0.3, now + item.t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + item.t + item.d);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + item.t);
        osc.stop(now + item.t + item.d + 0.05);
      });
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Play Happy Birthday tune snippet synthesized
  public playBirthdayMelody() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // "Happy Birthday to you, Happy Birthday to Jiyansh!"
      const notes = [
        { f: 392.00, d: 0.25, t: 0.0 },   // G4 Hap-
        { f: 392.00, d: 0.25, t: 0.3 },   // G4 py
        { f: 440.00, d: 0.45, t: 0.6 },   // A4 Birth-
        { f: 392.00, d: 0.45, t: 1.1 },   // G4 day
        { f: 523.25, d: 0.45, t: 1.6 },   // C5 to
        { f: 493.88, d: 0.8,  t: 2.1 },   // B4 you!

        { f: 392.00, d: 0.25, t: 3.0 },   // G4 Hap-
        { f: 392.00, d: 0.25, t: 3.3 },   // G4 py
        { f: 440.00, d: 0.45, t: 3.6 },   // A4 Birth-
        { f: 392.00, d: 0.45, t: 4.1 },   // G4 day
        { f: 587.33, d: 0.45, t: 4.6 },   // D5 dear
        { f: 523.25, d: 0.9,  t: 5.1 },   // C5 Ji-yansh!
      ];

      notes.forEach(note => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, now + note.t);

        gain.gain.setValueAtTime(0.01, now + note.t);
        gain.gain.exponentialRampToValueAtTime(0.28, now + note.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + note.t);
        osc.stop(now + note.t + note.d + 0.05);
      });
    } catch (e) {
      console.warn('Birthday audio error', e);
    }
  }

  // Voice announcement using browser SpeechSynthesis
  public speak(text: string, lang = 'en-US') {
    if (!this.voiceEnabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Friendly slower rate for a 3-year-old
      utterance.pitch = 1.25; // Cheerful toddler-friendly pitch

      // Try finding an expressive/friendly voice
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => v.lang.startsWith(lang.slice(0, 2)) && (v.name.includes('Natural') || v.name.includes('Junior') || v.name.includes('Kid') || v.name.includes('Female')));
      if (preferred) {
        utterance.voice = preferred;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }
}

export const soundManager = new SoundController();
