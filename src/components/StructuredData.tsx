export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Superformance",
    alternateName: "Superformance Limited",
    url: "https://superformance.agency",
    logo: "https://superformance.agency/logo.png",
    description:
      "Digital consulting agency specializing in digital marketing, SEO, analytics, e-commerce solutions, and AI-powered digital transformation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 2A, 17/F, Glenealy Tower, No.1 Glenealy",
      addressLocality: "Central",
      addressRegion: "Hong Kong",
      addressCountry: "HK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@superformance.agency",
      contactType: "customer service",
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [
      "https://www.linkedin.com/company/superformance",
      "https://twitter.com/superformance",
      "https://www.facebook.com/superformance",
    ],
    foundingDate: "2016",
    areaServed: "Worldwide",
    serviceType: [
      "Digital Marketing",
      "SEO Services",
      "Digital Analytics",
      "E-commerce Solutions",
      "AI Solutions",
      "Digital Transformation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Superformance",
    url: "https://superformance.agency",
    description:
      "Our Business is to Grow Your Business. Expert digital consulting services for growth, strategy, and digital transformation.",
    publisher: {
      "@type": "Organization",
      name: "Superformance Limited",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://superformance.agency/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Superformance",
    image: "https://superformance.agency/og-image.jpg",
    "@id": "https://superformance.agency",
    url: "https://superformance.agency",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 2A, 17/F, Glenealy Tower, No.1 Glenealy",
      addressLocality: "Central",
      addressRegion: "Hong Kong",
      postalCode: "",
      addressCountry: "HK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.280758,
      longitude: 114.15547,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Superformance",
      url: "https://superformance.agency",
    },
    areaServed: "Worldwide",
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  authorName,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Superformance",
      logo: {
        "@type": "ImageObject",
        url: "https://superformance.agency/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
