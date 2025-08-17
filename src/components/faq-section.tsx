"use client";

import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do you deliver so quickly?",
    answer:
      "We leverage battle-tested code templates, AI acceleration tools, and streamlined development processes. Our team has built 15+ MVPs using proven architectures and components, allowing us to focus on your unique business logic rather than reinventing the wheel.",
  },
  {
    question: "What if my project is complex?",
    answer:
      "Complex projects are our specialty. We break down complexity into manageable phases, prioritize core features for MVP launch, and plan scalable architecture from day one. Our experienced team handles everything from simple landing pages to multi-tenant SaaS platforms with advanced integrations.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely. We have extensive experience integrating with APIs, databases, payment processors, CRMs, and third-party services. Whether it's Stripe, Salesforce, custom APIs, or legacy systems, we ensure seamless data flow and maintain system reliability throughout the integration process.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-20 lg:py-32 bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our development process,
            project complexity, and system integrations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-0">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline transition-colors duration-200 [&[data-state=open]>svg]:rotate-180">
                  <h3 className="text-lg sm:text-xl font-semibold text-black leading-relaxed text-left">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
