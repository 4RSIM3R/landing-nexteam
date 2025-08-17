import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Rocket,
  Code,
  Lightbulb,
  Building2,
  Clock,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Software Development Services | 30-Day Delivery | Nexteam",
  description:
    "Custom software, MVP development, and enterprise solutions delivered in 30 days. AI-powered development by Nexteam Indonesia. Get your free consultation.",
  keywords: [
    "software development Indonesia",
    "MVP development",
    "custom software",
    "AI-powered development",
    "30-day software delivery",
    "AI software development Indonesia",
    "enterprise software Jakarta",
    "SaaS development",
    "technology consulting",
    "digital transformation",
  ],
  openGraph: {
    title:
      "AI-Powered Software Development Services | 30-Day Delivery | Nexteam",
    description:
      "Custom software, MVP development, and enterprise solutions delivered in 30 days. AI-powered development by Nexteam Indonesia.",
    url: "https://nexteam.id/service",
    type: "website",
  },
  alternates: {
    canonical: "https://nexteam.id/service",
  },
};

export default function ServicePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Nexteam Teknologi Indonesia",
      alternateName: "Nexteam",
      description:
        "AI-powered software development company specializing in 30-day MVP development with enterprise-grade quality",
      url: "https://nexteam.id",
      logo: "https://nexteam.id/logo.png",
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
    },
    serviceType: [
      "MVP Development",
      "Custom Software Development",
      "Technology Consulting",
      "Enterprise Software Development",
    ],
    description:
      "AI-powered software solutions delivered in 30 days with enterprise-grade quality and performance",
    offers: {
      "@type": "Offer",
      description: "30-day delivery guarantee with AI-accelerated development",
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
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:py-20 lg:py-24 bg-white overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgb(0 0 0 / 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgb(0 0 0 / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
                    <Zap className="w-4 h-4 mr-1.5 text-primary" />
                    <span className="text-sm font-medium">
                      30-day delivery guarantee
                    </span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
                    <Shield className="w-4 h-4 mr-1.5 text-primary" />
                    <span className="text-sm font-medium">
                      Enterprise-grade quality
                    </span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
                    <CheckCircle className="w-4 h-4 mr-1.5 text-green-600" />
                    <span className="text-sm font-medium">
                      AI-accelerated development
                    </span>
                  </div>
                </div>

                {/* Main Headlines */}
                <div className="space-y-6">
                  <h1>
                    AI-Powered Software Solutions Delivered in
                    <span className="text-primary"> 30 Days</span>
                  </h1>

                  <p className="text-xl-lead max-w-xl">
                    From MVP to Enterprise Software - We Build What Others Take
                    Months to Deliver
                  </p>

                  {/* Value Props */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-lg">30-day delivery guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-lg">
                        AI-accelerated development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-lg">Enterprise-grade quality</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white font-medium px-8 py-4 text-base rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <Link href="https://calendly.com/ilzam/project-discussion">
                      Start Your Project
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white text-black border-2 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg"
                  >
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative lg:h-[650px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=650&fit=crop&auto=format&q=80"
                  alt="AI-powered software development workflow illustration"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Proven Track Record Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black mb-4">
                Proven Track Record
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">$5M+</div>
                <div className="text-sm text-gray-600">
                  Client Value Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
            </div>

            {/* Featured Testimonial */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-700 mb-6">
                "Nexteam delivered our fintech platform in 27 days when our
                previous vendor quoted 4 months. The AI-powered approach wasn't
                just fast - the code quality exceeded enterprise standards."
              </blockquote>
              <cite className="text-sm text-gray-600">
                — Sarah Chen, CTO at InvestTech Solutions
              </cite>
            </div>
          </div>
        </section>

        {/* Core Offerings Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black mb-4">
                Core Offerings
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* MVP & SaaS Development */}
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  MVP & SaaS Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Validate your idea fast with production-ready MVPs and
                  scalable SaaS platforms.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Rapid prototyping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">User validation tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Scalable architecture</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-black hover:bg-black/90 text-white"
                >
                  <Link href="https://calendly.com/ilzam/project-discussion">
                    Build Your MVP
                  </Link>
                </Button>
              </div>

              {/* Custom Software Development */}
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Custom Software Solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  Tailored software that fits your exact business needs with AI
                  efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Custom architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">
                      Integration capabilities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">
                      Performance optimization
                    </span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  <Link href="https://calendly.com/ilzam/project-discussion">
                    Discuss Your Project
                  </Link>
                </Button>
              </div>

              {/* Technology Consulting */}
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Technology Consulting
                </h3>
                <p className="text-gray-600 mb-6">
                  Strategic guidance for your digital transformation with expert
                  insights.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Technology audits</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Architecture planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Digital strategy</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  <Link href="https://calendly.com/ilzam/project-discussion">
                    Get Expert Advice
                  </Link>
                </Button>
              </div>

              {/* Enterprise Software */}
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Enterprise Software
                </h3>
                <p className="text-gray-600 mb-6">
                  Mission-critical systems for large organizations with
                  enterprise-grade security.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">Enterprise security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">
                      Scalable infrastructure
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">System integration</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-black hover:bg-black/90 text-white"
                >
                  <Link href="https://calendly.com/ilzam/project-discussion">
                    Enterprise Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                Client Success Stories
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Real results from real clients who trusted us with their vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Success Story 1 */}
              <Card className="w-full p-4 sm:p-6 grid gap-4 sm:gap-6 bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                      alt="Michael Rodriguez"
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold">
                      MR
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-black leading-tight">
                      Michael Rodriguez
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-snug">
                      Founder, RetailFlow
                    </p>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-gray-700">
                  "Nexteam delivered our e-commerce platform ahead of schedule.
                  Revenue increased 180% in the first quarter."
                </blockquote>
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
                    180%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Revenue Increase
                  </div>
                </div>
              </Card>

              {/* Success Story 2 */}
              <Card className="w-full p-4 sm:p-6 grid gap-4 sm:gap-6 bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                      alt="Dr. Amanda Foster"
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold">
                      AF
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-black leading-tight">
                      Dr. Amanda Foster
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-snug">
                      Head of Digital Innovation
                    </p>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-gray-700">
                  "Their AI-powered development produced cleaner, more
                  maintainable code than our previous development team."
                </blockquote>
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
                    50%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Less Technical Debt
                  </div>
                </div>
              </Card>

              {/* Success Story 3 */}
              <Card className="w-full p-4 sm:p-6 grid gap-4 sm:gap-6 bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                      alt="James Liu"
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold">
                      JL
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-black leading-tight">
                      James Liu
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-snug">
                      CEO, DataVault
                    </p>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-gray-700">
                  "Nexteam's MVP helped us secure $2M in Series A funding.
                  Investors were impressed by the quality and speed."
                </blockquote>
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
                    $2M
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Series A Funding
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process Timeline Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                How We Deliver in 30 Days
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our streamlined AI-powered process compresses months of work
                into weeks
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-4">
                {/* Step 1 */}
                <div className="text-center relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 mx-auto relative z-10">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 leading-tight">
                    AI-Powered Planning
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    7 days
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 leading-relaxed">
                    <li>Requirement analysis</li>
                    <li>Architecture design</li>
                    <li>Risk assessment</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="text-center relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 mx-auto relative z-10">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 leading-tight">
                    Accelerated Development
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    14-21 days
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 leading-relaxed">
                    <li>AI-assisted coding</li>
                    <li>Automated testing</li>
                    <li>Continuous integration</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="text-center relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 mx-auto relative z-10">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 leading-tight">
                    Quality Assurance
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    2-7 days
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 leading-relaxed">
                    <li>Performance optimization</li>
                    <li>Security validation</li>
                    <li>User experience testing</li>
                  </ul>
                </div>

                {/* Step 4 - Launch */}
                <div className="text-center relative sm:col-span-2 lg:col-span-1">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto relative z-10">
                    <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 leading-tight">
                    Launch Your Product
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    Day 30
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 leading-relaxed">
                    <li>Deployment</li>
                    <li>Go-live support</li>
                    <li>Success celebration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Join 50+ companies who chose speed over uncertainty. Get your
              project delivered in 30 days with enterprise-grade quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-black/90 text-white font-medium px-8 py-4 text-base rounded-lg"
              >
                <Link href="https://calendly.com/ilzam/project-discussion">
                  Start Your Project Today
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-black border-2 border-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-lg"
              >
                <Link href="mailto:hello@nexteam.id">
                  Schedule Consultation
                </Link>
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
