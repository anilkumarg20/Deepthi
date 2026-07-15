"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter6Props {
  onNext: () => void;
}

const subtitles = [
  "Inside our hearts, we preserve a quiet room of memories.",
  "Each memory is a glowing bubble of a time that will never return.",
  "Click each bubble to look back at the pieces we shared..."
];

interface Memory {
  id: number;
  title: string;
  emoji: string;
  description: string;
  color: string;
}

const memoriesList: Memory[] = [
  {
    id: 0,
    title: "Ammamma's House",
    emoji: "🏡",
    description: "The cozy clay-tile roof cottage filled with the aroma of woodsmoke and freshly ground spices, where summer days began with warm milk and Ammamma's stories.",
    color: "from-amber-200/50 to-orange-300/30"
  },
  {
    id: 1,
    title: "The Gravel Road",
    emoji: "🛤️",
    description: "Walking hand-in-hand along the endless red-soil pathways, kicking stones, racing each other, and watching wild sunflowers bend under the afternoon breeze.",
    color: "from-yellow-200/50 to-amber-300/30"
  },
  {
    id: 2,
    title: "The Village Shop",
    emoji: "🍬",
    description: "Countless minutes spent pointing at big glass jars, choosing orange candy logs and sweet mint chips, counting coins with serious child-like focus.",
    color: "from-emerald-200/50 to-teal-300/30"
  },
  {
    id: 3,
    title: "Helping Elders",
    emoji: "🧺",
    description: "Carrying small straw baskets of freshly plucked garden greens for Ammamma, feeling so proud of our little contributions to the elders.",
    color: "from-blue-200/50 to-cyan-300/30"
  },
  {
    id: 4,
    title: "Running Tree Slopes",
    emoji: "🌳",
    description: "Climbing low mango tree branches, sitting in the cool shade, sharing secrets, and laughing out loud without a single care in the entire world.",
    color: "from-purple-200/50 to-pink-300/30"
  },
  {
    id: 5,
    title: "Summer Evenings",
    emoji: "🌅",
    description: "Sitting on the porch steps watching the orange sun slip below the hills, welcoming fireflies that danced around us like floating sparks of gold.",
    color: "from-rose-200/50 to-red-300/30"
  }
];

