import { Button } from "./ui/button";
import { ArrowDownIcon, CheckCircle } from "lucide-react";
import Image from "next/image";

export const BannerSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center px-3 py-1.5 bg-subtle border border-subtle rounded-lg">
                  <span className="text-sm font-medium">50+ Clients</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-subtle border border-subtle rounded-lg">
                  <span className="text-sm font-medium">6+ Years</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-subtle border border-subtle rounded-lg">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-green-600" />
                  <span className="text-sm font-medium">100% On-Time</span>
                </div>
              </div>

              {/* Main Headlines */}
              <div className="space-y-6">
                <h1>
                  Ship Your MVP in
                  <span className="text-primary"> 30 Day Not 6 Months</span>
                </h1>

                <p className="text-xl-lead max-w-xl">
                  Battle-tested code. Enterprise-grade. AI-accelerated.
                  <span className="font-medium text-primary">
                    {" "} Stop losing to competitors who ship faster.
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-black hover:bg-black/90 text-white font-medium px-8 py-4 text-base rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="#contact">Schedule Strategy Call</a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-2 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg"
                >
                  View Our Process
                  <ArrowDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Social Proof Note */}
              <p className="text-sm pt-2">
                Join 50+ companies who chose speed over delays
              </p>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative lg:h-[650px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=650&fit=crop&auto=format&q=80"
                alt="Professional team collaborating on digital transformation projects"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30</div>
                    <div className="text-xs">Days Average</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
