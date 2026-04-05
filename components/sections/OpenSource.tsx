import Link from "next/link";
import { GitFork } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const packages = [
  {
    name: "jmrashed / zkteco",
    description: "A PHP package for seamless integration with ZKTeco biometric devices — used for attendance and access control systems.",
    github: "https://github.com/jmrashed/zkteco",
    packagist: "https://packagist.org/packages/jmrashed/zkteco",
    color: "border-blue-500/20",
    titleColor: "text-blue-300",
    btnGradient: "from-blue-600 to-indigo-600",
  },
  {
    name: "jmrashed / laravel-installer",
    description: "A simple installer scaffold for Laravel applications to speed up new project setup and onboarding.",
    github: "https://github.com/jmrashed/laravel-installer",
    packagist: "https://packagist.org/packages/jmrashed/laravel-installer",
    color: "border-green-500/20",
    titleColor: "text-green-300",
    btnGradient: "from-green-600 to-teal-500",
  },
  {
    name: "jmrashed-api-rate-limiter",
    description: "A lightweight API rate-limiting middleware/package to protect endpoints and ensure fair usage for public APIs.",
    github: "https://github.com/jmrashed/jmrashed-api-rate-limiter",
    packagist: "https://packagist.org/packages/jmrashed/jmrashed-api-rate-limiter",
    color: "border-purple-500/20",
    titleColor: "text-purple-300",
    btnGradient: "from-purple-600 to-pink-500",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Open Source & Packages"
          subtitle="Maintainer of popular packages and tools used by developers — contributions include integrations for biometric devices, Laravel installers, and API rate limiting utilities."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1}>
              <div className={`p-6 card-glass border ${pkg.color} h-full flex flex-col`}>
                <h3 className={`text-lg font-bold ${pkg.titleColor} mb-2`}>{pkg.name}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{pkg.description}</p>
                <div className="flex items-center gap-3">
                  <Link
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${pkg.btnGradient} rounded-lg text-sm font-semibold`}
                  >
                    <GitFork className="w-4 h-4" /> GitHub
                  </Link>
                  <Link
                    href={pkg.packagist}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  >
                    Packagist
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://github.com/jmrashed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            <GitFork className="w-5 h-5" /> View My GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
