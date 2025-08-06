import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getMetadata } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const contentMetadata = getMetadata();

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: contentMetadata.description,
  keywords: contentMetadata.keywords,
  authors: [{ name: "Discoverable Team" }],
  creator: "Discoverable",
  publisher: "Discoverable",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  manifest: '/site.webmanifest',
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
