import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superformance.agency"),
  title: {
    default: "SUPERFORMANCE | Digital Consulting Agency in Hong Kong",
    template: "%s | Superformance",
  },
  description:
    "Our Business is to Grow Your Business. Expert digital consulting services including SEO, digital marketing, analytics, e-commerce solutions, and AI-powered digital transformation. Based in Hong Kong, serving clients worldwide.",
  keywords: [
    "digital marketing agency",
    "digital consulting",
    "SEO services",
    "digital transformation",
    "AI solutions",
    "marketing strategy",
    "e-commerce solutions",
    "digital analytics",
    "Hong Kong digital agency",
    "business growth",
    "online marketing",
    "performance marketing",
  ],
  authors: [{ name: "Superformance Limited" }],
  creator: "Superformance Limited",
  publisher: "Superformance Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superformance.agency",
    siteName: "Superformance",
    title: "SUPERFORMANCE | Digital Consulting Agency",
    description:
      "Our Business is to Grow Your Business. Expert digital consulting services for SEO, digital marketing, analytics, and AI-powered transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Superformance - Digital Consulting Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUPERFORMANCE | Digital Consulting Agency",
    description:
      "Our Business is to Grow Your Business. Expert digital consulting services for SEO, digital marketing, analytics, and AI-powered transformation.",
    images: ["/og-image.jpg"],
    creator: "@superformance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://superformance.agency",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <CookieConsent />
      </body>
    </html>
  );
}
