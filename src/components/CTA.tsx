"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax, FloatingElement } from "@/components/Parallax";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20 scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-emerald-500/10 to-primary/20" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Floating decorative elements */}
      <FloatingElement amplitude={40} frequency={0.3} className="absolute top-10 left-20 opacity-30">
        <div className="w-4 h-4 rounded-full bg-primary" />
      </FloatingElement>
      <FloatingElement amplitude={35} frequency={0.4} className="absolute top-20 right-32 opacity-20">
        <div className="w-6 h-6 rounded-full border-2 border-primary" />
      </FloatingElement>
      <FloatingElement amplitude={30} frequency={0.5} className="absolute bottom-20 left-1/3 opacity-25">
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </FloatingElement>

      {/* Glowing Orbs with parallax */}
      <Parallax speed={0.3} direction="up">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </Parallax>
      <Parallax speed={0.4} direction="down">
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </Parallax>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
          style={{ y: textY, scale }}
        >
          <Parallax speed={0.15} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Grow Together</span>
            </h2>
          </Parallax>
          <Parallax speed={0.1} direction="up">
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Ready to transform your digital presence and achieve remarkable growth?
              Partner with Superformance and unlock your business's full potential.
            </p>
          </Parallax>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-base group"
            >
              <a href="#contact">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-background/50 hover:bg-accent font-semibold px-10 h-14 text-base"
            >
              <a href="#services">View Our Services</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
