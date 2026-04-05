"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { X, Download, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export default function HireMeModal() {
  const { register, handleSubmit, reset } = useForm<{
    name: string;
    email: string;
    availability: string;
    message: string;
  }>();

  const close = () => {
    const modal = document.getElementById("hire-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const onSubmit = (data: { name: string; email: string; availability: string; message: string }) => {
    const subject = encodeURIComponent(`Hire Request — ${data.availability} — ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nAvailability: ${data.availability}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setTimeout(() => { close(); reset(); }, 500);
  };

  return (
    <div id="hire-modal" className="fixed inset-0 z-50 hidden items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={close}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-modal-title"
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 shadow-2xl">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 id="hire-modal-title" className="text-2xl font-bold text-blue-300">Hire Me</h3>
              <p className="text-gray-300 text-sm mt-1">
                Available: Full-time · Part-time · Freelance — Dhaka, Bangladesh (remote-ready)
              </p>
            </div>
            <button onClick={close} aria-label="Close modal" className="text-gray-400 hover:text-white ml-4">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">Your Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Availability</label>
              <select
                {...register("availability")}
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Freelance / Short-term</option>
                <option>Part-time</option>
                <option>Full-time</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Brief Message</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell me about your project or role..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <Link
                href={siteConfig.cvPath}
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-semibold"
              >
                <Download className="w-4 h-4" /> Resume
              </Link>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Request
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded-lg text-sm text-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
