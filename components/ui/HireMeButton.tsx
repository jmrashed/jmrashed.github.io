"use client";

import { Handshake } from "lucide-react";
import { CSSProperties } from "react";

interface HireMeButtonProps {
  className?: string;
  style?: CSSProperties;
  label?: string;
}

export default function HireMeButton({ className, style, label = "Hire Me" }: HireMeButtonProps) {
  const openModal = () => {
    const modal = document.getElementById("hire-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <button onClick={openModal} className={className} style={style}>
      <Handshake className="w-4 h-4" /> {label}
    </button>
  );
}
