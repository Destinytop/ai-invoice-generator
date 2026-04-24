import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Invoice Generator - Create Professional Invoices in Seconds | Free Tool",
  description: "Generate professional invoices instantly with AI. Free invoice creator for freelancers, small businesses, and entrepreneurs. No signup required. PDF export available.",
  keywords: "AI invoice generator, free invoice maker, online invoice creator, freelance invoice tool, small business invoicing",
  other: {
    "google-site-verification": "po2OcWbZO9eZCCbxFRRD08l4uOqG_yGh6zBgUXGXhzQ",
  },
  openGraph: {
    title: "AI Invoice Generator - Create Professional Invoices in Seconds",
    description: "Generate professional invoices instantly with AI. Free for freelancers and small businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
