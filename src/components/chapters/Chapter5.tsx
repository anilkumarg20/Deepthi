"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter5Props {
  onNext: () => void;
}

const subtitles = [
  "July 7, 2026.",
  "A quiet evening, typing her name once again...",
  "And suddenly, a profile loaded. A picture, a name. It was her.",
  "I sent a message. And the biggest surprise of all...",
  "You remembered me too. Just as I remembered you."
];

export default function Chapter5({ onNext }: Chapter5Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Trigger Instagram notification chime on step 2
  useEffect(() => {
    if (subtitleIndex === 2) {
      setTimeout(() => {
        setShowNotification(true);
        if (audioSynth) {
          audioSynth.playInstagramNotification();
        }
      }, 800);
    }
    if (subtitleIndex === 3) {
      setShowNotification(false);
      setShowProfile(true);
    }
  }, [subtitleIndex]);

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
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#060913] text-[#FFFDF8] select-none">
      
      {/* Aurora Purple ambient light behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#7C5CFC]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* Chapter Indicator */}
      <div className="p-8 z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-sm tracking-[0.25em] text-[#7C5CFC]/80 block"
        >
          CHAPTER V
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl font-light italic mt-1 text-[#FFFDF8]"
        >
          The July Reunion
        </motion.h2>
      </div>

      {/* Center Layout: Notification Popups / Profile Reveals */}
      <div className="relative flex-1 w-full max-w-lg mx-auto flex items-center justify-center p-6 z-10">
        <AnimatePresence>
          {/* Step 2 Notification Pop-up */}
          {showNotification && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-sm bg-gradient-to-r from-[#0d1b2a] to-[#132238] border border-[#7C5CFC]/40 rounded-2xl p-5 shadow-2xl flex items-center gap-4 relative overflow-hidden"
            >
              {/* Instagram colored line indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8a3ab9] via-[#e95950] to-[#fccc63]"></div>
              
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#fccc63] via-[#e95950] to-[#8a3ab9] p-[2px] flex items-center justify-center shadow-lg">
                <div className="w-full h-full rounded-full bg-[#132238] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white animate-pulse">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs font-bold text-white tracking-wide">Instagram</span>
                  <span className="font-sans text-[10px] text-[#778DA9]">Just now</span>
                </div>
                 <h4 className="font-sans text-sm font-semibold text-white mt-0.5">New Request Accepted</h4>
                <p className="font-sans text-xs text-[#778DA9] mt-0.5">You are now connected with deephi_***</p>
              </div>
            </motion.div>
          )}

          {/* Step 3 & 4: Profile Details Reveal */}
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-sm bg-[#0d1b2a]/70 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center backdrop-blur-md"
            >
              {/* Avatar picture circle */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[#7C5CFC] to-[#FFD166] p-1 flex items-center justify-center mb-4 shadow-xl shadow-[#7C5CFC]/10">
                <div className="w-full h-full rounded-full bg-[#060913] flex items-center justify-center overflow-hidden">
                  <img src="/deephi.jpg" alt="Deephi" className="w-full h-full object-cover rounded-full" />
                </div>
                {/* Heart badge */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#E29578] rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-3.5 h-3.5 fill-white stroke-white animate-pulse" />
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-white tracking-wide">Deephi</h3>
              <p className="font-sans text-xs text-[#7C5CFC] tracking-wider uppercase mt-1">Found after 16 years</p>
              
              {/* Text Bubble mock */}
              <div className="mt-5 w-full bg-[#060913]/55 border border-white/5 rounded-xl p-3 text-left">
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest font-semibold mb-1">Direct Message</p>
                <p className="font-serif text-sm italic text-[#FFFDF8]/90">"Of course I remember you, Bava! How could I ever forget our childhood?"</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtitles Interaction Box */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center p-8 pb-16 z-40 text-center">
        <div className="h-28 flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="font-serif text-lg md:text-2xl text-[#FFFDF8]/80 font-light leading-relaxed max-w-2xl"
            >
              "{subtitles[subtitleIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          {!isCompleted ? (
            <button
              onClick={handleNextSubtitle}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#E29578] hover:shadow-lg hover:shadow-[#7C5CFC]/25 text-white font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#7C5CFC]/20"
            >
              <span>To Chapter VI</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
