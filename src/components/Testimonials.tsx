"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jonathan Mitchell",
    role: "CEO, TechVenture Asia",
    content:
      "Superformance transformed our digital presence completely. Their strategic approach to SEO and content marketing increased our organic traffic by 300% in just 6 months.",
    rating: 5,
  },
  {
    name: "Rebecca Chen",
    role: "Marketing Director, GlobalRetail",
    content:
      "The team's expertise in digital analytics helped us understand our customers better than ever. Their insights directly contributed to a 45% increase in conversion rates.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Founder, E-Commerce Plus",
    content:
      "Working with Superformance was a game-changer. Their e-commerce solutions and AI-powered recommendations boosted our sales significantly.",
    rating: 5,
  },
  {
    name: "Alexandra Kim",
    role: "COO, Digital Dynamics",
    content:
      "Their digital transformation expertise helped us modernize our entire operation. We've seen a 60% improvement in operational efficiency and our team is more productive than ever.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5" />

      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        {/* Testimonial Cards - 4 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card p-6 hover:border-primary/30 transition-all duration-300 glow-sm relative">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-emerald-500/20 flex items-center justify-center text-base font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