export default function Chapter6({ onNext }: Chapter6Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);
  const [visitedMemories, setVisitedMemories] = useState<number[]>([]);

  const handleNextSubtitle = () => {
    if (subtitleIndex < subtitles.length - 1) {
      setSubtitleIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBubbleClick = (memory: Memory) => {
    setActiveMemory(memory);
    if (!visitedMemories.includes(memory.id)) {
      setVisitedMemories(prev => [...prev, memory.id]);
    }
    
    // Play sweet pentatonic chime sound index-based
    if (audioSynth) {
      audioSynth.playChime(memory.id);
    }
  };

  const handleProceed = () => {
    if (audioSynth) {
      audioSynth.playPageTurn();
    }
    onNext();
  };

  // Check if user has viewed at least 3 memories to proceed
  const canProceed = visitedMemories.length >= 3;

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0A0D14] text-[#FFFDF8]/70 select-none">
      
      {/* Stars/Fireflies floating in room background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-slate-900 to-black -z-10"></div>

      {/* Chapter Indicator */}
      <div className="p-8 z-10 flex justify-between items-start">
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-sm tracking-[0.25em] text-[#E29578] block"
          >
            CHAPTER VI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl font-light italic mt-1 text-[#FFFDF8]"
          >
            The Memory Room
          </motion.h2>
        </div>

        {/* Counter of visited memories */}
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-sans text-xs bg-white/5 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>Memories explored: {visitedMemories.length}/6</span>
          </motion.div>
        )}
      </div>

      {/* Floating Bubbles Gallery */}
      <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center p-6 z-10">
        
        {/* Main instructions overlay */}
        {isCompleted && visitedMemories.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            className="absolute top-4 font-sans text-xs tracking-wider uppercase text-[#FFFDF8]/50 animate-pulse text-center"
          >
            👉 Click on any floating bubble to open a memory
          </motion.p>
        )}

        {/* Floating Bubble Layout (CSS Grid/Flex) */}
        {isCompleted ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-10 w-full max-w-4xl justify-items-center">
            {memoriesList.map((memory, index) => {
              const isVisited = visitedMemories.includes(memory.id);
              return (
                <motion.div
                  key={memory.id}
                  onClick={() => handleBubbleClick(memory)}
                  whileHover={{ scale: 1.06 }}
                  className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center cursor-pointer border border-white/10 shadow-2xl backdrop-blur-md bg-gradient-to-br ${memory.color} transition-all duration-300 hover:border-white/40 ${
                    isVisited ? "shadow-[#FFD166]/10 border-[#FFD166]/30" : ""
                  }`}
                  style={{
                    // Gentle independent float offsets
                    transform: `translateY(${Math.sin((Date.now() / 1500) + index) * 6}px)`,
                    animation: `float-bubble-${index} ${4 + index * 0.8}s infinite ease-in-out`
                  }}
                >
                  {/* Glass highlights */}
                  <div className="absolute top-2 left-4 w-6 h-3 bg-white/25 rounded-full blur-[1px] rotate-[-15deg]"></div>
                  
                  <span className="text-xl sm:text-3xl mb-1">{memory.emoji}</span>
                  <span className="font-serif text-[9px] sm:text-xs text-center font-semibold text-white/80 max-w-[85%] leading-tight truncate">
                    {memory.title}
                  </span>

                  {isVisited && (
                    <div className="absolute -bottom-1 -right-1 bg-[#FFD166] text-[#0A0D14] rounded-full p-0.5 shadow-md">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Text reading placeholder */
          <div className="text-center max-w-md opacity-30 italic font-serif text-lg">
            "We lived, we played, and we forgot to write them down... but they remained."
          </div>
        )}
      </div>

      {/* Memory Polaroid Modal Overlay */}
      <AnimatePresence>
        {activeMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-55 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-[#FFFDF8] text-[#6F4E37] w-full max-w-xs sm:max-w-md rounded-2xl p-4 sm:p-6 shadow-2xl relative border-y-[6px] border-[#FFD166] flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setActiveMemory(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-200/50 text-[#6F4E37]/60 hover:text-[#6F4E37] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-32 sm:h-44 rounded-lg overflow-hidden mb-3 sm:mb-4 border border-[#6F4E37]/10 relative shadow-inner">
                <img src="/deephi.jpg" alt="Memory" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/45 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-sans tracking-widest uppercase">
                  Memory Photo
                </div>
              </div>

              <div className="text-2xl mb-1 flex items-center justify-center gap-2">
                <span>{activeMemory.emoji}</span>
                <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-[#6F4E37]">{activeMemory.title}</span>
              </div>
              
              <div className="w-12 h-[1px] bg-[#6F4E37]/20 my-3"></div>
              
              <p className="font-cormorant text-sm sm:text-base md:text-lg leading-relaxed text-[#6F4E37]/90 px-2 italic">
                "{activeMemory.description}"
              </p>

              <button
                onClick={() => setActiveMemory(null)}
                className="mt-4 sm:mt-6 px-6 py-2 bg-[#6F4E37] text-[#FFFDF8] rounded-full text-xs font-sans tracking-widest uppercase hover:bg-[#483424] transition-all cursor-pointer shadow-md"
              >
                Close Memory
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                className="font-serif text-lg md:text-2xl text-[#FFFDF8]/70 font-light leading-relaxed max-w-2xl"
              >
                "{subtitles[subtitleIndex]}"
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <p className="font-serif text-lg md:text-2xl text-[#FFD166] font-semibold italic">
                  {!canProceed 
                    ? "Explore at least 3 memory bubbles to unlock the end." 
                    : "Every memory of you has been beautifully preserved."}
                </p>
                <p className="font-sans text-xs tracking-widest text-[#FFFDF8]/50 uppercase mt-2">
                  Memories explored: {visitedMemories.length}/6
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
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <motion.button
              disabled={!canProceed}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: canProceed ? 1 : 0.9, opacity: canProceed ? 1 : 0.4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={handleProceed}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFD166] to-[#E29578] hover:shadow-lg text-[#0A0D14] font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#FFD166]/30 disabled:cursor-not-allowed"
            >
              <span>To Final Chapter</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-bubble-0 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-bubble-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float-bubble-2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float-bubble-3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float-bubble-4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes float-bubble-5 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-11px); } }
      `}</style>
    </div>
  );
}
