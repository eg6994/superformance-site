import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs, services } from "@/data/services";
import { ServicePageContent } from "./ServicePageContent";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Superformance`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (exclude current service)
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return <ServicePageContent service={service} relatedServices={relatedServices} />;
}
