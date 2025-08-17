import { SocialProof } from "@/components/social-proof";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { TechStack } from "@/components/tech-stack";
import { CaseStudies } from "@/components/case-studies";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { BannerSection } from "@/components/banner-section";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <BannerSection />

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

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </>
  );
}
