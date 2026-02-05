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

          {/* Right Content - Feature Cards */}
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
