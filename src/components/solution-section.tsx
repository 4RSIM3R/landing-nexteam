import type React from "react";
import {
  Square3Stack3DIcon,
  CircleStackIcon,
  CubeTransparentIcon,
  ClockIcon,
  EyeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

interface SolutionCardProps {
  name: string;
  description: string;
  Icon: React.ElementType;
  className?: string;
  imageUrl?: string;
  isHero?: boolean;
}

const SolutionCard = ({
  name,
  description,
  Icon,
  className = "",  
}: SolutionCardProps) => (
  <div
    className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1 ${className}`}
  >
    {/* Clean white background */}
    <div className="absolute inset-0 bg-white" />

    {/* Content */}
    <div
      className={`relative z-10 h-full flex flex-col ${
        "p-10"
      }`}
    >
      <div className="flex-1">
        <Icon
          className={`text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-500 ${
            "h-12 w-12"
          }`}
        />
        <h3
          className={`font-bold text-gray-900 mb-4 leading-tight ${
            "text-2xl lg:text-3xl"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-gray-600 leading-relaxed ${
            "text-lg"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Hover indicator */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 mt-8">
        <Button variant="outline" className="bg-white text-black">
            See how it works
            <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

const solutions = [
  {
    name: "AI-accelerated development",
    description:
      "Smart tooling and automation reduces iteration cycles by 75%, letting you focus on what matters most — building great products.",
    Icon: CircleStackIcon,
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    name: "Battle-tested foundation",
    description: "Production-ready boilerplates, not toy examples",
    Icon: Square3Stack3DIcon,
    gradient: "bg-gradient-to-br from-slate-50 to-gray-100",
    className: "col-span-1 row-span-1",
  },
  {
    name: "30-day delivery",
    description: "From idea to production in exactly 30 days",
    Icon: ClockIcon,
    gradient: "bg-gradient-to-br from-amber-50 to-orange-100",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Full-stack ownership",
    description:
      "Web, mobile, deployment — we handle everything end-to-end so you don't have to coordinate multiple vendors.",
    Icon: CubeTransparentIcon,
    gradient: "bg-gradient-to-br from-emerald-50 to-green-100",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    name: "100% transparency",
    description: "No hidden fees, no surprises",
    Icon: EyeIcon,
    gradient: "bg-gradient-to-br from-purple-50 to-violet-100",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    name: "Flexible payment",
    description: "Payment options that work for your budget",
    Icon: CurrencyDollarIcon,
    gradient: "bg-gradient-to-br from-rose-50 to-pink-100",
    className: "col-span-1 row-span-1",
  },
];

export function SolutionSection() {
  return (
    <section
      className="relative py-20 lg:py-32 bg-white"
      aria-label="Our solution approach"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            A different approach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Why settle for generic solutions when you can have a battle-tested,
            AI-accelerated approach that delivers results?
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.name}
                name={solution.name}
                description={solution.description}
                Icon={solution.Icon}
                className={solution.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
