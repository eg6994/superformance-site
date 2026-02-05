"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/data/blog";
import { Service } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  relatedServices: Service[];
}

export function BlogPostContent({ post, relatedPosts, relatedServices }: BlogPostContentProps) {
  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine) {
        flushList();
        return;
      }

      // Headings
      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith("- ")) {
        inList = true;
        listItems.push(trimmedLine.replace("- ", ""));
        return;
      }

      // Bold text handling
      const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
      };

      // Regular paragraph
      flushList();
      elements.push(
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {formatText(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
  };

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
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              {post.category}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {post.excerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-emerald-500/20 flex items-center justify-center text-lg font-bold text-primary">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author.name}</div>
                  <div className="text-xs">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              {renderContent(post.content)}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 glow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-emerald-500/20 flex items-center justify-center text-3xl font-bold text-primary flex-shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm text-primary font-medium mb-1">Written by</div>
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{post.author.role}</p>
                  <p className="text-sm text-muted-foreground">
                    Expert in digital marketing and business growth strategies with years of experience helping companies succeed in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Related <span className="text-gradient">Services</span>
                </h2>
                <p className="text-muted-foreground">
                  Explore how we can help you implement these strategies
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 glow-sm group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <ServiceIcon name={service.iconName} className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-card p-10 glow"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your digital presence?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts help you implement these strategies and drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="font-semibold px-8">
                <Link href="/#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8">
                <Link href="/#services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Related <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-muted-foreground">Continue reading to learn more</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 glow-sm">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
