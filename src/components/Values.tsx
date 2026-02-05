"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Globe, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Act with uncompromising honesty and integrity in everything we do.",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Satisfy our customers with innovative approach, value and service.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Globe,
    title: "Responsibility",
    description: "Respect our social and physical environment in all operations.",
    color: "from-sky-500/20 to-sky-500/5",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Earn the admiration of all those associated with Superformance worldwide.",
    color: "from-primary/20 to-primary/5",
  },
];

export function Values() {
  return (
    <section id="values" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full glass-card p-6 hover:border-primary/30 transition-all duration-300 glow-sm`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                  >
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              How Do We Do It?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our core values guide every decision we make and every action we take.
              They represent our commitment to excellence and our dedication to
              delivering exceptional results for our clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that success is built on a foundation of trust, innovation,
              and a genuine commitment to our clients' growth. These principles
              shape our culture and drive our pursuit of excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
