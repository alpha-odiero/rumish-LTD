import Image from "next/image";
import logo from "@/assets/rumiz ltd.png";
import { cx } from "@/utils/helpers";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <span
      className={cx("inline-flex items-center gap-2.5", className)}
      aria-label="RUMISH LTD"
    >
      <Image
        src={logo}
        alt="RUMISH LTD logo"
        width={36}
        height={36}
        className={cx(
          "shrink-0 rounded-lg object-contain",
          variant === "light" ? "bg-white" : ""
        )}
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cx(
            "text-lg font-extrabold tracking-tight",
            variant === "dark" ? "text-navy" : "text-white"
          )}
        >
          RUMISH
          <span className="text-primary"> LTD</span>
        </span>
        <span
          className={cx(
            "mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em]",
            variant === "dark" ? "text-slate-400" : "text-slate-300"
          )}
        >
          Hardware & Building Supplies
        </span>
      </span>
    </span>
  );
}
