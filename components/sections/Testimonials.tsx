"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "Rashed led our distributed engineering team with clarity and focus. He improved our CI/CD pipelines and reduced deployment time by 40%.",
    name: "Client — Acme Corp",
    initials: "CL",
    color: "bg-blue-600",
  },
  {
    quote: "His asynchronous workflow and documentation practices made onboarding remote engineers painless. Communication was excellent.",
    name: "Product Manager — FinTech Co",
    initials: "PM",
    color: "bg-green-600",
  },
  {
    quote: "Rashed is a strong technical leader — excellent mentor and reliable remote collaborator. He delivered our microservice migration on time.",
    name: "Lead Developer — Startup X",
    initials: "LD",
    color: "bg-purple-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          subtitle="Feedback from clients and colleagues about working with me on remote projects."
        />

        <div className="relative">
          <div className="p-8 bg-gradient-to-br from-slate-900/40 to-slate-800/40 rounded-2xl border border-gray-700 min-h-[160px]">
            <p className="text-gray-200 italic text-lg leading-relaxed">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${testimonials[current].color} flex items-center justify-center font-bold text-sm`}>
                {testimonials[current].initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{testimonials[current].name}</div>
                <a href="https://www.linkedin.com/in/jmrashed/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-300 hover:underline">
                  LinkedIn recommendation
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="p-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-blue-500" : "bg-gray-600"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
