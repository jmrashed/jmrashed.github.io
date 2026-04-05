"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { SocialLink } from "@/types";
import { siteConfig } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface ContactProps {
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

export default function Contact({ socialLinks }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all";

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Ready to bring your next project to life? Let's discuss how I can help you achieve your goals."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <Link href={`mailto:${siteConfig.email}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-purple-300">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">Social Links</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target={link.target}
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.description}
                      className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 text-xs font-bold text-gray-300"
                    >
                      {iconMap[link.icon] ?? link.name.slice(0, 2)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                    <input {...register("name")} type="text" className={inputClass} placeholder="Your name" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                    <input {...register("email")} type="email" className={inputClass} placeholder="Your email" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
                  <input {...register("subject")} type="text" className={inputClass} placeholder="Project inquiry" />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                  <textarea {...register("message")} rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Something went wrong. Please try again or email directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-60 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
