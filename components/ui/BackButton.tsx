"use client";

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full font-semibold hover:bg-white/5 transition-all"
    >
      <ArrowLeft className="w-4 h-4" /> Go Back
    </button>
  );
}
