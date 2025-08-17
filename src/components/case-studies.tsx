import type React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowDownIcon } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "KOL Platform",
    challenge: "Platform serving 1,000+ users needed rebuild",
    outcome: "99.9% uptime, 5,000+ active users",
    timeline: "3 months",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80",
    metrics: {
      uptime: "99.9%",
      users: "5,000+",
      duration: "3mo",
    },
  },
  {
    id: 2,
    title: "Government Dashboard",
    challenge: "Centralize educational data across regions",
    outcome: "75% faster analysis, 60+ institutions connected",
    timeline: "4 months",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format&q=80",
    metrics: {
      improvement: "75%",
      institutions: "60+",
      duration: "4mo",
    },
  },
  {
    id: 3,
    title: "Healthcare System",
    challenge: "Expensive legacy system integration",
    outcome: "80% cost reduction, 4 clinics adopted",
    timeline: "5 months",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format&q=80",
    metrics: {
      savings: "80%",
      clinics: "4",
      duration: "5mo",
    },
  },
];

export function CaseStudies() {
  return (
    <section
      className="relative py-20 lg:py-32 bg-white"
      aria-label="Recent work and case studies"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Recent work
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. Here's how we've helped businesses ship
            their MVPs successfully.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 group flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.title} project screenshot`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-200">
                      {study.title}
                    </h3>

                    {/* Timeline Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        {study.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Outcome */}
                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Results
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-mono font-bold text-lg text-black">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm">
                    View Case Study
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="text-center">
            <Button variant="outline">
              Let's define your budget
              <ArrowDownIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
