import type React from "react";
import Image from "next/image";

const techStack = [
  {
    name: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Laravel",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Flutter",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Tailwind",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Node.js",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Docker",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "AWS",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Vercel",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Railway",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=64&h=64&fit=crop&auto=format&q=80",
  },
  {
    name: "Supabase",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop&auto=format&q=80",
  },
];

export function TechStack() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white"
      aria-label="Technology stack and tools"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            Built with proven tools
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-mono">
            6 years of experience with these tools
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`
                  relative p-6 sm:p-8 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px]
                  border-gray-200 transition-all duration-200 hover:bg-gray-50 group
                  ${index % 4 !== 3 ? "border-r" : ""}
                  ${index < 8 ? "border-b" : ""}
                `}
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2">
                  <Image
                    src={tech.image}
                    alt={`${tech.name} placeholder`}
                    fill
                    className="object-cover rounded-md group-hover:scale-110 transition-transform duration-200"
                    sizes="48px"
                  />
                </div>
                <span className="font-mono text-sm sm:text-sm text-gray-600 font-medium text-center group-hover:text-black transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium text-gray-700 font-mono">
              Production-ready since 2018
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
