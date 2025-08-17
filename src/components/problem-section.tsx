import { Clock, Trash2, DollarSign, ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";

export function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Endless Development Cycles",
      description: "6+ month development cycles that kill momentum",
      impact: "Lost market opportunity",
    },
    {
      icon: <Trash2 className="w-5 h-5" />,
      title: "Technical Debt Trap",
      description: "Technical debt that makes iteration impossible",
      impact: "Stuck with legacy code",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Budget Drain",
      description: "Budget overruns that drain runway",
      impact: "Running out of resources",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Common MVP development challenges"
    >
      {/* Subtle Grid Background - matching previous sections */}
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
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight mb-4">
              Most MVPs fail before they start
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common pitfalls that turn promising ideas into costly failures
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-[0_1px_3px_0_rgb(0_0_0_/_0.05)] border border-gray-100/50 hover:shadow-[0_4px_12px_0_rgb(0_0_0_/_0.08)] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-600 rounded-lg mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  {problem.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-black leading-tight">
                    {problem.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {problem.description}{" "}
                    <span className="text-sm text-red-600 font-medium">
                      → {problem.impact}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition to Solution */}
          <div className="text-center">
            <Button variant="outline">
              But there's a better way
              <ArrowDownIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
