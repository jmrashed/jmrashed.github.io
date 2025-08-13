"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionInView = () => {
      // Only run section detection on home page
      if (pathname === "/") {
        const sections = ["hero", "expertise", "experience", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionInView);
    handleScroll();
    handleSectionInView();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionInView);
    };
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsBlogsDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 text-white"
          : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 text-gray-900"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-serif text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
              aria-label="Homepage"
            >
              Rashed Zaman
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-indigo-600"
                      : "text-indigo-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-indigo-600"
                    : "text-gray-300 hover:text-white"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}

            <Link 
              href="/blogs" 
              className={`transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded cursor-pointer ${
                pathname === "/blogs"
                  ? isScrolled
                    ? "text-indigo-600"
                    : "text-indigo-400"
                  : isScrolled
                  ? "text-gray-700 hover:text-indigo-600"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Blogs
            </Link>

            <Link href="/projects">
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={
                  isScrolled
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                }
              >
                View Projects
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-gray-300"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav aria-label="Mobile navigation">
              <ul className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-md font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
                        activeSection === item.id
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}

                <li>
                  <Link
                    href="/blogs"
                    className={`block w-full text-left px-4 py-3 rounded-md font-medium transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
                      pathname === "/blogs"
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/projects" 
                    className="block" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white min-h-[44px] cursor-pointer">
                      View Projects
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}