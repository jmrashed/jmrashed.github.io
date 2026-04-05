import Link from "next/link";
import type { SocialLink } from "@/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

// Map Bootstrap icon names to simple SVG paths or use text fallback
const iconMap: Record<string, string> = {
  "bi-linkedin": "LinkedIn",
  "bi-github": "GitHub",
  "bi-x": "X",
  "bi-medium": "Medium",
  "bi-behance": "Behance",
  "bi-stack": "SO",
  "bi-code": "CP",
  "bi-code-slash": "LC",
  "bi-terminal": "HR",
  "bi-brush": "Dribbble",
};

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold gradient-text mb-4">Rashed Zaman</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Tech Lead passionate about creating innovative solutions and leading
          high-performing teams. Let&apos;s build something amazing together.
        </p>

        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.target}
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.description}
              className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 text-xs font-bold text-gray-300"
            >
              {iconMap[link.icon] ?? link.name.slice(0, 2)}
            </Link>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rashed Zaman. All rights reserved. |
            Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
