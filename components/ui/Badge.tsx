import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "purple" | "orange";
  className?: string;
}

const variants = {
  blue: "bg-blue-600/20 text-blue-300 border-blue-500/30",
  green: "bg-green-600/20 text-green-300 border-green-500/30",
  purple: "bg-purple-600/20 text-purple-300 border-purple-500/30",
  orange: "bg-orange-600/20 text-orange-300 border-orange-500/30",
};

export default function Badge({
  children,
  variant = "green",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs border font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
