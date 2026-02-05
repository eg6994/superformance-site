import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superformance",
  description: "Official Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
