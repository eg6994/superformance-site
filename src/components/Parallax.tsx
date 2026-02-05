"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
  opacity?: boolean;
  rotate?: boolean;
}

// Parallax wrapper component
export function Parallax({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  scale = false,
  opacity = false,
  rotate = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const distance = 100 * speed;

  // Create all transforms unconditionally (hooks must be called consistently)
  const yUp = useTransform(smoothProgress, [0, 1], [`${distance}px`, `-${distance}px`]);
  const yDown = useTransform(smoothProgress, [0, 1], [`-${distance}px`, `${distance}px`]);
  const xLeft = useTransform(smoothProgress, [0, 1], [`${distance}px`, `-${distance}px`]);
  const xRight = useTransform(smoothProgress, [0, 1], [`-${distance}px`, `${distance}px`]);
  const scaleValue = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacityValue = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotateValue = useTransform(smoothProgress, [0, 1], [-5, 5]);

  // Select the appropriate transform based on direction
  const getY = () => {
    if (direction === "up") return yUp;
    if (direction === "down") return yDown;
    return undefined;
  };

  const getX = () => {
    if (direction === "left") return xLeft;
    if (direction === "right") return xRight;
    return undefined;
  };

  return (
    <motion.div
      ref={ref}
      style={{
        y: getY(),
        x: getX(),
        scale: scale ? scaleValue : undefined,
        opacity: opacity ? opacityValue : undefined,
        rotate: rotate ? rotateValue : undefined,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax layer for stacked elements at different speeds
interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  offset = 0,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (value) => value * speed + offset);

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// Parallax section with background effect
interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayOpacity?: number;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  backgroundColor = "transparent",
  overlayOpacity = 0.5,
  speed = 0.3,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            y,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale: 1.2,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor, opacity: overlayOpacity }}
          />
        </motion.div>
      )}
      {children}
    </div>
  );
}

// Floating element with scroll-based movement
interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number;
  frequency?: number;
  className?: string;
}

export function FloatingElement({
  children,
  amplitude = 20,
  frequency = 0.5,
  className = "",
}: FloatingElementProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (value) => {
    return Math.sin(value * 0.01 * frequency) * amplitude;
  });

  const x = useTransform(scrollY, (value) => {
    return Math.cos(value * 0.01 * frequency) * amplitude * 0.5;
  });

  return (
    <motion.div style={{ y, x }} className={className}>
      {children}
    </motion.div>
  );
}
