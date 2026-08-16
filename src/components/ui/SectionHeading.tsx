import type { ReactNode } from "react";
import { cx } from "@/utils/helpers";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className={cx(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </Heading>
      {subtitle ? (
        <p className={cx("max-w-2xl text-base text-slate-500", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
