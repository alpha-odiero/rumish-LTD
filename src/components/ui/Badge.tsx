import type { ReactNode } from "react";
import { cx } from "@/utils/helpers";

type Variant = "default" | "accent" | "success" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  default: "bg-primary/10 text-primary",
  accent: "bg-amber-50 text-amber-700",
  success: "bg-whatsapp/10 text-whatsapp-dark",
  outline: "border border-slate-200 bg-white text-slate-600",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
