"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, AlertCircle } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter4Props {
  onNext: () => void;
}

const subtitles = [
  "Sixteen long years passed in the blink of an eye.",
  "Around 2020, I began searching for any trace of her.",
  "Looking through Instagram, Facebook, and ShareChat...",
  "But every search ended in silence. Nothing. Not found."
];

interface SearchLog {
  id: number;
  platform: string;
  query: string;
  status: "searching" | "failed";
}

export default function Chapter4({ onNext }: Chapter4Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [year, setYear] = useState(2010);
  const [clockAngle, setClockAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [searchLogs, setSearchLogs] = useState<SearchLog[]>([]);

  // Spin the clock and increment years
  useEffect(() => {
    if (subtitleIndex < 2) return;
    setIsSpinning(true);

    const duration = 5000; // 5 seconds spin
    const startYear = 2010;
    const endYear = 2026;
    const intervalTime = duration / (endYear - startYear);
    
    let currentYear = startYear;
    
    // Play faster clock ticks during spin
    const tickTimer = setInterval(() => {
      if (audioSynth) {
        audioSynth.playClockTick();
      }
    }, 150);

    const yearTimer = setInterval(() => {
      currentYear += 1;
      setYear(currentYear);
      setClockAngle(prev => prev + 180); // spin hands

      if (currentYear >= endYear) {
        clearInterval(yearTimer);
        clearInterval(tickTimer);
        setIsSpinning(false);
      }
    }, intervalTime);

    return () => {
      clearInterval(yearTimer);
      clearInterval(tickTimer);
    };
  }, [subtitleIndex]);

  // Search logs generator
  useEffect(() => {
    if (subtitleIndex < 2) return;
    
    const platforms = ["Instagram", "Facebook", "ShareChat"];
    let count = 0;

    const generateLog = () => {
      const platform = platforms[count % platforms.length];
      const logId = Date.now();
      
      // Add "Searching" log
      setSearchLogs(prev => [
        { id: logId, platform, query: "Cousin (Mardal)", status: "searching" },
        ...prev.slice(0, 4) // cap at 5 logs
      ]);

      // Set to "Failed" after 800ms
      setTimeout(() => {
        setSearchLogs(prev => 
          prev.map(log => log.id === logId ? { ...log, status: "failed" } : log)
        );
        if (audioSynth) {
          audioSynth.playClockTick(); // short negative alert beep/tick
        }
      }, 850);

      count++;
    };

    const searchTimer = setInterval(generateLog, 1500);

    return () => clearInterval(searchTimer);
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
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0D1B2A] text-[#778DA9] select-none">
      
      {/* Chapter Indicator */}
      <div className="p-8 z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-sm tracking-[0.25em] text-[#778DA9]/70 block"
        >
          CHAPTER IV
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl font-light italic mt-1 text-[#FFFDF8]/80"
        >
          The Lost Years
        </motion.h2>
      </div>

      {/* Main clock and search display panel */}
      <div className="chapter4-content relative flex-1 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-items-center px-8 z-10">
        
        {/* Left Side: Vintage Spinning Clock & Calendar Page */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-4 border-[#FFFDF8]/20 bg-[#060913]/40 flex items-center justify-center shadow-2xl">
            {/* Clock ticks/marks */}
            <div className="absolute inset-2 border border-[#FFFDF8]/5 rounded-full"></div>
            
            {/* Clock Center Pin */}
            <div className="absolute w-3 h-3 bg-[#E29578] rounded-full z-30"></div>

            {/* Hours Hand */}
            <div 
              className="absolute bottom-1/2 left-1/2 w-1 h-[30%] sm:h-14 bg-[#FFFDF8]/80 origin-bottom rounded-full z-20"
              style={{ 
                transform: `translateX(-50%) rotate(${clockAngle}deg)`,
                transition: isSpinning ? "transform 0.15s linear" : "transform 1s ease-out"
              }}
            ></div>

            {/* Minutes Hand */}
            <div 
              className="absolute bottom-1/2 left-1/2 w-0.5 h-[40%] sm:h-20 bg-[#7C5CFC] origin-bottom rounded-full z-20"
              style={{ 
                transform: `translateX(-50%) rotate(${clockAngle * 12}deg)`,
                transition: isSpinning ? "transform 0.15s linear" : "transform 1s ease-out"
              }}
            ></div>

            {/* Roman Numerals */}
            <span className="absolute top-2 sm:top-3 font-serif text-[8px] sm:text-[10px] text-[#FFFDF8]/40">XII</span>
            <span className="absolute right-3 sm:right-4 font-serif text-[8px] sm:text-[10px] text-[#FFFDF8]/40">III</span>
            <span className="absolute bottom-2 sm:bottom-3 font-serif text-[8px] sm:text-[10px] text-[#FFFDF8]/40">VI</span>
            <span className="absolute left-3 sm:left-4 font-serif text-[8px] sm:text-[10px] text-[#FFFDF8]/40">IX</span>
          </div>

          {/* Calendar Plate showing years */}
          <div className="bg-[#FFFDF8] text-[#0D1B2A] rounded-lg shadow-xl px-5 py-1.5 sm:px-6 sm:py-2 border-t-8 border-[#7C5CFC] text-center min-w-[100px] sm:min-w-[120px]">
            <span className="block font-sans text-[8px] sm:text-[10px] tracking-widest text-[#778DA9] uppercase font-bold">YEAR</span>
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider">{year}</span>
          </div>
        </div>

        {/* Right Side: Mock Social Media Searches */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] bg-[#060913]/60 border border-[#FFFDF8]/10 rounded-xl p-4 sm:p-5 shadow-2xl min-h-[180px] sm:min-h-[220px] flex flex-col justify-between">
          <div className="flex items-center gap-2 border-b border-[#FFFDF8]/10 pb-2 sm:pb-3 mb-2 sm:mb-3 text-[#FFFDF8]">
            <Search className="w-4 h-4 text-[#7C5CFC]" />
            <span className="font-sans text-xs tracking-wider uppercase font-semibold">Social Registry Logs</span>
          </div>

          {/* Searching lines list */}
          <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
            <AnimatePresence>
              {searchLogs.length > 0 ? (
                searchLogs.map(log => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-between items-center bg-[#0D1B2A]/50 border border-[#FFFDF8]/5 rounded p-2 text-xs"
                  >
                    <div>
                      <span className="text-[#7C5CFC] font-semibold">[{log.platform}]</span>
                      <span className="text-[#FFFDF8]/60 ml-2">"{log.query}"</span>
                    </div>
                    {log.status === "searching" ? (
                      <span className="text-[#FFD166] animate-pulse">Searching...</span>
                    ) : (
                      <div className="flex items-center gap-1 text-[#E29578]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Not Found</span>
                      </div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40 py-6">
                  <Search className="w-8 h-8 mb-2 stroke-1" />
                  <p className="font-sans text-[10px] tracking-wider uppercase">Pending Search Request</p>
                </div>
              )}
            </AnimatePresence>
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
                className="font-serif text-lg md:text-2xl text-[#778DA9] font-light leading-relaxed max-w-2xl"
              >
                "{subtitles[subtitleIndex]}"
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <p className="font-serif text-lg md:text-2xl text-[#E29578] font-semibold italic">
                  "No matches... search after search."
                </p>
                <p className="font-sans text-xs tracking-widest text-[#778DA9]/60 uppercase mt-2">
                  Searching for a lost memory.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          {!isCompleted ? (
            <button
              onClick={handleNextSubtitle}
              className="px-6 py-2.5 rounded-full border border-[#778DA9]/20 hover:border-[#778DA9]/50 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#4833a6] hover:shadow-lg hover:shadow-[#7C5CFC]/25 text-white font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#7C5CFC]/20"
            >
              <span>To Chapter V</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-height: 700px) {
          .chapter4-content {
            gap: 0.75rem !important;
          }
          .min-h-\\[180px\\] {
            min-height: 140px !important;
          }
          .py-1\\.5 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
        }
        @media (max-height: 600px) {
          .chapter4-content {
            transform: scale(0.85);
            margin-top: -15px;
            margin-bottom: -15px;
          }
        }
        @media (max-height: 500px) {
          .chapter4-content {
            transform: scale(0.68);
            margin-top: -25px;
            margin-bottom: -25px;
          }
        }
      `}</style>
    </div>
  );
}
