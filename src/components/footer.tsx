import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Image
                  src="/logo.webp"
                  alt="Nexteam Teknologi Indonesia Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Nexteam Teknologi Indonesia
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                hello@nexteam.id
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-6">
                <Link
                  href="https://www.linkedin.com/company/nexteam-teknologi-indonesia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  LinkedIn
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="https://github.com/nexteam-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  GitHub
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="mailto:hello@nexteam.id"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  Email
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    MVP Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Enterprise Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    AI-Powered Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Tech Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
