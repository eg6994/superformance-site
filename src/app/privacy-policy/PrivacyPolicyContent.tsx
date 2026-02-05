"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function PrivacyPolicyContent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Last updated: February 5, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto prose prose-lg prose-invert"
          >
            <div className="glass-card p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Superformance Limited ("we," "our," or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website superformance.agency or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please read this Privacy Policy carefully. By accessing or using our services, you
                  acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fill out our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a consultation</li>
                  <li>Engage our services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name,
                  and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website or source</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Deliver the services you have requested</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and trends</li>
                  <li>Protect against fraud and unauthorized access</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect and track information about
                  your browsing activities. You can control cookies through your browser settings, but
                  disabling cookies may affect your experience on our website.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We may use the following types of cookies:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong className="text-foreground">Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Service providers:</strong> Third parties who help us operate our business</li>
                  <li><strong className="text-foreground">Legal authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-foreground">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the internet is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:info@superformance.agency" className="text-primary hover:underline">
                    info@superformance.agency
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes
                  for which it was collected, or as required by applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country
                  of residence. We ensure appropriate safeguards are in place to protect your information
                  in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly
                  collect personal information from children. If you believe we have collected information
                  from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p><strong className="text-foreground">Superformance Limited</strong></p>
                  <p>Unit 2A, 17/F, Glenealy Tower</p>
                  <p>No.1 Glenealy, Central</p>
                  <p>Hong Kong S.A.R</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:info@superformance.agency" className="text-primary hover:underline">
                      info@superformance.agency
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
