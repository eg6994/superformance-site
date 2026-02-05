"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges through in-depth consultations.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analysis",
    description:
      "Deep dive into your market, competitors, and current digital presence to identify opportunities.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Strategy & Execution",
    description:
      "Develop and implement tailored digital strategies designed to achieve your specific objectives.",
  },
  {
    number: "04",
    icon: BarChart,
    title: "Optimize & Scale",
    description:
      "Continuously monitor, analyze, and optimize performance to maximize ROI and drive growth.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology that delivers consistent results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative glass-card p-8 text-center hover:border-primary/30 transition-all duration-300 glow-sm">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
