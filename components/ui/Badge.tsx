import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'orange';
  className?: string;
}

const variants = {
  blue: { bg: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: 'rgba(99,102,241,0.25)' },
  green: { bg: 'rgba(52,211,153,0.1)', color: '#6ee7b7', border: 'rgba(52,211,153,0.2)' },
  purple: { bg: 'rgba(192,132,252,0.1)', color: '#d8b4fe', border: 'rgba(192,132,252,0.2)' },
  orange: { bg: 'rgba(251,146,60,0.1)', color: '#fdba74', border: 'rgba(251,146,60,0.2)' },
};

export default function Badge({ children, variant = 'green', className }: BadgeProps) {
  const v = variants[variant];
  return (
    <span
      className={cn('px-2.5 py-0.5 rounded-md text-xs font-medium', className)}
      style={{ background: v.bg, color: v.color, border: `1px solid ${v.border}` }}
    >
      {children}
    </span>
  );
}
