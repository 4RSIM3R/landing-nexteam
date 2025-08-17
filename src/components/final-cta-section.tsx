"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white"
      aria-label="Ready to start your project"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            Ready to start?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card Body */}
            <div className="px-8 py-12">
              <div className="text-center space-y-8">
                {/* Main CTA Text */}
                <div className="space-y-4">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">
                    Book a 30-minute call to discuss your project
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    No sales pitch, just a technical discussion about your
                    requirements, timeline, and how we can help you succeed.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-medium text-black">
                        30 Minutes
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Quick & focused
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-medium text-black">
                        1-on-1 Call
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Personal attention
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-medium text-black">
                        Free Consultation
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        No commitment
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white font-medium px-10 py-4 text-base rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <Link href="https://calendly.com/ilzam/project-discussion">
                      <Calendar className="w-4 h-4" />
                      Schedule call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
