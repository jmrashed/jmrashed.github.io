"use client"

import { latestBlogs } from "@/app/blogs/blogs-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rashed-zaman", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/jmrashed", color: "hover:text-gray-600" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/rasheduzzaman", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:jmrashed@gmail.com", color: "hover:text-indigo-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">Rashed Zaman</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Senior Technology Leader driving innovation through scalable solutions and high-performing teams.
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <MapPin className="h-4 w-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="h-4 w-4" />
              <span>Available for remote opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Latest 5 blogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Recent Blogs</h4>
            <ul className="space-y-3">
              {latestBlogs.slice(0, 5).map((blog) => (
                <li key={blog.slug}>
                  <Link
  href={`/blogs/${blog.slug}`}
  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
>
  <span className="inline-block max-w-[200px] truncate transition-transform duration-200 group-hover:translate-x-1">
    {blog.title.length > 50 ? `${blog.title.substring(0, 50)}...` : blog.title}
  </span>
</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:jmrashed@gmail.com" className="hover:text-white transition-colors">
                  jmrashed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+88 01734446514</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Stay Updated</h4>
                  <p className="text-gray-400">
                    Get the latest insights on technology leadership and software architecture.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-80">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap">Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 Rashed Zaman. All rights reserved. Built with Next.js and Tailwind CSS.
            </motion.p>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Back to top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
