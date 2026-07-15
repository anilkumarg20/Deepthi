"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter1Props {
  onNext: () => void;
}

const subtitles = [
  "Every year, when the summer holidays began...",
  "I would pack my bags and travel to our Ammamma's village.",
  "And there she was... my cousin, my constant companion.",
  "We used to walk the dusty tracks, laughing under the golden sun."
];

export default function Chapter1({ onNext }: Chapter1Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Play bird chirps dynamically on mount
    const chirpInterval = setInterval(() => {
      if (audioSynth) {
        audioSynth.playBirdChirp();
      }
    }, 4000);

    return () => clearInterval(chirpInterval);
  }, []);

  const handleNextSubtitle = () => {
    if (subtitleIndex < subtitles.length - 1) {
      setSubtitleIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleProceed = () => {
    if (audioSynth) {
      audioSynth.playPageTurn();
    }
    onNext();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#132238] via-[#8B5F65] to-[#FFD166]/50 select-none">
      
      {/* Sky Ambient Layer: Sunrise glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#FFD166]/30 via-transparent to-transparent pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]"></div>

      {/* Clouds Layer */}
      <div className="absolute top-12 left-0 w-full h-40 pointer-events-none opacity-40">
        <div className="absolute top-0 w-64 h-16 bg-white/30 rounded-full blur-xl animate-cloud-slow"></div>
        <div className="absolute top-10 right-10 w-96 h-24 bg-white/20 rounded-full blur-2xl animate-cloud-mid"></div>
      </div>

      {/* Birds flock flying in background */}
      <div className="absolute top-20 left-1/4 w-full h-20 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 20" className="w-40 animate-flock">
          <path d="M 0 10 Q 5 5 10 10 Q 15 15 20 10" fill="none" stroke="currentColor" strokeWidth="1" className="stroke-[#FFFDF8]" />
          <path d="M 25 15 Q 30 10 35 15 Q 40 20 45 15" fill="none" stroke="currentColor" strokeWidth="1" className="stroke-[#FFFDF8]" />
          <path d="M 50 8 Q 55 3 60 8 Q 65 13 70 8" fill="none" stroke="currentColor" strokeWidth="1" className="stroke-[#FFFDF8]" />
        </svg>
      </div>

      {/* Chapter Indicator */}
      <div className="p-8 z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-sm tracking-[0.25em] text-[#FFFDF8]/70 block"
        >
          CHAPTER I
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl font-light italic mt-1 text-[#FFFDF8]"
        >
          Ammamma's Village
        </motion.h2>
      </div>

      {/* Middle Silhouettes Layout with Parallax Depth */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none flex items-end">
        {/* Layer 3: Distant trees */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-35 bg-repeat-x bg-[bottom_left_30px] z-10">
          <svg viewBox="0 0 1440 200" className="w-full h-full fill-[#45283c]">
            <path d="M0,160 Q200,120 400,160 T800,150 T1200,160 T1440,140 L1440,200 L0,200 Z" />
          </svg>
        </div>

        {/* Layer 2: Midground Trees & Pathway */}
        <div className="absolute bottom-0 left-0 w-full h-[85%] opacity-60 z-20">
          <svg viewBox="0 0 1440 200" className="w-full h-full fill-[#2c172d]">
            <path d="M0,170 Q300,140 600,170 T1200,160 T1440,180 L1440,200 L0,200 Z" />
            {/* Draw a few tree silhouettes */}
            <circle cx="200" cy="120" r="35" />
            <circle cx="850" cy="110" r="45" />
            <circle cx="1200" cy="130" r="30" />
          </svg>
        </div>

        {/* Layer 1: Foreground and Two Walking Children Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-[70%] z-30">
          <svg viewBox="0 0 1440 200" className="w-full h-full fill-[#130722]">
            <path d="M0,185 Q360,170 720,185 T1440,185 L1440,200 L0,200 Z" />
          </svg>
          
          {/* Animated Silhouettes of Children Walking */}
          <div className="absolute bottom-[10px] left-[15%] md:left-[25%] flex items-end gap-5 animate-walk">
            {/* Boy Silhouette (Anil as child) */}
            <svg viewBox="0 0 24 48" className="w-8 h-16 fill-[#130722]">
              <circle cx="12" cy="8" r="4" />
              <path d="M8,13 A 2,2 0 0,0 6,15 L6,26 A 1,1 0 0,0 7,27 L10,27 L10,46 A 1.5,1.5 0 0,0 12,47.5 A 1.5,1.5 0 0,0 13.5,46 L13.5,27 L16.5,27 L16.5,46 A 1.5,1.5 0 0,0 18,47.5 A 1.5,1.5 0 0,0 19.5,46 L19.5,26 L17.5,15 A 2,2 0 0,0 15.5,13 Z" />
            </svg>
            {/* Girl Silhouette (Cousin) */}
            <svg viewBox="0 0 24 48" className="w-7 h-15 fill-[#130722] transform translate-y-[2px]">
              <circle cx="12" cy="9" r="3.8" />
              <path d="M9,13 L6,25 A 1,1 0 0,0 7,26 L10,26 L8.5,35 L10.5,46 A 1.5,1.5 0 0,0 12.5,47.2 A 1.5,1.5 0 0,0 14,46 L12.5,35 L14.5,26 L17.5,26 A 1,1 0 0,0 18.5,25 L15.5,13 Z" />
              {/* Ponytail / hair sweep to identify as girl */}
              <path d="M9,7 Q4,10 7,13" stroke="#130722" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtitles Interaction Box */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center p-8 pb-16 z-40 text-center">
        <div className="h-28 flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.p
                key={subtitleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="font-serif text-lg md:text-2xl text-[#FFFDF8] font-light leading-relaxed max-w-2xl"
              >
                "{subtitles[subtitleIndex]}"
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <p className="font-serif text-lg md:text-2xl text-[#FFD166] font-medium italic">
                  "Walk together... Run around... Laugh..."
                </p>
                <p className="font-sans text-xs tracking-widest text-[#FFFDF8]/50 uppercase mt-2">
                  Memories of beautiful summer holidays.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button: Next subtitle or Next Chapter */}
        <div className="mt-6">
          {!isCompleted ? (
            <button
              onClick={handleNextSubtitle}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={handleProceed}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFD166] to-[#E29578] hover:shadow-lg hover:shadow-[#FFD166]/20 text-[#130722] font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#FFD166]/30"
            >
              <span>To Chapter II</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Styled inline animations for custom components */}
      <style jsx global>{`
        @keyframes walk {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-4px) translateX(2px); }
        }
        .animate-walk {
          animation: walk 1.8s infinite ease-in-out;
        }
        @keyframes cloud-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(50px); }
        }
        @keyframes cloud-mid {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-40px); }
        }
        .animate-cloud-slow {
          animation: cloud-slow 25s infinite ease-in-out;
        }
        .animate-cloud-mid {
          animation: cloud-mid 20s infinite ease-in-out;
        }
        @keyframes flock {
          0% { transform: translate(-30px, 0px) scale(0.9); }
          50% { transform: translate(30px, -15px) scale(1); }
          100% { transform: translate(-30px, 0px) scale(0.9); }
        }
        .animate-flock {
          animation: flock 16s infinite ease-in-out;
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.2s infinite;
        }
      `}</style>
    </div>
  );
}
