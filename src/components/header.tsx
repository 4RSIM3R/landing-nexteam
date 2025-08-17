"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/service" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border border-border/20 mx-4 mt-2 rounded-xl px-4 sm:px-6 lg:px-8 py-3"
            : "bg-background/70 backdrop-blur-sm supports-[backdrop-filter]:bg-background/30 px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-lg sm:text-xl"
                  : "text-lg sm:text-xl lg:text-2xl"
              }`}
            >
              NEXTEAM
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              className="hidden sm:inline-flex transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black hover:bg-black/90 text-white font-medium px-6"
              asChild
            >
              <a href="#contact">Book a call</a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:bg-primary/10 hover:scale-110 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border/50 mt-4">
            <div className="flex flex-col space-y-1 pt-4 pb-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium px-4 py-3 rounded-lg transform ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                className={`mt-3 mx-4 transition-all duration-300 hover:scale-105 bg-black hover:bg-black/90 text-white font-medium transform ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${menuItems.length * 50}ms` }}
                asChild
              >
                <a href="#contact">Book a call</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
