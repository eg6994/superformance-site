"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: {
      enable: false,
    },
    fpsLimit: 60,
    detectRetina: true,
    pauseOnOutsideViewport: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
          speed: 0.5,
          factor: 100,
          maxSpeed: 50,
        },
      },
    },
    particles: {
      color: {
        value: "#22c55e",
      },
      links: {
        color: "#22c55e",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      number: {
        value: isMobile ? 50 : 100,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.7,
        },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
    },
  }), [isMobile]);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className={`absolute inset-0 w-full h-full ${className}`}
      options={options}
    />
  );
}
