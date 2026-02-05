"use client";

import { useEffect, useRef, useCallback, memo } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
  maxSpeed?: number;
  connectionDistance?: number;
  className?: string;
}

// Spatial grid cell for O(1) neighbor lookup instead of O(n²)
interface GridCell {
  particles: number[];
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
  const isVisibleRef = useRef(true);

  // Get optimized settings based on screen size
  const getOptimizedSettings = useCallback((width: number, height: number) => {
    const area = width * height;
    const isMobile = width < 768;
    const isLargeScreen = area > 1500000; // ~1440x1080 and above

    // Scale down for larger screens to maintain performance
    let adjustedParticleCount = particleCount;
    let adjustedConnectionDist = connectionDistance;
    let targetFPS = 60;

    if (isLargeScreen) {
      // Reduce particles significantly for large desktop screens
      adjustedParticleCount = Math.min(20, Math.floor(particleCount * 0.35));
      adjustedConnectionDist = Math.min(70, connectionDistance * 0.5);
      targetFPS = 24; // Lower FPS for desktop - still smooth for ambient effects
    } else if (!isMobile && area > 800000) {
      // Medium screens
      adjustedParticleCount = Math.min(25, Math.floor(particleCount * 0.5));
      adjustedConnectionDist = Math.min(80, connectionDistance * 0.6);
      targetFPS = 30;
    }

    return {
      particleCount: adjustedParticleCount,
      connectionDistance: adjustedConnectionDist,
      targetFPS,
      isMobile,
    };
  }, [particleCount, connectionDistance]);

  const createParticles = useCallback(
    (width: number, height: number, count: number): Particle[] => {
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * maxSpeed,
          vy: (Math.random() - 0.5) * maxSpeed,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      return particles;
    },
    [maxSpeed]
  );

  // Build spatial grid for efficient neighbor lookup
  const buildGrid = useCallback((particles: Particle[], cellSize: number) => {
    const grid = new Map<string, GridCell>();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const cellX = Math.floor(p.x / cellSize);
      const cellY = Math.floor(p.y / cellSize);
      const key = `${cellX},${cellY}`;

      if (!grid.has(key)) {
        grid.set(key, { particles: [] });
      }
      grid.get(key)!.particles.push(i);
    }

    return grid;
  }, []);

  // Get neighboring particles using grid
  const getNeighbors = useCallback((
    particleIndex: number,
    particles: Particle[],
    grid: Map<string, GridCell>,
    cellSize: number
  ): number[] => {
    const p = particles[particleIndex];
    const cellX = Math.floor(p.x / cellSize);
    const cellY = Math.floor(p.y / cellSize);
    const neighbors: number[] = [];

    // Check 3x3 grid around particle
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const key = `${cellX + dx},${cellY + dy}`;
        const cell = grid.get(key);
        if (cell) {
          for (const idx of cell.particles) {
            if (idx > particleIndex) { // Only forward to avoid duplicates
              neighbors.push(idx);
            }
          }
        }
      }
    }

    return neighbors;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let settings = { particleCount: 30, connectionDistance: 80, targetFPS: 30, isMobile: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Use lower DPR on desktop for performance
      const dpr = settings.isMobile ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      width = rect.width;
      height = rect.height;

      settings = getOptimizedSettings(width, height);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Reinitialize particles with optimized count
      particlesRef.current = createParticles(width, height, settings.particleCount);
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

    // Visibility observer to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    resize();
    window.addEventListener("resize", resize, { passive: true });
    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let lastTime = 0;

    const animate = (currentTime: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Skip if not visible
      if (!isVisibleRef.current) return;

      // Throttle to target FPS
      const frameInterval = 1000 / settings.targetFPS;
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const connDist = settings.connectionDistance;
      const connDistSq = connDist * connDist;

      // Build spatial grid for efficient neighbor lookup
      const grid = buildGrid(particles, connDist);

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

        // Mouse interaction - only on desktop and only if mouse is in canvas
        if (mouseRef.current.isInCanvas && !settings.isMobile) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 22500) { // 150 * 150
            const dist = Math.sqrt(distSq);
            const force = (150 - dist) / 150 * 0.008;
            p.vx += dx * force;
            p.vy += dy * force;
            // Limit velocity
            const speedSq = p.vx * p.vx + p.vy * p.vy;
            const maxSpeedSq = (maxSpeed * 2) * (maxSpeed * 2);
            if (speedSq > maxSpeedSq) {
              const speed = Math.sqrt(speedSq);
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

      // Draw connections using spatial grid (much faster than O(n²))
      ctx.lineWidth = 0.5;
      ctx.beginPath(); // Single path for all lines - huge performance win

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const neighbors = getNeighbors(i, particles, grid, connDist);

        for (const j of neighbors) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connDistSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }

      // Single stroke call for all connections
      ctx.strokeStyle = `rgba(${color}, 0.1)`;
      ctx.stroke();
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [createParticles, color, maxSpeed, getOptimizedSettings, buildGrid, getNeighbors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.8 }}
    />
  );
});

export default ParticleBackground;
