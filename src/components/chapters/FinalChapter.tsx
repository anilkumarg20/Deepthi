"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audioSynth } from "@/utils/audio";
import { RefreshCw, Heart } from "lucide-react";

// Correct import from framer-motion! Let's be very careful:
// import { motion, AnimatePresence } from "framer-motion";

interface FinalChapterProps {
  onRestart: () => void;
}

const stepsText = [
  "Thank You.",
  "For every walk we shared.",
  "For every smile we exchanged.",
  "For every memory we built.",
  "For simply being the most beautiful part of my childhood."
];

export default function FinalChapter({ onRestart }: FinalChapterProps) {
  const [step, setStep] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Canvas stars & moon glow
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

    // Stars data
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5,
      twinkle: Math.random() * Math.PI,
      twinkleSpeed: 0.01 + Math.random() * 0.02,
    }));

    // Fireflies data
    const fireflies = Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "#060913";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Twinkling stars
      stars.forEach(star => {
        star.twinkle += star.twinkleSpeed;
        const alpha = 0.2 + Math.abs(Math.sin(star.twinkle)) * 0.8;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ambient Fireflies
      fireflies.forEach(ff => {
        ff.phase += 0.02;
        ff.x += ff.vx + Math.sin(ff.phase) * 0.2;
        ff.y += ff.vy + Math.cos(ff.phase) * 0.2;

        if (ff.x < 0 || ff.x > canvas.width) ff.vx *= -1;
        if (ff.y < 0 || ff.y > canvas.height) ff.vy *= -1;

        // Pulse glow
        const alpha = 0.3 + Math.abs(Math.sin(ff.phase)) * 0.7;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, ff.size * 4);
        grad.addColorStop(0, `rgba(255, 230, 109, ${alpha})`);
        grad.addColorStop(1, `rgba(255, 230, 109, 0)`);
        ctx.fillStyle = grad;
        ctx.arc(ff.x, ff.y, ff.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Step text timer progression
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev < stepsText.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setIsEnded(true);
          return prev;
        }
      });
    }, 4500);

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(timer);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleRestartClick = () => {
    if (audioSynth) {
      audioSynth.playPageTurn();
    }
    onRestart();
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#060913] text-[#FFFDF8] select-none">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10" />

      {/* Main content display area */}
      <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center justify-center min-h-[250px] z-10">
        
        {/* Step-by-step gratitude fade */}
        <AnimatePresence mode="wait">
          {!isEnded ? (
            <motion.p
              key={step}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="font-serif text-xl md:text-3xl font-light leading-relaxed tracking-wide"
            >
              {stepsText[step]}
            </motion.p>
          ) : (
            /* Final Quote & Signature Reveal */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              {/* Pulsing heart graphic */}
              <motion.div 
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 flex items-center justify-center text-[#E29578]"
              >
                <Heart className="w-6 h-6 fill-current stroke-current" />
              </motion.div>

              <h2 className="font-serif text-2xl md:text-3xl italic font-light tracking-wide max-w-lg">
                "Some childhood memories never grow old."
              </h2>

              {/* Handwriting font name signature */}
              <div className="mt-4 flex flex-col items-center">
                <span className="font-sans text-[10px] tracking-[0.25em] text-[#FFFDF8]/40 uppercase">Signed</span>
                <span className="font-dancing text-3xl md:text-4xl text-[#FFD700] tracking-wider mt-1.5">— Anil Kumar (Yours BAVA)</span>
              </div>

              {/* Reset Control */}
              <motion.button
                onClick={handleRestartClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-6 py-2.5 bg-white/5 border border-white/10 hover:border-white/30 rounded-full text-xs font-sans tracking-widest uppercase hover:bg-white/10 text-white/80 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reopen Book</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer copyright/gratitude note */}
      {isEnded && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="absolute bottom-6 font-sans text-[10px] tracking-widest uppercase text-[#FFFDF8]/80 text-center"
        >
          Thank you for reading the story we never wrote.
        </motion.p>
      )}
    </div>
  );
}
