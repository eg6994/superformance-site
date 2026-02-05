"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function TermsOfServiceContent() {
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
            Terms of <span className="text-gradient">Service</span>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you
                  and Superformance Limited ("Company," "we," "us," or "our") concerning your access
                  to and use of the superformance.agency website and our digital consulting services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing our website or engaging our services, you agree to be bound by these Terms.
                  If you do not agree with any part of these Terms, you must not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Superformance provides digital consulting services including, but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Digital marketing strategy and consulting</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Digital analytics and reporting</li>
                  <li>E-commerce solutions</li>
                  <li>Technology implementation</li>
                  <li>AI-powered solutions</li>
                  <li>Training and education</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The specific scope, deliverables, and terms of any engagement will be outlined in a
                  separate service agreement or proposal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise indicated, the website and all content, features, and functionality
                  (including but not limited to text, graphics, logos, icons, images, audio clips,
                  and software) are owned by Superformance Limited and are protected by international
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display,
                  publicly perform, republish, download, store, or transmit any of the material on our
                  website without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website and services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt the website or servers</li>
                  <li>Not attempt to gain unauthorized access to any part of our systems</li>
                  <li>Not use automated systems to access the website without permission</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms for our services will be specified in individual service agreements.
                  Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fees are due as specified in the service agreement</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>Prices are subject to change with reasonable notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential
                  information disclosed during the course of our engagement. This obligation survives
                  the termination of any service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Superformance Limited shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Any damages arising from your use or inability to use our services</li>
                  <li>Any third-party content or services accessed through our website</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our total liability for any claims arising from these Terms or our services shall not
                  exceed the amount paid by you for the specific services giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website and services are provided on an "as is" and "as available" basis. We make
                  no warranties, express or implied, regarding:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>The accuracy or completeness of any information on our website</li>
                  <li>The results that may be obtained from using our services</li>
                  <li>The uninterrupted or error-free operation of our website</li>
                  <li>The fitness of our services for any particular purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Superformance Limited and its officers,
                  directors, employees, agents, and affiliates from any claims, damages, losses, liabilities,
                  and expenses (including legal fees) arising from your use of our website or services,
                  your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our website and services immediately, without
                  prior notice, for any reason, including breach of these Terms. Upon termination, your
                  right to use our services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  Hong Kong Special Administrative Region, without regard to its conflict of law provisions.
                  Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of
                  the courts of Hong Kong.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision
                  shall be limited or eliminated to the minimum extent necessary, and the remaining
                  provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes
                  by posting the new Terms on this page and updating the "Last updated" date. Your continued
                  use of our website and services after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
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
