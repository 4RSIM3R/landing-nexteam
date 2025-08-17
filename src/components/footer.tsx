import Link from "next/link";

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
            {/* Personal Info */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Muhammad Ilzam Mulkhaq
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                ilzammulkhaq85@gmail.com
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-6">
                <Link
                  href="https://www.linkedin.com/in/ilzam-mulkhaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  LinkedIn
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="https://github.com/4RSIM3R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  GitHub
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="mailto:ilzammulkhaq85@gmail.com"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
                >
                  Email
                </Link>
              </div>
            </div>

            {/* Partners Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Partners
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Elux Space
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Incbuss
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    MVP Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    IT Outsource
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    IT Consultant
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
