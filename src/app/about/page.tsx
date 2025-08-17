import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";

export const metadata: Metadata = {
  title:
    "About Nexteam Teknologi Indonesia - Building Indonesia's Digital Future",
  description:
    "Learn about Nexteam's story, mission, and the people behind Indonesia's leading fullstack development company. Discover how we're building digital partnerships that transform businesses.",
  keywords: [
    "About Nexteam",
    "Nexteam Teknologi Indonesia company",
    "Indonesian software development company",
    "fullstack development team",
    "digital transformation Indonesia",
    "startup development company",
    "software consulting Indonesia",
    "tech company story",
  ],
  openGraph: {
    title:
      "About Nexteam Teknologi Indonesia - Building Indonesia's Digital Future",
    description:
      "Learn about Nexteam's story, mission, and the people behind Indonesia's leading fullstack development company.",
    url: "https://nexteam.id/about",
    type: "website",
  },
  alternates: {
    canonical: "https://nexteam.id/about",
  },
};

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Nexteam Teknologi Indonesia",
      alternateName: "Nexteam",
      description:
        "Indonesian software development company specializing in 30-day MVP development with AI-powered solutions and enterprise-grade quality",
      url: "https://nexteam.id",
      logo: "https://nexteam.id/logo.png",
      foundingDate: "2021",
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
        "Digital strategy and transformation",
        "Web development and applications",
        "Digital marketing solutions",
      ],
      knowsAbout: [
        "MVP Development",
        "Fullstack Development",
        "AI-powered Development",
        "Indonesian Business Market",
        "Digital Transformation",
      ],
      mission:
        "Empowering Indonesian businesses to compete globally through world-class digital solutions and genuine partnerships",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen">
        {/* Hero Section - Brand Statement */}
        <section className="relative py-16 px-4 sm:py-20 lg:py-24 bg-white">
          {/* Content Container */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Indonesia's Digital Partner
              </span>
            </div>

            <div className="mb-8 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <SparklesText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary">
                  Nexteam Teknologi Indonesia
                </SparklesText>
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 max-w-3xl mx-auto text-gray-700 font-light leading-relaxed">
              Building Indonesia's digital future, one partnership at a time.
            </p>

            <p className="text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              Where innovation meets Indonesian excellence, creating digital
              solutions that transform businesses and empower growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="#our-story">Discover Our Story</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-3 transition-all duration-300"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Bottom scroll indicator button */}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors duration-300 p-2"
          >
            <Link href="#our-story">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </Link>
          </Button>
        </section>

        {/* Our Story Section */}
        <section
          id="our-story"
          className="py-16 sm:py-20 lg:py-24 px-4 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 sm:mb-12 lg:mb-16 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              How it started
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                In 2021, we saw a gap in the Indonesian digital landscape. Too
                many businesses were struggling with outdated systems, slow
                development cycles, and partners who didn't understand the
                unique challenges of building in Indonesia's dynamic market.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                The moment of decision came when we realized that Indonesian
                businesses deserved the same quality of digital solutions
                available anywhere in the world, but built with deep local
                market understanding and genuine partnership mindset.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Our early days were challenging – building trust, proving our
                approach, and refining our 30-day MVP methodology. Our first
                breakthrough came when we delivered a complex e-commerce
                platform in record time, showing that speed doesn't have to
                compromise quality.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Today, we stand as a trusted partner for businesses ready to
                embrace digital transformation, combining global standards with
                Indonesian market insights to deliver solutions that truly work.
              </p>
            </div>
            <blockquote className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg border-l-4 border-primary">
              <p className="text-base sm:text-lg italic mb-4 text-gray-700">
                "We didn't start Nexteam to be just another development company.
                We started it to be the partner we wished we had when we were
                building our own digital dreams."
              </p>
              <cite className="text-sm sm:text-base font-semibold text-primary">
                — Nexteam Founders
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Our Journey Section - Timeline */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
                  Our Timeline
                </span>
              </div>
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600">
                From humble beginnings to becoming Indonesia's trusted digital
                partner
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

              {/* Timeline Items */}
              <div className="space-y-12 sm:space-y-16">
                {/* 2021 - Foundation */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row md:items-center w-full">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="ml-16 md:ml-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-xs sm:text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                          The Beginning
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                          Team Formation
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          Nexteam was born from a shared vision to bridge the
                          gap between Indonesian businesses and world-class
                          digital solutions. Our founding team came together
                          with complementary skills and a unified mission.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 md:-ml-6 flex items-center justify-center order-1 md:order-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">
                          21
                        </span>
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                      <div className="ml-16 md:ml-0 flex items-center">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2023 - IT Outsource Services */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row md:items-center w-full">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                      <div className="ml-16 md:ml-0 flex items-center md:justify-end">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                          2023
                        </span>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 md:-ml-6 flex items-center justify-center order-1 md:order-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">
                          23
                        </span>
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                      <div className="ml-16 md:ml-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-xs sm:text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                          Service Expansion
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                          IT Outsource Services
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          Expanded our offerings to include comprehensive IT
                          outsourcing services, helping businesses scale their
                          technical capabilities while maintaining focus on
                          their core operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2025 - Current Growth */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row md:items-center w-full">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="ml-16 md:ml-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-10 -mt-10"></div>
                        <div className="relative">
                          <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide flex items-center md:justify-end gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            Current Year
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Continued Growth
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Today, we continue to evolve and grow, expanding our
                            impact across Indonesia while staying true to our
                            core values of partnership, excellence, and
                            innovation. The journey continues...
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node - Current */}
                    <div className="absolute left-8 md:left-1/2 md:-ml-6 flex items-center justify-center order-1 md:order-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold text-xs sm:text-sm">
                          25
                        </span>
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                      <div className="ml-16 md:ml-0 flex items-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
                  Our Foundation
                </span>
              </div>
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Mission & Values
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Empowering Indonesian businesses to compete globally through
                world-class digital solutions and genuine partnerships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  We deliver enterprise-grade solutions with meticulous
                  attention to detail and performance optimization.
                </p>
              </div>

              <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Partnership
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  We view every client relationship as a long-term partnership
                  built on trust and mutual success.
                </p>
              </div>

              <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  We leverage cutting-edge technology and AI to accelerate
                  development without compromising quality.
                </p>
              </div>

              <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Integrity
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Complete transparency in communication, pricing, and project
                  progress builds lasting trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Nexteam - Unified Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
                  Why Choose Nexteam
                </span>
              </div>
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Your Success Partner
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                We blend deep Indonesian market expertise with world-class
                technical excellence, delivering results that matter to your
                business.
              </p>
            </div>

            {/* Core Principles Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Local Insight
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Deep understanding of Indonesian business culture and market
                  dynamics shapes every solution we build.
                </p>
              </div>

              <div className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Results-Driven
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Technology serves your business goals. We deliver measurable
                  outcomes that drive growth, not just technical achievements.
                </p>
              </div>

              <div className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  True Partnership
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Long-term relationships built on transparency, trust, and
                  mutual success. We grow alongside your business.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
                Our Expertise
              </h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-gray-200">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Digital Strategy
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Transformation roadmaps that align with your business
                    objectives
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-gray-200">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Web Development
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Enterprise-grade applications built for scale and
                    performance
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-gray-200">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Digital Solutions
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Comprehensive marketing and growth-focused digital tools
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
                Ready to Start?
              </span>
            </div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Let's Build Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              Ready to transform your business with a partner who understands
              both technology and the Indonesian market?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <Button
                asChild
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link href="mailto:hello@nexteam.id">Start a Conversation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link href="tel:+62-XXX-XXX-XXXX">Call Directly</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Free consultation, no pressure – just an honest conversation about
              your needs
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
