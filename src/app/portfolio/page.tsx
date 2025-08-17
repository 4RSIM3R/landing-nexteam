import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  FolderOpen,
  Users,
  Star,
  Smartphone,
  Globe,
  Brain,
  ShoppingCart,
  Palette,
  Search,
  Target,
  Code,
  Cloud,
  Calendar,
  MessageCircle,
  Mail,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Data structures as specified in the brief
const categories = [
  {
    id: "all",
    name: "All Projects",
    icon: "FolderOpen",
    count: 73,
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    icon: "Smartphone",
    count: 12,
  },
  {
    id: "web",
    name: "Web Development",
    icon: "Globe",
    count: 18,
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: "Brain",
    count: 8,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: "ShoppingCart",
    count: 15,
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: "Palette",
    count: 20,
  },
];

const caseStudies = [
  {
    id: "project-1",
    title: "E-commerce Platform Boosted Sales 300%",
    category: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    timeline: "3 Months",
    challenge: "Outdated checkout process causing 65% cart abandonment",
    outcome:
      "Redesigned UX increased conversions by 300% and reduced abandonment to 23%",
    metrics: {
      revenue: "+300%",
      conversion: "23%",
      users: "10K+",
    },
    technologies: ["Next.js", "Shopify", "Stripe"],
    client: "Retail Indonesia",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI-Powered Mobile App Streamlined Operations",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-0a1dd7228f2d?w=800&h=400&fit=crop",
    timeline: "4 Months",
    challenge:
      "Manual inventory management causing 40% operational inefficiency",
    outcome:
      "AI automation reduced processing time by 75% and improved accuracy to 99.2%",
    metrics: {
      efficiency: "+75%",
      accuracy: "99.2%",
      savings: "$50K+",
    },
    technologies: ["React Native", "TensorFlow", "Node.js"],
    client: "Manufacturing Corp",
    featured: true,
  },
  {
    id: "project-3",
    title: "Modern Web Platform Increased User Engagement",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
    timeline: "2 Months",
    challenge:
      "Legacy website with poor mobile experience and slow loading times",
    outcome:
      "Complete redesign improved page speed by 85% and mobile engagement by 220%",
    metrics: {
      speed: "+85%",
      engagement: "+220%",
      bounce: "-45%",
    },
    technologies: ["Next.js", "Tailwind", "Vercel"],
    client: "Tech Startup",
    featured: true,
  },
];

