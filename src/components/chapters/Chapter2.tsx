"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter2Props {
  onNext: () => void;
}

const subtitles = [
  "We would run down the gravel road to the village shop...",
  "Clinging to coins, buying candies that felt like absolute treasures.",
  "Sometimes we'd help the elders, carrying small baskets of greens.",
  "Simple, innocent days... where time stood completely still."
];

interface FloatingFlower {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function Chapter2({ onNext }: Chapter2Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [flowers, setFlowers] = useState<FloatingFlower[]>([]);
  const [bounceJars, setBounceJars] = useState([false, false, false, false]);

  const handleNextSubtitle = () => {
    if (subtitleIndex < subtitles.length - 1) {
      setSubtitleIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleJarClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    // Play sound synth chime
    if (audioSynth) {
      audioSynth.playChime(index);
    }

    // Trigger bounce animation
    setBounceJars(prev => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
    setTimeout(() => {
      setBounceJars(prev => {
        const copy = [...prev];
        copy[index] = false;
        return copy;
      });
    }, 500);

    // Spawn floating flower particles at click location
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left + rect.width / 2;
    const clickY = e.clientY - rect.top;

    const newFlowers = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() - 0.5) * 30,
      y: clickY - 20,
      color: ["#A8D5BA", "#FFD166", "#E29578", "#7C5CFC"][Math.floor(Math.random() * 4)],
    }));

    setFlowers(prev => [...prev, ...newFlowers]);

    // Cleanup old flower particles
    setTimeout(() => {
      setFlowers(prev => prev.filter(f => !newFlowers.includes(f)));
    }, 2000);
  };

  const handleProceed = () => {
    if (audioSynth) {
      audioSynth.playPageTurn();
    }
    onNext();
  };

  const candyJars = [
    { name: "Lemon Drops", color: "from-yellow-400 to-amber-500" },
    { name: "Mint Swirls", color: "from-emerald-400 to-teal-500" },
    { name: "Rose Petals", color: "from-rose-400 to-red-500" },
    { name: "Blue Glaze", color: "from-cyan-400 to-blue-500" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFF8EE] via-[#FFF8EE] to-[#FFD166]/30 text-[#6F4E37] select-none">
      
      {/* Floating flower particle layers */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {flowers.map(flower => (
          <motion.div
            key={flower.id}
            initial={{ opacity: 1, scale: 0.2, y: flower.y, x: flower.x }}
            animate={{ 
              opacity: 0, 
              scale: 1.2, 
              y: flower.y - 120 - Math.random() * 80, 
              x: flower.x + (Math.random() - 0.5) * 60,
              rotate: Math.random() * 360 
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-4 h-4 flex items-center justify-center"
            style={{ color: flower.color }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Chapter Indicator */}
      <div className="p-8 z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-sm tracking-[0.25em] text-[#6F4E37]/75 block"
        >
          CHAPTER II
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl font-light italic mt-1 text-[#6F4E37]"
        >
          The Village Corner Shop
        </motion.h2>
      </div>

      {/* Interactive Shop Layout */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-4">
        
        {/* Floating Instruction overlay */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="font-sans text-xs tracking-wider uppercase mb-6 text-[#6F4E37]/60 text-center animate-pulse"
        >
          👇 Tap on the candy jars to trigger the musical chimes
        </motion.p>

        {/* The Wooden Shelves and Candy Jars */}
        <div className="shop-shelf relative bg-[#ebe0ce] border-4 border-[#6F4E37]/60 rounded-xl p-6 shadow-2xl flex flex-col items-center min-w-[280px] sm:min-w-[400px] transition-transform duration-300">
          {/* Top shelf grid */}
          <div className="grid grid-cols-4 gap-4 w-full justify-items-center pb-2 z-10">
            {candyJars.map((jar, index) => (
              <motion.div
                key={index}
                onClick={(e) => handleJarClick(index, e)}
                whileHover={{ scale: 1.08 }}
                animate={bounceJars[index] ? { y: [0, -25, 0] } : { y: 0 }}
                transition={bounceJars[index] ? { duration: 0.5, ease: "easeOut" } : {}}
                className="relative w-12 h-20 sm:w-16 sm:h-24 bg-white/70 hover:bg-white/90 border-2 border-[#6F4E37]/50 rounded-t-2xl rounded-b-lg shadow-md cursor-pointer flex flex-col justify-between items-center p-1"
              >
                {/* Jar Lid */}
                <div className="w-[110%] h-3 bg-[#6F4E37]/75 rounded-md -mt-2 border-b border-[#FFF8EE]/20 shadow-sm"></div>
                {/* Jar Candies (glowing colors inside) */}
                <div className={`w-[90%] flex-1 bg-gradient-to-t ${jar.color} rounded-md opacity-90 shadow-inner flex items-center justify-center`}>
                  {/* Candies texturing */}
                  <div className="grid grid-cols-2 gap-0.5 opacity-60">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-[8px] font-sans font-bold text-[#6F4E37]/60 tracking-tighter truncate max-w-full">
                  {jar.name}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shelves support plank */}
          <div className="w-[110%] h-4 bg-[#6F4E37] rounded-md shadow-lg border-b border-[#FFF8EE]/20 -mx-4 z-20"></div>

          {/* Little Shop Counter Decoration */}
          <div className="w-full flex justify-between px-2 pt-3 text-[10px] sm:text-xs font-serif text-[#6F4E37]/70 italic font-medium z-10">
            <span>✨ Jar Chimes</span>
            <span>Est. 1998</span>
          </div>
        </div>

        {/* Playful background silhouettes (Kids running past) */}
        <div className="absolute bottom-0 w-full h-12 pointer-events-none z-10 overflow-hidden">
          {/* Silhouettes path */}
          <svg viewBox="0 0 100 20" className="w-[150px] opacity-15 fill-[#6F4E37] absolute bottom-0 left-[20%] animate-run-kids">
            <path d="M 0 10 Q 5 5 10 10 Q 15 15 20 10" />
          </svg>
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
                className="font-serif text-lg md:text-2xl text-[#6F4E37] font-light leading-relaxed max-w-2xl"
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
                  "No worries, no hurry, just laughter."
                </p>
                <p className="font-sans text-xs tracking-widest text-[#6F4E37]/60 uppercase mt-2">
                  Memories of beautiful innocence.
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
              className="px-6 py-2.5 rounded-full border border-[#6F4E37]/25 hover:border-[#6F4E37]/50 bg-[#6F4E37]/5 hover:bg-[#6F4E37]/10 text-[#6F4E37] font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6F4E37] to-[#483424] hover:shadow-lg hover:shadow-[#6F4E37]/25 text-[#FFF8EE] font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#6F4E37]/20"
            >
              <span>To Chapter III</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Styled inline animations for custom components */}
      <style jsx global>{`
        @keyframes run-kids {
          0% { transform: translateX(-150px) scaleX(1); }
          50% { transform: translateX(450px) scaleX(1); }
          51% { transform: translateX(450px) scaleX(-1); }
          100% { transform: translateX(-150px) scaleX(-1); }
        }
        .animate-run-kids {
          animation: run-kids 24s infinite linear;
        }
      `}</style>
      <style jsx>{`
        @media (max-height: 700px) {
          .shop-shelf {
            transform: scale(0.85);
          }
        }
        @media (max-height: 600px) {
          .shop-shelf {
            transform: scale(0.75);
            margin-bottom: -10px;
          }
        }
        @media (max-height: 500px) {
          .shop-shelf {
            transform: scale(0.6);
            margin-bottom: -20px;
          }
        }
      `}</style>
    </div>
  );
}
