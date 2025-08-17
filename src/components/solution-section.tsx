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
import Link from "next/link";

interface SolutionCardProps {
  name: string;
  description: string;
  Icon: React.ElementType;
  className?: string;
  buttonText?: string;
  buttonLink?: string;
}

const SolutionCard = ({
  name,
  description,
  Icon,
  className = "",
  buttonText = "See how it works",
  buttonLink = "/",
}: SolutionCardProps) => (
  <div
    className={`group relative overflow-hidden rounded-3xl bg-white border border-subtle hover-lift ${className}`}
  >
    {/* Clean white background */}
    <div className="absolute inset-0 bg-white" />

    {/* Content */}
    <div className={`relative z-10 h-full flex flex-col ${"p-10"}`}>
      <div className="flex-1">
        <Icon
          className={`mb-6 group-hover:scale-110 transition-transform duration-500 ${"h-12 w-12"}`}
        />
        <h3 className="mb-4">{name}</h3>
        <p className="text-lead">{description}</p>
      </div>

      {/* Hover indicator */}
      <Link href={buttonLink} className="mt-8">
        <Button variant="outline" className="bg-white text-black">
          {buttonText}
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </Link>
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
    buttonText: "See Our AI Workflow",
    buttonLink: "/",
  },
  {
    name: "Battle-tested foundation",
    description: "Production-ready boilerplates, not toy examples",
    Icon: Square3Stack3DIcon,
    gradient: "bg-gradient-to-br from-slate-50 to-gray-100",
    className: "col-span-1 row-span-1",
    buttonText: "Our Boilerplates In Action",
    buttonLink: "/",
  },
  {
    name: "30-day delivery",
    description: "From idea to production in exactly 30 days",
    Icon: ClockIcon,
    gradient: "bg-gradient-to-br from-amber-50 to-orange-100",
    className: "col-span-1 row-span-1",
    buttonText: "See How Our Plan Works",
    buttonLink: "/",
  },
  {
    name: "Full-stack ownership",
    description:
      "Web, mobile, deployment — we handle everything end-to-end so you don't have to coordinate multiple vendors.",
    Icon: CubeTransparentIcon,
    gradient: "bg-gradient-to-br from-emerald-50 to-green-100",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    buttonText: "See How Our Ownership Model Works",
    buttonLink: "/",
  },
  {
    name: "100% transparency",
    description: "No hidden fees, no surprises",
    Icon: EyeIcon,
    gradient: "bg-gradient-to-br from-purple-50 to-violet-100",
    className: "col-span-1 md:col-span-2 row-span-1",
    buttonText: "Learn About Our Transparency Manifesto",
    buttonLink: "/",
  },
  {
    name: "Flexible payment",
    description: "Payment options that work for your budget",
    Icon: CurrencyDollarIcon,
    gradient: "bg-gradient-to-br from-rose-50 to-pink-100",
    className: "col-span-1 row-span-1",
    buttonText: "See Our Flexible Payment Options",
    buttonLink: "/",
  },
];

export function SolutionSection() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24 bg-white"
      aria-label="Our solution approach"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <h2>A different approach</h2>
          <p className="text-lead max-w-2xl mx-auto">
            Why settle for generic solutions when you can have a
            <span className="font-medium text-primary">
              {" "}
              battle-tested, AI-accelerated approach
            </span>
            that delivers results?{" "}
            <span className="text-green-600 font-medium">
              Join the 10% that succeed.
            </span>
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
                buttonText={solution.buttonText}
                buttonLink={solution.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
