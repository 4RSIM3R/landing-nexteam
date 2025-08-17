import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexteam.id"),
  title: {
    default: "Ship your MVP in 30 days | Nexteam - Your Fullstack MVP Partner",
    template: "%s | Nexteam Teknologi Indonesia",
  },
  description:
    "From idea to production with battle-tested code and AI acceleration. Nexteam Teknologi Indonesia delivers enterprise-grade MVPs in 30 days with expert fullstack development team. Book your free consultation today.",
  keywords: [
    "MVP development Indonesia",
    "Nexteam Teknologi Indonesia",
    "fullstack development company",
    "React development",
    "Laravel development",
    "Flutter development",
    "startup development Indonesia",
    "AI-powered development",
    "web development Indonesia",
    "mobile app development",
    "rapid prototyping",
    "software development company",
    "tech consulting Indonesia",
    "enterprise software development",
  ],
  authors: [{ name: "Nexteam Teknologi Indonesia", url: "https://nexteam.id" }],
  creator: "Nexteam Teknologi Indonesia",
  publisher: "Nexteam Teknologi Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ship your MVP in 30 days | Nexteam - Your Fullstack MVP Partner",
    description:
      "From idea to production with battle-tested code and AI acceleration. Nexteam Teknologi Indonesia delivers enterprise-grade MVPs in 30 days with expert fullstack development team. Book your free consultation today.",
    url: "https://nexteam.id",
    siteName: "Nexteam Teknologi Indonesia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nexteam.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexteam Teknologi Indonesia - Your Fullstack MVP Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ship your MVP in 30 days | Nexteam - Your Fullstack MVP Partner",
    description:
      "From idea to production with battle-tested code and AI acceleration. Nexteam Teknologi Indonesia delivers enterprise-grade MVPs in 30 days with expert fullstack development team. Book your free consultation today.",
    creator: "@nexteam_id",
    images: ["https://nexteam.id/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://nexteam.id",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexteam Teknologi Indonesia",
    alternateName: "Nexteam",
    description:
      "Professional software development company specializing in 30-day MVP development with AI-powered solutions and enterprise-grade quality",
    url: "https://nexteam.id",
    logo: "https://nexteam.id/logo.png",
    sameAs: [
      "https://github.com/nexteam-id",
      "https://www.linkedin.com/company/nexteam-teknologi-indonesia/",
    ],
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
      addressRegion: "East Java",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@nexteam.id",
      contactType: "Business Inquiries",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "MVP Development",
      "Fullstack Development",
      "AI-powered Development",
      "Web Development",
      "Mobile App Development",
      "Software Consulting",
    ],
    offers: {
      "@type": "Service",
      name: "30-Day MVP Development",
      description:
        "Transform your idea into production-ready MVP in 30 days with battle-tested code, AI acceleration, and enterprise-grade quality",
    },
  };

  return (
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexteam.id" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <div className="min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
