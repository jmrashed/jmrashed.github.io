import Link from "next/link";
import type { SocialLink } from "@/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

const iconMap: Record<string, string> = {
  "bi-linkedin": "in",
  "bi-github": "GH",
  "bi-x": "X",
  "bi-medium": "M",
  "bi-behance": "Be",
  "bi-stack": "SO",
  "bi-code": "CP",
  "bi-code-slash": "LC",
  "bi-terminal": "HR",
  "bi-brush": "Dr",
};

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="relative pt-16 pb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6366f1, #f59e0b, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #f59e0b)" }}
            >
              RZ
            </span>
            <span className="text-xl font-bold gradient-text">Rashed Zaman</span>
          </div>

          <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
            Tech Lead passionate about creating innovative solutions and leading high-performing teams.
            Let&apos;s build something amazing together.
          </p>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.target}
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.description}
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-xs font-bold text-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {iconMap[link.icon] ?? link.name.slice(0, 2)}
              </Link>
            ))}
          </div>

          <div
            className="w-full h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Rashed Zaman. All rights reserved. · Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
