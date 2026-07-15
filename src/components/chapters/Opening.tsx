"use client";

import { useEffect, useRef, useState } from "react";
import { audioSynth } from "@/utils/audio";
import { motion } from "framer-motion";

interface OpeningProps {
  onNext: () => void;
}

export default function Opening({ onNext }: OpeningProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Canvas stars
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

    // Star data
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5,
      twinkleSpeed: 0.01 + Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2,
    }));

    // Dust particles
    const dust = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.1 - Math.random() * 0.2,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const draw = () => {
      ctx.fillStyle = "#060913";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Twinkling stars
      stars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const alpha = 0.3 + Math.sin(star.phase) * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Floating dust particles
      dust.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y < -10) d.y = canvas.height + 10;
        if (d.x < -10 || d.x > canvas.width + 10) d.x = Math.random() * canvas.width;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 215, 0, ${d.alpha * 0.5})`; // Golden glowing dust
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Fade in title letter by letter shortly after mount
    const timer = setTimeout(() => setTitleVisible(true), 800);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, []);

  // 3D Parallax Book Tilting on Mouse Move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isOpening || !bookRef.current) return;
    const book = bookRef.current;
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth tilt
    book.style.transform = `rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg)`;
  };

  const handleMouseLeave = () => {
    if (isOpening || !bookRef.current) return;
    bookRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Play page turn sound
    if (audioSynth) {
      audioSynth.init();
      audioSynth.resume();
      audioSynth.playPageTurn();
    }

    // Transition to scene after book opening animation completes
    setTimeout(() => {
      onNext();
    }, 1800);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden z-10 select-none">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10" />

      {/* Intro Sub-text */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="text-[#7C5CFC] font-sans uppercase tracking-[0.2em] text-xs md:text-sm mb-4 font-semibold text-center px-4"
      >
        A True Story of Childhood & Nostalgia
      </motion.p>

      {/* Book 3D container */}
      <div 
        className="book-wrapper perspective-[1500px] w-[260px] h-[360px] md:w-[320px] md:h-[440px] flex items-center justify-center cursor-pointer mb-10 transition-transform duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpen}
      >
        <div
          ref={bookRef}
          className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out ${
            isOpening ? "pointer-events-none" : ""
          }`}
          style={{
            transform: isOpening ? "rotateY(-180deg) scale(1.15)" : "rotateY(0deg)",
            transition: isOpening ? "transform 1.8s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.5s ease-out",
          }}
        >
          {/* Back Cover */}
          <div className="absolute inset-0 bg-[#0c1220] rounded-r-lg shadow-2xl border border-gold-border -z-20 transform translate-z-[-10px]"></div>

          {/* Paper Pages Layer */}
          <div className="absolute inset-y-[8px] right-[4px] w-[95%] bg-[#FFFDF8] rounded-r border-y border-r border-[#e0d6c3] shadow-md transform-style-3d -z-10 transform translate-z-[-5px]">
            {/* Realistic inner page pages */}
            <div className="absolute inset-0 border-r border-[#f3ead4] origin-left"></div>
          </div>

          {/* Book Spine */}
          <div className="absolute inset-y-0 left-0 w-[20px] bg-[#0A0D14] rounded-l transform-style-3d origin-left transform -rotate-y-90 translate-x-[10px]"></div>

          {/* Front Cover */}
          <div 
            className={`absolute inset-0 rounded-lg shadow-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#0d172e] via-[#101b38] to-[#080e1d] flex flex-col justify-between p-6 transform-style-3d backface-hidden origin-left transition-transform duration-1800`}
            style={{
              transform: isOpening ? "rotateY(-180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Decorative Gold Filigree corner borders */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br"></div>

            {/* Glowing magic ambient light inside the book cover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#7C5CFC]/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Top gold emblem */}
            <div className="flex justify-center mt-4">
              <div className="w-10 h-10 border border-[#D4AF37]/30 rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 border border-[#D4AF37]/40 flex items-center justify-center text-[10px] text-[#D4AF37] font-serif">
                  ✨
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center z-10">
              <h1 className="font-serif text-2xl md:text-3xl text-[#FFFDF8] font-bold tracking-wide leading-relaxed drop-shadow-md">
                {titleVisible && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    The Story We <br /> Never Wrote
                  </motion.span>
                )}
              </h1>
              <div className="w-16 h-[1px] bg-[#D4AF37]/30 mx-auto mt-4"></div>
            </div>

            {/* Cover Bottom Signature */}
            <div className="text-center z-10 mb-2">
              <p className="font-dancing text-lg text-[#D4AF37]/80">A gift of memories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <motion.button
        onClick={handleOpen}
        disabled={isOpening}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3.5 bg-gradient-to-r from-[#7C5CFC] to-[#593bc8] text-white font-sans text-sm md:text-base tracking-[0.15em] uppercase rounded-full shadow-lg hover:shadow-[#7C5CFC]/25 transition-all duration-300 font-semibold border border-[#a28afc]/30 z-20 flex items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
      >
        <span>✨ Open My Story</span>
      </motion.button>

      {/* Floating Instructions */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="text-[#FFFDF8]/40 font-sans text-xs tracking-wider mt-4"
      >
        (Turn up your volume for the music)
      </motion.p>

      <style jsx>{`
        @media (max-height: 700px) {
          .book-wrapper {
            transform: scale(0.85);
            margin-bottom: 1.5rem !important;
          }
        }
        @media (max-height: 600px) {
          .book-wrapper {
            transform: scale(0.7);
            margin-bottom: 0.75rem !important;
          }
        }
        @media (max-height: 500px) {
          .book-wrapper {
            transform: scale(0.55);
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