const testimonials = [
  {
    id: 1,
    text: "Nexteam transformed our business completely. The 300% increase in sales exceeded all our expectations. Their team's expertise in e-commerce development is unmatched.",
    author: "Sarah Johnson",
    title: "CEO, Retail Indonesia",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    company:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    text: "The AI solution they built saved us $50K in the first year alone. Incredible ROI and professional service. I highly recommend Nexteam for any digital transformation project.",
    author: "Michael Chen",
    title: "Operations Director, Manufacturing Corp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    company:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    text: "Working with Nexteam was a game-changer for our startup. They delivered a beautiful, fast website that converted 220% better than our old one.",
    author: "Amanda Rodriguez",
    title: "Founder, Tech Startup",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    company:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Value Proposition */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Location Badge */}
              <Badge
                variant="outline"
                className="w-fit border-black text-black"
              >
                Based in Indonesia, Serving Global Clients
              </Badge>

              {/* Main Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Transforming Ideas Into Digital Success Stories
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We've helped 50+ businesses increase their revenue by an
                  average of 180% through strategic digital solutions
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Trusted by 50+ Companies
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  98% Client Satisfaction
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base"
                >
                  View Our Success Stories
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-base bg-transparent"
                >
                  Start Your Project
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop"
                  alt="Business team collaboration - Nexteam digital solutions"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black">50+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">180%</div>
                    <div className="text-sm text-gray-500">Avg ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4">
            {/* Section Title */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                Our Portfolio
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our success stories across different industries
              </p>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent =
                  {
                    FolderOpen,
                    Smartphone,
                    Globe,
                    Brain,
                    ShoppingCart,
                    Palette,
                  }[category.icon] || FolderOpen;

                return (
                  <button
                    key={category.id}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      category.id === "all"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                    <Badge
                      variant="secondary"
                      className={`ml-1 text-xs ${
                        category.id === "all"
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {category.count}
                    </Badge>
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Sort by:</span>
                <button className="font-medium text-black hover:text-gray-700 transition-colors">
                  Latest
                </button>
                <button className="hover:text-black transition-colors">
                  Most Impact
                </button>
                <button className="hover:text-black transition-colors">
                  Industry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrolling Testimonial Ticker */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-8 whitespace-nowrap">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-gray-600"
                >
                  <span className="text-sm italic">"{testimonial.text}"</span>
                  <span className="text-sm font-medium">
                    - {testimonial.author}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-6 flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">
                50+ Projects Delivered
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">180% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-black fill-current" />
              <span className="font-semibold text-black">
                98% Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Grid section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital
              presence and achieve remarkable growth
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 group flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={`${study.title} project screenshot`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="outline"
                      className="bg-white/90 border-gray-200 text-black"
                    >
                      {categories.find((cat) => cat.id === study.category)
                        ?.name || study.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-200">
                      {study.title}
                    </h3>

                    {/* Timeline Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full">
                      <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {study.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Outcome */}
                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                        Results
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
                          <div className="text-xs sm:text-sm text-gray-500 capitalize mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 border-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base">
                    View Case Study
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-base bg-transparent"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              How We Deliver Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures every project delivers
              exceptional results and measurable business impact
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                icon: Search,
                title: "Discovery",
                description: "We analyze your business needs",
                details:
                  "Deep dive into your goals, challenges, and market position to create the perfect strategy.",
              },
              {
                step: "02",
                icon: Target,
                title: "Strategy",
                description: "We craft tailored solutions",
                details:
                  "Design comprehensive roadmaps that align with your business objectives and user needs.",
              },
              {
                step: "03",
                icon: Code,
                title: "Development",
                description: "We build with precision",
                details:
                  "Execute with cutting-edge technology and rigorous testing to ensure flawless delivery.",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Growth",
                description: "We measure and optimize",
                details:
                  "Monitor performance and continuously improve to maximize your return on investment.",
              },
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold text-lg mb-6 group-hover:bg-gray-800 transition-colors duration-200">
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 group-hover:border-gray-300 transition-colors duration-200">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {process.description}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {process.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base"
            >
              Let's Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Built With Industry-Leading Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced technologies and frameworks to
              deliver cutting-edge solutions
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              {
                name: "React",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Next.js",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Node.js",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "TypeScript",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Python",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "AWS",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "MongoDB",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "PostgreSQL",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Docker",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Kubernetes",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "TensorFlow",
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Figma",
                  url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center mb-3 group-hover:border-gray-300 group-hover:bg-gray-100 transition-all duration-200">
                  <Image
                    src={tech.url || "/placeholder.svg"}
                    alt={`${tech.name} technology logo`}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Expertise Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Smartphone, label: "Mobile Development" },
              { icon: Globe, label: "Web Applications" },
              { icon: Brain, label: "AI & Machine Learning" },
              { icon: Cloud, label: "Cloud Infrastructure" },
              { icon: Palette, label: "UI/UX Design" },
              { icon: ShoppingCart, label: "E-commerce Solutions" },
            ].map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-100 transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4 text-black" />
                  <span className="font-medium text-black">
                    {expertise.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Counter Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These numbers represent our commitment to delivering exceptional
              results for every client
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: FolderOpen,
                number: "73+",
                label: "Projects Completed",
                description: "Successfully delivered across various industries",
              },
              {
                icon: Users,
                number: "50+",
                label: "Happy Clients",
                description: "Businesses transformed and growing",
              },
              {
                icon: Globe,
                number: "12",
                label: "Countries Served",
                description: "Global reach with local expertise",
              },
              {
                icon: Calendar,
                number: "5+",
                label: "Years of Experience",
                description: "Proven track record of excellence",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 group-hover:border-gray-300 transition-colors duration-200">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-2 font-mono">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with Nexteam
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-200 group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Client Photo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.author} profile photo`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <div className="font-semibold text-black">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="w-16 h-8">
                    <Image
                      src={testimonial.company || "/placeholder.svg"}
                      alt="Company logo"
                      width={64}
                      height={32}
                      className="object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-200"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === 0 ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Headlines */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Join 50+ successful companies who chose Nexteam to accelerate
                  their digital growth and achieve remarkable results
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">
                  Get in touch with us:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp: +62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5" />
                    <span>hello@nexteam.id</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5" />
                    <span>+62 21-5555-0123</span>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base bg-transparent"
                >
                  Download Portfolio PDF
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Get Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your project and we'll get back to you within
                    24 hours
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Type *
                    </label>
                    <Select>
                      <SelectTrigger className="w-full border-gray-300 focus:border-black focus:ring-black">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="ai-automation">
                          AI & Automation
                        </SelectItem>
                        <SelectItem value="ecommerce">
                          E-commerce Platform
                        </SelectItem>
                        <SelectItem value="ui-ux-design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="digital-transformation">
                          Digital Transformation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us more about your project requirements..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base font-medium"
                  >
                    Get Free Consultation
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Strip (Footer) */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black">
                Nexteam Teknologi Indonesia
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transforming businesses through innovative digital solutions.
                Your trusted partner for mobile apps, web development, and AI
                automation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-black">
                Contact Information
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Jl. Sudirman No. 123</p>
                <p>Jakarta Pusat 10220</p>
                <p>Indonesia</p>
                <p className="pt-2">
                  <span className="font-medium">Phone:</span> +62 21-5555-0123
                </p>
                <p>
                  <span className="font-medium">Email:</span> hello@nexteam.id
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-black">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Mobile App Development</li>
                <li>Web Development</li>
                <li>AI & Automation</li>
                <li>E-commerce Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Transformation</li>
              </ul>
            </div>

            {/* Social Media & Links */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-black">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-black transition-colors duration-200" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-black transition-colors duration-200" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  aria-label="Behance"
                >
                  <Palette className="w-5 h-5 text-gray-600 hover:text-black transition-colors duration-200" />
                </a>
              </div>

              {/* Quick Links */}
              <div className="pt-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2024 Nexteam Teknologi Indonesia. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ in Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
