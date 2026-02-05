"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Future of AI in Digital Marketing",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing strategies.",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    category: "AI & Technology",
  },
  {
    title: "10 SEO Trends to Watch in 2026",
    excerpt:
      "Stay ahead of the competition with these essential SEO trends that will dominate the digital landscape.",
    date: "Jan 22, 2026",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    title: "Building a Data-Driven Marketing Strategy",
    excerpt:
      "Learn how to leverage analytics and data insights to create more effective marketing campaigns.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Analytics",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              From Our <span className="text-gradient">Blog</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-auto border-border hover:bg-accent group"
          >
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 glow-sm">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
