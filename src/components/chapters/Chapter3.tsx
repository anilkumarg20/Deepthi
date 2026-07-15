"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { audioSynth } from "@/utils/audio";

interface Chapter3Props {
  onNext: () => void;
}

const subtitles = [
  "But childhood is a brief, fleeting season...",
  "Soon, life shifted its tides. We grew up.",
  "I was sent away to a boarding school, far from the village.",
  "Our Ammamma passed away... and our visits stopped.",
  "Our paths parted, walking in opposite directions. And then, silence."
];

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotSpeed: number;
}

interface Raindrop {
  x: number;
  y: number;
  length: number;
  speed: number;
}

export default function Chapter3({ onNext }: Chapter3Props) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Clock tick interval
    const tickInterval = setInterval(() => {
      if (audioSynth) {
        audioSynth.playClockTick();
      }
    }, 1500);

    // Canvas falling leaves & rain
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize leaves
    const leaves: Leaf[] = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight,
      size: Math.random() * 8 + 6,
      speedY: 1 + Math.random() * 2,
      speedX: -1 + Math.random() * 2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.05,
    }));

    // Initialize rain
    const rain: Raindrop[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      length: 15 + Math.random() * 15,
      speed: 10 + Math.random() * 8,
    }));

    let animId: number;
    const draw = () => {
      // Dark slate rainy blue bg
      ctx.fillStyle = "rgba(15, 23, 42, 0.4)"; // overlay sweep for trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render rain
      ctx.strokeStyle = "rgba(119, 141, 169, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      rain.forEach(drop => {
        ctx.beginPath();
        // Diagonal rain fall
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 3, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= 1.5; // slight wind push

        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
        }
      });

      // Render falling leaves (brown/autumn rust colors)
      ctx.fillStyle = "rgba(111, 78, 55, 0.65)"; // Leaf color
      leaves.forEach(leaf => {
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        
        // Draw standard leaf path
        ctx.beginPath();
        ctx.ellipse(0, 0, leaf.size, leaf.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Update physics
        leaf.y += leaf.speedY;
        leaf.x += leaf.speedX + Math.sin(leaf.y * 0.02) * 0.5; // fluttering wave
        leaf.rotation += leaf.rotSpeed;

        if (leaf.y > canvas.height + 20) {
          leaf.y = -20;
          leaf.x = Math.random() * canvas.width;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(tickInterval);
      cancelAnimationFrame(animId);
    };
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
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0F172A] text-[#778DA9] select-none">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10" />

      {/* Chapter Indicator */}
      <div className="p-8 z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-sm tracking-[0.25em] text-[#778DA9]/70 block"
        >
          CHAPTER III
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl font-light italic mt-1 text-[#FFFDF8]/80"
        >
          The Parting Ways
        </motion.h2>
      </div>

      {/* Parting Silhouettes & Hostel */}
      <div className="relative flex-1 flex flex-col items-center justify-end">
        {/* Cold Boarding School Silhouette in the fog */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute bottom-16 w-[70%] max-w-[400px] aspect-video border-b-2 border-[#778DA9]/20"
        >
          <svg viewBox="0 0 100 60" className="w-full h-full fill-[#778DA9]">
            {/* Draw vintage dark school facade */}
            <path d="M 0 60 L 0 35 L 20 20 L 40 35 L 60 20 L 80 35 L 100 20 L 100 60 Z" />
            <rect x="10" y="42" width="6" height="8" />
            <rect x="25" y="42" width="6" height="8" />
            <rect x="45" y="42" width="6" height="8" />
            <rect x="65" y="42" width="6" height="8" />
            <rect x="80" y="42" width="6" height="8" />
          </svg>
        </motion.div>

        {/* Floor silhouette */}
        <div className="w-full h-[60px] bg-[#090D1A] border-t border-[#778DA9]/20 z-20 flex items-center justify-center"></div>

        {/* Splitting kids animated paths */}
        <div className="absolute bottom-[48px] w-full flex justify-between px-[15%] md:px-[25%] z-30 pointer-events-none">
          {/* Boy silhouette walking away (left) */}
          <motion.div
            initial={{ x: 80, opacity: 0.9 }}
            animate={{ x: -100, opacity: 0 }}
            transition={{ duration: 18, ease: "linear" }}
          >
            <svg viewBox="0 0 24 48" className="w-8 h-16 fill-[#090D1A] transform scale-x-[-1] animate-walk-slow">
              <circle cx="12" cy="8" r="4" />
              <path d="M8,13 A 2,2 0 0,0 6,15 L6,26 A 1,1 0 0,0 7,27 L10,27 L10,46 A 1.5,1.5 0 0,0 12,47.5 A 1.5,1.5 0 0,0 13.5,46 L13.5,27 L16.5,27 L16.5,46 A 1.5,1.5 0 0,0 18,47.5 A 1.5,1.5 0 0,0 19.5,46 L19.5,26 L17.5,15 A 2,2 0 0,0 15.5,13 Z" />
            </svg>
          </motion.div>

          {/* Girl silhouette walking away (right) */}
          <motion.div
            initial={{ x: -80, opacity: 0.9 }}
            animate={{ x: 100, opacity: 0 }}
            transition={{ duration: 18, ease: "linear" }}
          >
            <svg viewBox="0 0 24 48" className="w-7 h-15 fill-[#090D1A] animate-walk-slow">
              <circle cx="12" cy="9" r="3.8" />
              <path d="M9,13 L6,25 A 1,1 0 0,0 7,26 L10,26 L8.5,35 L10.5,46 A 1.5,1.5 0 0,0 12.5,47.2 A 1.5,1.5 0 0,0 14,46 L12.5,35 L14.5,26 L17.5,26 A 1,1 0 0,0 18.5,25 L15.5,13 Z" />
              <path d="M9,7 Q4,10 7,13" stroke="#090D1A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
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
                <p className="font-serif text-lg md:text-2xl text-[#FFFDF8]/70 font-semibold italic">
                  "No calls. No messages. Just years passing by."
                </p>
                <p className="font-sans text-xs tracking-widest text-[#778DA9]/60 uppercase mt-2">
                  The silence of passing time.
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
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#415A77] to-[#1E293B] hover:shadow-lg hover:shadow-black/40 text-white font-sans text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#778DA9]/20"
            >
              <span>To Chapter IV</span>
              <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
            </motion.button>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes walk-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-walk-slow {
          animation: walk-slow 2.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
