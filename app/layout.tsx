import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discoverable - AI Visibility & SEO Platform for Modern Brands",
  description: "Maximize your brand's online presence with AI visibility optimization and advanced SEO. Get discovered by ChatGPT, Claude, Google AI, and traditional search engines.",
  keywords: "AI visibility, SEO optimization, brand discovery, ChatGPT optimization, AI search presence, search engine optimization, digital marketing, AI marketing",
  authors: [{ name: "Discoverable Team" }],
  creator: "Discoverable",
  publisher: "Discoverable",
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
  openGraph: {
    title: "Discoverable - AI Visibility & SEO Platform",
    description: "Make your brand impossible to miss in the AI era. Optimize for AI search engines and traditional SEO.",
    url: "https://discoverable.ai",
    siteName: "Discoverable",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discoverable - AI Visibility & SEO Platform",
    description: "Make your brand impossible to miss in the AI era",
    creator: "@discoverable_ai",
  },
  alternates: {
    canonical: "https://discoverable.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
