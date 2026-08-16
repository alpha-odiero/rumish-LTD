import type { HTMLAttributes } from "react";
import { cx } from "@/utils/helpers";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-xl border border-slate-200 bg-white",
        className
      )}
      {...props}
    />
  );
}
