import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUPERFORMANCE | Digital Consulting Agency",
  description: "Our Business is to Grow your Business. Unlock your business's digital success with our expert digital consulting services. We drive growth, enhance strategies, and transform brands for online excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
