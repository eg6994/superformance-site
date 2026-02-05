"use client";

import { motion, useInView } from "framer-motion";
import { Heart, Lightbulb, Globe, Star } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Act with uncompromising honesty and integrity in everything we do.",
    color: "from-rose-500/20 to-rose-500/5",
    hoverColor: "group-hover:from-rose-500/30 group-hover:to-rose-500/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Satisfy our customers with innovative approach, value and service.",
    color: "from-amber-500/20 to-amber-500/5",
    hoverColor: "group-hover:from-amber-500/30 group-hover:to-amber-500/10",
  },
  {
    icon: Globe,
    title: "Responsibility",
    description: "Respect our social and physical environment in all operations.",
    color: "from-sky-500/20 to-sky-500/5",
    hoverColor: "group-hover:from-sky-500/30 group-hover:to-sky-500/10",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Earn the admiration of all those associated with Superformance worldwide.",
    color: "from-primary/20 to-primary/5",
    hoverColor: "group-hover:from-primary/30 group-hover:to-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="values" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading - Always First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            How Do We Do It?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our core values guide every decision we make and every action we take.
            They represent our commitment to excellence and our dedication to
            delivering exceptional results for our clients.
          </p>
        </motion.div>

        {/* Values Cards - Below Heading */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="h-full glass-card p-6 border border-white/10 transition-all duration-500 text-center relative overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} ${value.hoverColor} flex items-center justify-center mb-5 mx-auto relative z-10 transition-all duration-500`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/80 transition-colors duration-300">
                  {value.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
