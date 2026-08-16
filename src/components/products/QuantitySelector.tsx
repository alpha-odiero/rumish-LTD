"use client";

import { Minus, Plus } from "lucide-react";
import { cx } from "@/utils/helpers";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
  "aria-label"?: string;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 999,
  size = "md",
  className,
  ...props
}: QuantitySelectorProps) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cx(
        "inline-flex items-center rounded-lg border border-slate-300 bg-white",
        size === "md" ? "h-11" : "h-9",
        className
      )}
    >
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className={cx(
          "flex items-center justify-center text-slate-600 transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-40",
          size === "md" ? "size-11" : "size-9"
        )}
        aria-label="Decrease quantity"
      >
        <Minus className="size-4" aria-hidden="true" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(event) => {
          const next = Number(event.target.value);
          if (Number.isFinite(next)) {
            onChange(Math.min(max, Math.max(min, Math.floor(next))));
          }
        }}
        className={cx(
          "w-12 border-x border-slate-200 bg-transparent text-center text-sm font-semibold text-slate-900 focus:outline-none",
          size === "md" ? "py-2.5" : "py-1.5"
        )}
        aria-label="Quantity"
        {...props}
      />
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className={cx(
          "flex items-center justify-center text-slate-600 transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-40",
          size === "md" ? "size-11" : "size-9"
        )}
        aria-label="Increase quantity"
      >
        <Plus className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
