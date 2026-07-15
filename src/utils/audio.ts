// Procedural Audio Synthesizer using Web Audio API
// This allows 100% network-independent, highly interactive audio.

class CinematicAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isInitialized = false;

  // Sound nodes
  private ambientWindGain: GainNode | null = null;
  private ambientRainGain: GainNode | null = null;
  private ambientFireflyGain: GainNode | null = null;
  private pianoProgressionInterval: NodeJS.Timeout | null = null;

  // Mute state
  private isMuted = false;

  constructor() {}

  public init() {
    if (this.isInitialized) return;
    
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime); // Master volume
      this.masterGain.connect(this.ctx.destination);

      this.setupAmbientWind();
      this.setupAmbientRain();
      this.setupAmbientFirefly();

      this.isInitialized = true;
    } catch (e) {
      console.error("Failed to initialize Web Audio API:", e);
    }
  }

  public resume() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setVolume(volume: number) {
    if (!this.masterGain || !this.ctx) return;
    this.masterGain.gain.linearRampToValueAtTime(
      this.isMuted ? 0 : volume,
      this.ctx.currentTime + 0.5
    );
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    this.setVolume(this.isMuted ? 0 : 0.4);
    return this.isMuted;
  }

  public getMuteState() {
    return this.isMuted;
  }

  // --- AMBIENT SOUND GENERATORS ---

  // Procedural wind generator (Filtered noise with LFO)
  private setupAmbientWind() {
    if (!this.ctx || !this.masterGain) return;

    // Create a noise buffer (1 second of white noise)
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.0, this.ctx.currentTime);

    // LFO for wind gust swelling
    const lfo = this.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // very slow sweep (12 seconds)

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(150, this.ctx.currentTime); // filter sweep depth

    // Connect LFO
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    // Ambient gain
    this.ambientWindGain = this.ctx.createGain();
    this.ambientWindGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    // Connect noise path
    noiseNode.connect(filter);
    filter.connect(this.ambientWindGain);
    this.ambientWindGain.connect(this.masterGain);

    // Start nodes
    lfo.start();
    noiseNode.start();
  }

  // Procedural rain generator (Noise + Bandpass + Raindrops)
  private setupAmbientRain() {
    if (!this.ctx || !this.masterGain) return;

    // Ambient Rain rumble
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.5, this.ctx.currentTime);

    this.ambientRainGain = this.ctx.createGain();
    this.ambientRainGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    noiseNode.connect(filter);
    filter.connect(this.ambientRainGain);
    this.ambientRainGain.connect(this.masterGain);
    noiseNode.start();

    // Spawn random raindrop pitter-patters
    setInterval(() => {
      if (this.ambientRainGain && this.ambientRainGain.gain.value > 0.05 && !this.isMuted) {
        this.triggerRaindrop();
      }
    }, 120);
  }

  private triggerRaindrop() {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    // Random high pitch raindrop
    const pitch = 1500 + Math.random() * 2000;
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.04);

    gain.gain.setValueAtTime(0.02 + Math.random() * 0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Soft hum of fireflies
  private setupAmbientFirefly() {
    if (!this.ctx || !this.masterGain) return;

    this.ambientFireflyGain = this.ctx.createGain();
    this.ambientFireflyGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // We trigger dynamic low-frequency swells when needed
  }

  // Fade sound levels based on the active scene
  public transitionAmbientTo(scene: string) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Helper functions for ramps
    const fade = (gainNode: GainNode | null, targetVal: number, duration: number) => {
      if (!gainNode) return;
      gainNode.gain.cancelScheduledValues(now);
      gainNode.gain.setValueAtTime(gainNode.gain.value, now);
      gainNode.gain.linearRampToValueAtTime(targetVal, now + duration);
    };

    switch (scene) {
      case "opening":
        fade(this.ambientWindGain, 0.12, 3);
        fade(this.ambientRainGain, 0.0, 2);
        this.stopPianoProgression();
        break;
      case "chapter1": // Village Sunrise
        fade(this.ambientWindGain, 0.06, 3);
        fade(this.ambientRainGain, 0.0, 2);
        this.startPianoProgression("happy");
        break;
      case "chapter2": // Village Shop
        fade(this.ambientWindGain, 0.04, 3);
        fade(this.ambientRainGain, 0.0, 2);
        this.startPianoProgression("playful");
        break;
      case "chapter3": // Life parting / Rain
        fade(this.ambientWindGain, 0.15, 3);
        fade(this.ambientRainGain, 0.35, 4); // Heavy rain
        this.startPianoProgression("melancholy");
        break;
      case "chapter4": // Time flies
        fade(this.ambientWindGain, 0.18, 2);
        fade(this.ambientRainGain, 0.08, 3);
        this.startPianoProgression("tense");
        break;
      case "chapter5": // Found her / Instagram
        fade(this.ambientWindGain, 0.02, 3);
        fade(this.ambientRainGain, 0.0, 3);
        this.startPianoProgression("reunion");
        break;
      case "chapter6": // Memory room
        fade(this.ambientWindGain, 0.04, 4);
        fade(this.ambientRainGain, 0.0, 3);
        this.startPianoProgression("peaceful");
        break;
      case "final": // Gratitude
        fade(this.ambientWindGain, 0.08, 4);
        fade(this.ambientRainGain, 0, 4);
        this.startPianoProgression("nostalgic");
        break;
      default:
        break;
    }
  }

  // --- INSTRUMENT SYNTHESIZERS ---

  // Synth a custom mellow piano note
  public playPianoNote(frequency: number, velocity = 0.5, duration = 2.5) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Pure sine for root frequency, soft triangle for warmth
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(frequency, now);

    osc2.type = "triangle";
    // Slightly detuned second oscillator for organic texture
    osc2.frequency.setValueAtTime(frequency + 0.5, now);

    // Warm filter to damp highs
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + duration * 0.8);

    // Amplitude envelope: instant attack, long decay
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(velocity * 0.3, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  // Play a soft violin note
  public playViolinNote(frequency: number, velocity = 0.4, duration = 3.0) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Sawtooth with heavily damped filter creates a violin-like string voice
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(frequency, now);

    // Vibrato
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(6.0, now); // 6Hz vibrato
    vibratoGain.gain.setValueAtTime(frequency * 0.015, now); // vibrato depth

    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.linearRampToValueAtTime(900, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(200, now + duration);

    // Slow attack, long release
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(velocity * 0.15, now + 0.4);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    vibrato.start(now);
    osc.start(now);

    vibrato.stop(now + duration + 0.2);
    osc.stop(now + duration + 0.2);
  }

  // Dynamic procedural piano loops based on mood
  private startPianoProgression(mood: string) {
    this.stopPianoProgression();
    
    const playChordPattern = () => {
      if (this.isMuted) return;

      // Note frequency mappings
      const C4 = 261.63, E4 = 329.63, G4 = 392.00, B4 = 493.88;
      const F3 = 174.61, A3 = 220.00, C3 = 130.81, G3 = 196.00;
      const D4 = 293.66, F4 = 349.23, A4 = 440.00, C5 = 523.25;
      const E3 = 164.81, B3 = 246.94, E5 = 659.25, D5 = 587.33;

      const now = Date.now();
      
      if (mood === "happy") {
        // Cmaj7 - Fmaj9 - G6 - Cmaj7
        const step = Math.floor(now / 5000) % 4;
        if (step === 0) {
          this.playPianoNote(C3, 0.4, 4.5);
          setTimeout(() => this.playPianoNote(G4, 0.2, 3), 200);
          setTimeout(() => this.playPianoNote(C4, 0.25, 3), 400);
          setTimeout(() => this.playPianoNote(E4, 0.2, 3), 800);
        } else if (step === 1) {
          this.playPianoNote(F3, 0.4, 4.5);
          setTimeout(() => this.playPianoNote(C4, 0.2, 3), 200);
          setTimeout(() => this.playPianoNote(E4, 0.25, 3), 400);
          setTimeout(() => this.playPianoNote(A4, 0.2, 3), 800);
        } else if (step === 2) {
          this.playPianoNote(G3, 0.4, 4.5);
          setTimeout(() => this.playPianoNote(D4, 0.2, 3), 200);
          setTimeout(() => this.playPianoNote(G4, 0.25, 3), 400);
          setTimeout(() => this.playPianoNote(B4, 0.2, 3), 800);
        } else {
          this.playPianoNote(C3, 0.4, 4.5);
          setTimeout(() => this.playPianoNote(G4, 0.2, 3), 200);
          setTimeout(() => this.playPianoNote(C4, 0.25, 3), 400);
          setTimeout(() => this.playPianoNote(E4, 0.2, 3), 800);
        }
      } 
      else if (mood === "playful") {
        // Shorter, bouncey notes (Arpeggiated G major)
        const step = Math.floor(now / 3500) % 4;
        if (step === 0) {
          this.playPianoNote(C4, 0.3, 2);
          setTimeout(() => this.playPianoNote(E4, 0.2, 2), 150);
          setTimeout(() => this.playPianoNote(G4, 0.2, 2), 300);
        } else if (step === 1) {
          this.playPianoNote(A3, 0.3, 2);
          setTimeout(() => this.playPianoNote(C4, 0.2, 2), 150);
          setTimeout(() => this.playPianoNote(F4, 0.2, 2), 300);
        } else if (step === 2) {
          this.playPianoNote(G3, 0.3, 2);
          setTimeout(() => this.playPianoNote(B3, 0.2, 2), 150);
          setTimeout(() => this.playPianoNote(D4, 0.2, 2), 300);
        } else {
          this.playPianoNote(C4, 0.3, 2);
          setTimeout(() => this.playPianoNote(E4, 0.2, 2), 150);
          setTimeout(() => this.playPianoNote(G4, 0.2, 2), 300);
        }
      }
      else if (mood === "melancholy") {
        // Am9 - Fmaj7 - C - G
        const step = Math.floor(now / 6000) % 4;
        if (step === 0) {
          this.playPianoNote(A3, 0.5, 5);
          setTimeout(() => this.playPianoNote(E4, 0.3, 4), 300);
          setTimeout(() => this.playPianoNote(C4, 0.2, 4), 600);
          setTimeout(() => this.playPianoNote(B4, 0.2, 4), 1200);
        } else if (step === 1) {
          this.playPianoNote(F3, 0.5, 5);
          setTimeout(() => this.playPianoNote(C4, 0.3, 4), 300);
          setTimeout(() => this.playPianoNote(E4, 0.2, 4), 600);
          setTimeout(() => this.playPianoNote(A4, 0.2, 4), 1200);
        } else if (step === 2) {
          this.playPianoNote(C3, 0.5, 5);
          setTimeout(() => this.playPianoNote(G4, 0.3, 4), 300);
          setTimeout(() => this.playPianoNote(C4, 0.2, 4), 600);
          setTimeout(() => this.playPianoNote(E4, 0.2, 4), 1200);
        } else {
          this.playPianoNote(G3, 0.5, 5);
          setTimeout(() => this.playPianoNote(D4, 0.3, 4), 300);
          setTimeout(() => this.playPianoNote(G4, 0.2, 4), 600);
          setTimeout(() => this.playPianoNote(B4, 0.2, 4), 1200);
        }
      }
      else if (mood === "tense") {
        // Ticking-like piano chords, higher register, slight discordance
        const step = Math.floor(now / 2000) % 4;
        if (step === 0) {
          this.playPianoNote(A4, 0.2, 1.5);
          this.playPianoNote(C5, 0.2, 1.5);
        } else if (step === 1) {
          this.playPianoNote(B4, 0.2, 1.5);
          this.playPianoNote(D5, 0.2, 1.5);
        } else if (step === 2) {
          this.playPianoNote(C5, 0.2, 1.5);
          this.playPianoNote(E5, 0.2, 1.5);
        } else {
          this.playPianoNote(A4, 0.2, 1.5);
          this.playPianoNote(D5, 0.2, 1.5);
        }
      }
      else if (mood === "reunion") {
        // Emotional peak, strings + piano swelling together
        const step = Math.floor(now / 5500) % 4;
        if (step === 0) {
          this.playPianoNote(C3, 0.6, 5.0);
          this.playPianoNote(C4, 0.3, 4.0);
          setTimeout(() => this.playViolinNote(E4, 0.4, 4.5), 100);
          setTimeout(() => this.playPianoNote(G4, 0.3, 3.5), 500);
          setTimeout(() => this.playPianoNote(C5, 0.3, 3.5), 1000);
        } else if (step === 1) {
          this.playPianoNote(A3, 0.6, 5.0);
          this.playPianoNote(C4, 0.3, 4.0);
          setTimeout(() => this.playViolinNote(E4, 0.4, 4.5), 100);
          setTimeout(() => this.playPianoNote(A4, 0.3, 3.5), 500);
          setTimeout(() => this.playPianoNote(E5, 0.3, 3.5), 1000);
        } else if (step === 2) {
          this.playPianoNote(F3, 0.6, 5.0);
          this.playPianoNote(C4, 0.3, 4.0);
          setTimeout(() => this.playViolinNote(F4, 0.4, 4.5), 100);
          setTimeout(() => this.playPianoNote(A4, 0.3, 3.5), 500);
          setTimeout(() => this.playPianoNote(C5, 0.3, 3.5), 1000);
        } else {
          this.playPianoNote(G3, 0.6, 5.0);
          this.playPianoNote(D4, 0.3, 4.0);
          setTimeout(() => this.playViolinNote(G4, 0.4, 4.5), 100);
          setTimeout(() => this.playPianoNote(B4, 0.3, 3.5), 500);
          setTimeout(() => this.playPianoNote(D5, 0.3, 3.5), 1000);
        }
      }
      else if (mood === "peaceful" || mood === "nostalgic") {
        // Ultra soft, slow spacey piano
        const step = Math.floor(now / 7000) % 4;
        if (step === 0) {
          this.playPianoNote(C3, 0.3, 6);
          setTimeout(() => this.playPianoNote(G4, 0.15, 5), 400);
          setTimeout(() => this.playPianoNote(C4, 0.2, 5), 800);
          setTimeout(() => this.playPianoNote(E4, 0.15, 5), 1600);
        } else if (step === 1) {
          this.playPianoNote(F3, 0.3, 6);
          setTimeout(() => this.playPianoNote(C4, 0.15, 5), 400);
          setTimeout(() => this.playPianoNote(E4, 0.2, 5), 800);
          setTimeout(() => this.playPianoNote(A4, 0.15, 5), 1600);
        } else if (step === 2) {
          this.playPianoNote(Am3, 0.3, 6);
          setTimeout(() => this.playPianoNote(E4, 0.15, 5), 400);
          setTimeout(() => this.playPianoNote(A4, 0.2, 5), 800);
          setTimeout(() => this.playPianoNote(C5, 0.15, 5), 1600);
        } else {
          this.playPianoNote(G3, 0.3, 6);
          setTimeout(() => this.playPianoNote(D4, 0.15, 5), 400);
          setTimeout(() => this.playPianoNote(G4, 0.2, 5), 800);
          setTimeout(() => this.playPianoNote(B4, 0.15, 5), 1600);
        }
      }
    };

    // Helper variable for compiler
    const Am3 = 110.00;

    // Trigger immediately
    playChordPattern();

    // Set interval based on mood
    const intervalTime = mood === "tense" ? 2000 : mood === "playful" ? 3500 : mood === "happy" ? 5000 : mood === "reunion" ? 5500 : mood === "melancholy" ? 6000 : 7000;
    
    this.pianoProgressionInterval = setInterval(playChordPattern, intervalTime);
  }

  private stopPianoProgression() {
    if (this.pianoProgressionInterval) {
      clearInterval(this.pianoProgressionInterval);
      this.pianoProgressionInterval = null;
    }
  }

  // --- TRANSITIONAL SOUND EFFECTS ---

  // Page turning effect (friction sweep)
  public playPageTurn() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.4; // 0.4 seconds
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    
    // Sweep the bandpass frequency to emulate page sliding
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.25);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.4);
    filter.Q.setValueAtTime(2.0, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noiseNode.start(now);
    noiseNode.stop(now + 0.4);
  }

  // Vintage clock ticking sound
  public playClockTick() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(1200, now);
    
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, now);
    filter.Q.setValueAtTime(8, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04); // very short tick

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Instagram vibration/ping notification
  public playInstagramNotification() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;

    // Soft triple chime
    const playChimeNode = (delay: number, pitch: number) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, now + delay);
      
      gain.gain.setValueAtTime(0, now + delay);
      gain.gain.linearRampToValueAtTime(0.12, now + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + delay);
      osc.stop(now + delay + 0.4);
    };

    // Soft, pleasant tri-tone chord (Instagram style)
    playChimeNode(0, 523.25);   // C5
    playChimeNode(0.08, 659.25); // E5
    playChimeNode(0.16, 783.99); // G5
  }

  // Bird chirp sweep
  public playBirdChirp() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    // Fast frequency sweep upwards
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(3200, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(2400, now + 0.14);
    osc.frequency.exponentialRampToValueAtTime(3600, now + 0.22);

    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.24);
  }

  // Chime trigger for interactive elements (candy jars/memory bubbles)
  public playChime(pitchIndex: number) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    // Pentatonic scale starting at G4
    const scale = [392.00, 440.00, 493.88, 587.33, 659.25, 783.99, 880.00, 987.77];
    const freq = scale[pitchIndex % scale.length];

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2000, now);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.3);
  }
}

// Export single shared instance (SSR safe)
export const audioSynth = typeof window !== "undefined" ? new CinematicAudio() : null;
