"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on bottom line results, growth, and optimal ROI",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Super team of digital growth specialists at your service",
  },
  {
    icon: Award,
    title: "Market Leaders",
    description: "We help clients become market leaders, not just players",
  },
];

// Animated growth chart overlay component
function AnimatedGrowthChart() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated line path that traces the growth line */}
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 1)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated path that follows chart trajectory */}
        <motion.path
          d="M 20 180 Q 100 160 150 140 T 250 80 T 380 20"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Animated dots along the path */}
        {[
          { cx: 100, cy: 160, delay: 0.3 },
          { cx: 180, cy: 120, delay: 0.6 },
          { cx: 280, cy: 60, delay: 0.9 },
          { cx: 380, cy: 20, delay: 1.2 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="6"
            fill="rgba(34, 197, 94, 0.9)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: dot.delay, duration: 0.4, ease: "backOut" }}
          />
        ))}
      </svg>

      {/* Pulsing glow effect at the end point */}
      <motion.div
        className="absolute top-[8%] right-[8%] w-16 h-16 rounded-full bg-primary/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Superformance</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a super team of digital growth specialists! Through marketing consulting
              and performance optimization, we help clients make core transformations in their
              marketing strategy so they can grow and be more profitable.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Digital markets everywhere are highly competitive and dynamic. Using our exclusive
              super system, we help our clients become market leaders instead of market players.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Fully committed to bottom line results",
                "Strategic digital marketing solutions",
                "Long-term partnership approach",
                "Cutting-edge AI-powered solutions",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image and Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-3xl" />

            <div className="relative space-y-6">
              {/* Futuristic Tech Image with Animated Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden glass-card glow group"
              >
                <div className="aspect-video relative">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/11/19/10/11/green-graph-9208670_1280.png"
                    alt="Green upward growth chart on dark background"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient Overlay with green tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-primary/10" />

                  {/* Animated Growth Chart Overlay */}
                  <AnimatedGrowthChart />

                  {/* Animated scanning line effect */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ top: "100%" }}
                    animate={{ top: "0%" }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>

              {/* Feature Cards */}
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass-card p-6 glow-sm hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
