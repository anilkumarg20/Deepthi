"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { audioSynth } from "@/utils/audio";
import CustomCursor from "@/components/CustomCursor";

// Chapter Imports
import Opening from "@/components/chapters/Opening";
import Chapter1 from "@/components/chapters/Chapter1";
import Chapter2 from "@/components/chapters/Chapter2";
import Chapter3 from "@/components/chapters/Chapter3";
import Chapter4 from "@/components/chapters/Chapter4";
import Chapter5 from "@/components/chapters/Chapter5";
import Chapter6 from "@/components/chapters/Chapter6";
import FinalChapter from "@/components/chapters/FinalChapter";

type ChapterKey =
  | "opening"
  | "chapter1"
  | "chapter2"
  | "chapter3"
  | "chapter4"
  | "chapter5"
  | "chapter6"
  | "final";

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<ChapterKey>("opening");
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioStarted, setIsAudioStarted] = useState(false);

  useEffect(() => {
    // Transition soundscapes when chapter changes
    if (audioSynth && isAudioStarted) {
      audioSynth.transitionAmbientTo(activeChapter);
    }
  }, [activeChapter, isAudioStarted]);

  // Global sound toggle
  const toggleMute = () => {
    if (!audioSynth) return;
    audioSynth.init();
    const mutedState = audioSynth.toggleMute();
    setIsMuted(mutedState);
    setIsAudioStarted(true);
  };

  const handleStartStory = () => {
    setIsAudioStarted(true);
    if (audioSynth) {
      audioSynth.init();
      audioSynth.resume();
    }
    setActiveChapter("chapter1");
  };

  const handleRestart = () => {
    setActiveChapter("opening");
    if (audioSynth) {
      audioSynth.transitionAmbientTo("opening");
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#060913]">
      {/* Immersive Firefly custom cursor */}
      <CustomCursor />

      {/* Global Mute/Unmute audio controller */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        {/* Soft hint text */}
        <AnimatePresence>
          {!isAudioStarted && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.6, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/50 hidden sm:inline"
            >
              Sound Recommended
            </motion.span>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full border border-white/10 bg-[#060913]/30 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-300 shadow-lg cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Cinematic Chapter Manager */}
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          {activeChapter === "opening" && (
            <motion.div
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Opening onNext={handleStartStory} />
            </motion.div>
          )}

          {activeChapter === "chapter1" && (
            <motion.div
              key="chapter1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter1 onNext={() => setActiveChapter("chapter2")} />
            </motion.div>
          )}

          {activeChapter === "chapter2" && (
            <motion.div
              key="chapter2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter2 onNext={() => setActiveChapter("chapter3")} />
            </motion.div>
          )}

          {activeChapter === "chapter3" && (
            <motion.div
              key="chapter3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter3 onNext={() => setActiveChapter("chapter4")} />
            </motion.div>
          )}

          {activeChapter === "chapter4" && (
            <motion.div
              key="chapter4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter4 onNext={() => setActiveChapter("chapter5")} />
            </motion.div>
          )}

          {activeChapter === "chapter5" && (
            <motion.div
              key="chapter5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter5 onNext={() => setActiveChapter("chapter6")} />
            </motion.div>
          )}

          {activeChapter === "chapter6" && (
            <motion.div
              key="chapter6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Chapter6 onNext={() => setActiveChapter("final")} />
            </motion.div>
          )}

          {activeChapter === "final" && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <FinalChapter onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
