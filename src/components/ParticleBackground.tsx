"use client";

import { useEffect, useRef, useCallback, memo } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
  maxSpeed?: number;
  connectionDistance?: number;
  className?: string;
}

const ParticleBackground = memo(function ParticleBackground({
  particleCount = 50,
  color = "22, 197, 94", // Primary green RGB
  maxSpeed = 0.3,
  connectionDistance = 120,
  className = "",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isInCanvas: false });

  const createParticles = useCallback(
    (width: number, height: number): Particle[] => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * maxSpeed,
          vy: (Math.random() - 0.5) * maxSpeed,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() * 30 - 15, // Slight hue variation
        });
      }
      return particles;
    },
    [particleCount, maxSpeed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Reinitialize particles on resize
      particlesRef.current = createParticles(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isInCanvas: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isInCanvas = false;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Throttle to target FPS
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary check with wrapping
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction - gentle attraction
        if (mouseRef.current.isInCanvas) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150 * 0.01;
            p.vx += dx * force;
            p.vy += dy * force;
            // Limit velocity
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > maxSpeed * 2) {
              p.vx = (p.vx / speed) * maxSpeed * 2;
              p.vy = (p.vy / speed) * maxSpeed * 2;
            }
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections (optimized - only check forward)
      ctx.strokeStyle = `rgba(${color}, 0.15)`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const connDistSq = connectionDistance * connectionDistance;

          if (distSq < connDistSq) {
            const opacity = 1 - distSq / connDistSq;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${opacity * 0.15})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [createParticles, color, connectionDistance, maxSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.8 }}
    />
  );
});

export default ParticleBackground;
