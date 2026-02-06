import { Metadata } from "next";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | Superformance - Digital Marketing Insights",
  description:
    "Stay updated with the latest digital marketing trends, SEO strategies, and industry insights from the Superformance team.",
  openGraph: {
    title: "Blog | Superformance - Digital Marketing Insights",
    description:
      "Stay updated with the latest digital marketing trends, SEO strategies, and industry insights from the Superformance team.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
