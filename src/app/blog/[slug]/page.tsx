import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs, getRecentPosts } from "@/data/blog";
import { services, Service } from "@/data/services";
import { BlogPostContent } from "./BlogPostContent";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Superformance Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

// Map blog categories to related services
function getRelatedServices(category: string): Service[] {
  const categoryServiceMap: Record<string, string[]> = {
    "AI & Technology": ["ai-powered-solutions", "technology-implementation", "digital-transformation"],
    "SEO": ["seo-services", "digital-marketing-analytics", "digital-marketing-strategy"],
    "Analytics": ["digital-marketing-analytics", "digital-marketing-strategy", "technology-implementation"],
    "E-commerce": ["ecommerce-solutions", "digital-marketing-strategy", "digital-marketing-analytics"],
    "Social Media": ["digital-marketing-strategy", "affiliate-marketing", "training-education"],
    "Digital Transformation": ["digital-transformation", "technology-implementation", "ai-powered-solutions"],
  };

  const serviceSlugs = categoryServiceMap[category] || ["digital-marketing-strategy", "digital-marketing-analytics", "technology-implementation"];

  return serviceSlugs
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is Service => s !== undefined)
    .slice(0, 3);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = getRecentPosts(4).filter((p) => p.slug !== slug).slice(0, 3);

  // Get related services based on category
  const relatedServices = getRelatedServices(post.category);

  return <BlogPostContent post={post} relatedPosts={relatedPosts} relatedServices={relatedServices} />;
}
