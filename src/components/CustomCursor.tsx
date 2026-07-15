"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const colors = [
      "rgba(255, 230, 109, ",  // Firefly Yellow
      "rgba(124, 92, 252, ",   // Aurora Purple
      "rgba(255, 209, 102, ",  // Golden Sun
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      
      // Spawn trail particles on move
      if (Math.random() < 0.4) {
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3 + 1,
          alpha: 1.0,
          color: colorBase,
          decay: 0.015 + Math.random() * 0.02,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic firefly orbits around the mouse
    const firefliesCount = 4;
    const fireflies = Array.from({ length: firefliesCount }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      angle: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.03,
      radius: 20 + Math.random() * 30,
      size: Math.random() * 4 + 2,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interpolate main mouse position for smooth trailing
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // Draw mouse cursor glow
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        35
      );
      gradient.addColorStop(0, "rgba(255, 230, 109, 0.15)");
      gradient.addColorStop(1, "rgba(255, 230, 109, 0)");
      ctx.fillStyle = gradient;
      ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
      ctx.fill();

      // Render orbiting fireflies
      fireflies.forEach((ff, index) => {
        ff.angle += ff.speed;
        const targetX = mouse.x + Math.cos(ff.angle + index) * ff.radius;
        const targetY = mouse.y + Math.sin(ff.angle * 0.8) * ff.radius;
        
        ff.x += (targetX - ff.x) * 0.1;
        ff.y += (targetY - ff.y) * 0.1;

        // Draw firefly glow
        ctx.beginPath();
        const ffGlow = ctx.createRadialGradient(
          ff.x,
          ff.y,
          0,
          ff.x,
          ff.y,
          ff.size * 3
        );
        ffGlow.addColorStop(0, "rgba(255, 230, 109, 0.8)");
        ffGlow.addColorStop(0.5, "rgba(255, 230, 109, 0.3)");
        ffGlow.addColorStop(1, "rgba(255, 230, 109, 0)");
        ctx.fillStyle = ffGlow;
        ctx.arc(ff.x, ff.y, ff.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.arc(ff.x, ff.y, ff.size / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and render trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        const pGlow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        pGlow.addColorStop(0, `${p.color}${p.alpha})`);
        pGlow.addColorStop(1, `${p.color}0)`);
        ctx.fillStyle = pGlow;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
