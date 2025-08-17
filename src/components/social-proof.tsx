import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const clients = [
  {
    name: "Bukit Vista",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "DOT Indonesia",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Government Institution",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Tech Startup A",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Enterprise Corp",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Innovation Hub",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
  },
];

const metrics = [
  {
    number: "1,000+",
    label: "users supported",
  },
  {
    number: "99.9%",
    label: "uptime",
  },
  {
    number: "50%",
    label: "cost reduction average",
  },
];

export function SocialProof() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
      aria-label="Social proof and client testimonials"
    >
      {/* Subtle Grid Background - matching hero section */}
      <div className="absolute inset-0 opacity-[0.015]">
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
        {/* Trust Statement - improved hierarchy */}
        <div className="text-center space-y-12 sm:space-y-14 lg:space-y-16">
          {/* Header with better visual hierarchy */}
          <div className="space-y-4">
            <h1 className="text-sm sm:text-xs font-semibold uppercase tracking-widest">
              Trusted by 50+ Companies
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              Trusted by teams at{" "}
              <span className="font-medium text-black">Bukit Vista</span>,{" "}
              <span className="font-medium text-black">DOT Indonesia</span>, and{" "}
              <span className="font-medium text-black">
                government institutions
              </span>{" "}
              <span className="text-green-600 font-medium">
                — companies that chose speed over uncertainty.
              </span>
            </p>
          </div>

          {/* Client Logos Marquee - improved spacing */}
          <div
            className="py-8"
            role="region"
            aria-label="Trusted client companies"
          >
            <Marquee className="py-2" pauseOnHover={true} repeat={2}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-6 opacity-50 hover:opacity-90 transition-all duration-500 ease-out"
                  role="img"
                  aria-label={`${client.name} logo`}
                >
                  <div className="relative h-14 w-36 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-subtle">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="144px"
                    />
                    {/* Subtle overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end justify-center pb-2">
                      <span className="text-white text-xs sm:text-sm font-medium text-center px-2 drop-shadow-sm">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Metrics - sentence format */}
          <div className="space-y-6">
            <div className="w-12 h-px bg-border mx-auto"></div>
            <div
              className="max-w-3xl mx-auto text-center"
              role="region"
              aria-label="Company performance metrics"
            >
              <p className="text-lead">
                Supporting{" "}
                <span className="font-mono text-xl font-bold text-black">
                  {metrics[0].number}
                </span>{" "}
                {metrics[0].label} with{" "}
                <span className="font-mono text-xl font-bold text-black">
                  {metrics[1].number}
                </span>{" "}
                {metrics[1].label} and achieving{" "}
                <span className="font-mono text-xl font-bold text-black">
                  {metrics[2].number}
                </span>{" "}
                {metrics[2].label} for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
