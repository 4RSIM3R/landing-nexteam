import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SocialProof } from "@/components/social-proof";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { TechStack } from "@/components/tech-stack";
import { CaseStudies } from "@/components/case-studies";
import { PricingSection } from "@/components/pricing-section";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
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

        <div className="relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md">
                  <span className="text-sm font-medium text-gray-700">
                    6+ years
                  </span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md">
                  <span className="text-sm font-medium text-gray-700">
                    15+ MVPs
                  </span>
                </div>
              </div>

              {/* Main Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight tracking-tight">
                  Ship your MVP in <span className="text-black">30 days</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  From idea to production with battle-tested code and AI
                  acceleration
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-black/90 text-white font-medium px-8 py-4 text-base rounded-md transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  asChild
                >
                  <a href="#contact">Book a call</a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black"
                >
                  Know more
                  <ArrowDownIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face&auto=format&q=80"
                alt="Professional developer working on MVP projects"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Pricing Section */}
      <PricingSection />
    </>
  );
}
