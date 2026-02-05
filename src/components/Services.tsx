"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            What Do We Do?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions to transform your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isFeatured = index === 0 || index === 1 || index === 8;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <div
                    className={`h-full glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                      isFeatured ? "glow" : "glow-sm"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                        isFeatured
                          ? "bg-primary/20 group-hover:bg-primary/30"
                          : "bg-muted group-hover:bg-primary/10"
                      }`}
                    >
                      <ServiceIcon
                        name={service.iconName}
                        className={`w-7 h-7 ${
                          isFeatured ? "text-primary" : "text-primary/80"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-emerald-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
