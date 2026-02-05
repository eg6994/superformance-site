"use client";

import { motion } from "framer-motion";
import { Lightbulb, Handshake, TrendingUp } from "lucide-react";

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
  return (
    <section
      id="mission"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-emerald-500/5" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-lg text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
