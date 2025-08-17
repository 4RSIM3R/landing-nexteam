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
  metadataBase: new URL("https://ilzam.nexteam.id"),
  title: {
    default:
      "Ship your MVP in 30 days | Muhammad Ilzam Mulkhaq - Fullstack Developer",
    template: "%s | Muhammad Ilzam Mulkhaq",
  },
  description:
    "From idea to production with battle-tested code and AI acceleration. Expert fullstack developer with 6+ years experience and 15+ MVPs delivered. Book your free consultation today.",
  keywords: [
    "fullstack developer",
    "MVP development",
    "React",
    "Laravel",
    "Flutter",
    "Indonesia developer",
    "startup development",
    "AI-powered development",
    "web development",
    "mobile development",
    "rapid prototyping",
    "software consultant",
  ],
  authors: [
    { name: "Muhammad Ilzam Mulkhaq", url: "https://ilzam.nexteam.id" },
  ],
  creator: "Muhammad Ilzam Mulkhaq",
  publisher: "Muhammad Ilzam Mulkhaq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Ship your MVP in 30 days | Muhammad Ilzam Mulkhaq - Fullstack Developer",
    description:
      "From idea to production with battle-tested code and AI acceleration. Expert fullstack developer with 6+ years experience and 15+ MVPs delivered. Book your free consultation today.",
    url: "https://ilzam.nexteam.id",
    siteName: "Muhammad Ilzam Mulkhaq Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ilzam.nexteam.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ilzam Mulkhaq - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ship your MVP in 30 days | Muhammad Ilzam Mulkhaq - Fullstack Developer",
    description:
      "From idea to production with battle-tested code and AI acceleration. Expert fullstack developer with 6+ years experience and 15+ MVPs delivered. Book your free consultation today.",
    creator: "@add_yours_here",
    images: ["https://ilzam.nexteam.id/og-image.png"],
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
    canonical: "https://ilzam.nexteam.id",
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
    "@type": "Person",
    name: "Muhammad Ilzam Mulkhaq",
    jobTitle: "Fullstack Developer",
    description:
      "Expert fullstack developer with 6+ years experience specializing in 30-day MVP development",
    url: "https://ilzam.nexteam.id",
    sameAs: [
      "https://github.com/4RSIM3R",
      "https://www.linkedin.com/in/ilzam-mulkhaq/",
      "https://www.nexteam.id/",
    ],
    knowsAbout: [
      "React",
      "Laravel",
      "Flutter",
      "MVP Development",
      "Fullstack Development",
      "AI-powered Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Fullstack Developer",
      description: "Specializes in rapid MVP development and startup solutions",
    },
    alumniOf: "Politeknik Negeri Malang",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    email: "ilzammulkhaq85@gmail.com",
    offers: {
      "@type": "Service",
      name: "30-Day MVP Development",
      description:
        "Turn your idea into MVP in 30 days with AI-powered development and proven boilerplates",
    },
  };

  return (
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ilzam.nexteam.id" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
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
