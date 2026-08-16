import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/utils/helpers";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center",
        className
      )}
    >
      {icon ? (
        <div className="flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      {description ? (
        <p className="max-w-sm text-sm text-slate-500">{description}</p>
      ) : null}
      {action ? (
        <Button href={action.href} variant="primary" className="mt-2">
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
