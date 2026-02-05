"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Handshake, TrendingUp } from "lucide-react";
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  We are dedicated to helping our clients leverage digital technologies,
                  maximize their online presence, and drive sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our collaborative approach, we aim to deliver exceptional value,
                  build long-term partnerships, and be at the forefront of digital innovation.
                </p>
              </div>
              <Parallax speed={0.1} scale opacity>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                      alt="Digital analytics dashboard"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-emerald-500/20" />
                    <motion.div
                      className="absolute inset-4 border-2 border-primary/30 rounded-xl"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <div className="text-5xl font-bold text-gradient mb-2">10+</div>
                      <div className="text-base text-foreground font-medium">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </Parallax>
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
