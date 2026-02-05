"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const dismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 md:p-8 glow border border-white/10 rounded-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic,
                      and personalize content. By clicking "Accept All", you consent to our use
                      of cookies. Read our{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      to learn more.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <Button
                    variant="outline"
                    onClick={acceptEssential}
                    className="border-border hover:bg-accent text-sm"
                  >
                    Essential Only
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                  >
                    Accept All
                  </Button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={dismiss}
                  className="absolute top-4 right-4 lg:static p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
