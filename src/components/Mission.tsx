"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Handshake, TrendingUp, Star } from "lucide-react";
import { useRef } from "react";
import { Parallax, FloatingElement } from "@/components/Parallax";

const pillars = [
  {
    icon: Lightbulb,
    title: "Strategic Guidance",
    description: "Providing innovative solutions and unmatched expertise",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Maximizing online presence and driving long-term success",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "Building long-term relationships through exceptional value",
  },
];

export function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Parallax Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-emerald-500/5"
        style={{ y: backgroundY }}
      />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating decorative elements */}
      <FloatingElement amplitude={30} frequency={0.3} className="absolute top-20 left-10 w-20 h-20 opacity-20">
        <div className="w-full h-full rounded-full bg-primary/30 blur-xl" />
      </FloatingElement>
      <FloatingElement amplitude={25} frequency={0.4} className="absolute bottom-20 right-10 w-16 h-16 opacity-20">
        <div className="w-full h-full rounded-full bg-emerald-500/30 blur-xl" />
      </FloatingElement>
      <FloatingElement amplitude={20} frequency={0.5} className="absolute top-1/2 right-1/4 w-12 h-12 opacity-15">
        <div className="w-full h-full rounded-full bg-primary/40 blur-lg" />
      </FloatingElement>

      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity: opacityProgress }}
      >
        <Parallax speed={0.2} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              Why Do We Do It?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our mission is to empower businesses to thrive in the digital age by providing
              strategic guidance, innovative solutions, and unmatched expertise.
            </p>
          </motion.div>
        </Parallax>

        <Parallax speed={0.15} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 max-w-5xl mx-auto glow mb-16"
          >
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* Text Content - 3 columns */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Empowering Digital Excellence
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are dedicated to helping our clients leverage cutting-edge digital
                    technologies, maximize their online presence, and drive sustainable growth
                    in an ever-evolving marketplace.
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-primary/50 via-amber-500/30 to-transparent" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  Through our collaborative approach, we aim to deliver exceptional value,
                  build long-term partnerships, and remain at the forefront of digital innovation.
                </p>
              </div>

              {/* 10+ Years Badge - 2 columns */}
              <div className="md:col-span-2">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-600/20 rounded-3xl blur-xl" />

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-amber-950/40 via-yellow-950/30 to-amber-900/40 border border-amber-500/30 rounded-2xl p-8 text-center overflow-hidden">
                    {/* Star decorations */}
                    <div className="absolute top-3 left-3">
                      <Star className="w-4 h-4 text-amber-400/60 fill-amber-400/40" />
                    </div>
                    <div className="absolute top-4 right-5">
                      <Star className="w-3 h-3 text-amber-300/50 fill-amber-300/30" />
                    </div>
                    <div className="absolute bottom-4 left-5">
                      <Star className="w-3 h-3 text-yellow-400/50 fill-yellow-400/30" />
                    </div>
                    <div className="absolute bottom-3 right-4">
                      <Star className="w-4 h-4 text-amber-400/60 fill-amber-400/40" />
                    </div>
                    <div className="absolute top-1/2 left-2 -translate-y-1/2">
                      <Star className="w-2 h-2 text-amber-300/40 fill-amber-300/20" />
                    </div>
                    <div className="absolute top-1/2 right-2 -translate-y-1/2">
                      <Star className="w-2 h-2 text-yellow-300/40 fill-yellow-300/20" />
                    </div>

                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-amber-400/20"
                      animate={{
                        boxShadow: [
                          "inset 0 0 20px rgba(251, 191, 36, 0.1)",
                          "inset 0 0 40px rgba(251, 191, 36, 0.2)",
                          "inset 0 0 20px rgba(251, 191, 36, 0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Star icon */}
                      <motion.div
                        className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <Star className="w-6 h-6 text-amber-950 fill-amber-950" />
                      </motion.div>

                      {/* Number */}
                      <motion.div
                        className="text-5xl md:text-6xl font-bold mb-2"
                        style={{
                          background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #fcd34d 50%, #f59e0b 75%, #d97706 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        10+
                      </motion.div>

                      {/* Label */}
                      <div className="text-amber-200/90 font-semibold tracking-wide text-sm uppercase">
                        Years of Excellence
                      </div>

                      {/* Subtitle */}
                      <div className="mt-3 text-xs text-amber-300/60">
                        Trusted by 150+ clients worldwide
                      </div>
                    </div>

                    {/* Subtle sparkle effect */}
                    <motion.div
                      className="absolute top-1/4 right-1/4 w-1 h-1 bg-amber-300 rounded-full"
                      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-yellow-300 rounded-full"
                      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Parallax>

        {/* Mission Pillars with staggered parallax */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Parallax key={index} speed={0.1 + index * 0.05} direction="up">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <pillar.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
