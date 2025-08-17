import { AtSignIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-6 gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear}{" "}
              <span className="text-foreground font-medium">
                Muhammad Ilzam Mulkhaq
              </span>
              . All rights reserved.
            </p>
          </div>
          <nav
            className="flex justify-center sm:justify-end gap-4"
            aria-label="Social media links"
          >
            <Link
              href="https://www.nexteam.id/"
              className="inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Go to homepage"
            >
              <AtSignIcon className="size-4" aria-hidden="true" />
            </Link>

            <Link
              href="https://github.com/4RSIM3R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ilzam-mulkhaq/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon className="size-4" aria-hidden="true" />
            </Link>

            <Link
              href="mailto:ilzammulkhaq85@gmail.com"
              className="inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Send email to ilzammulkhaq85@gmail.com"
            >
              <MailIcon className="size-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
