"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Clock,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { useCart } from "@/hooks/useCart";
import { mainNavLinks } from "@/lib/nav";
import { cx } from "@/utils/helpers";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="hidden bg-navy text-slate-300 md:block">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-6 px-4 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                Lower Bedi Rd, Nakuru, Kenya
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5 text-primary" aria-hidden="true" />
                <a href="tel:0733321945" className="hover:text-white">
                  0733 321945
                </a>
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" aria-hidden="true" />
              Mon-Fri: 9:00 AM - 5:00 PM
            </span>
          </div>
        </div>

        <div
          className={cx(
            "border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300",
            scrolled ? "shadow-sm" : ""
          )}
        >
          <div
            className={cx(
              "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
              scrolled ? "py-2.5" : "py-4"
            )}
          >
            <Link href="/" aria-label="RUMISH LTD - Home" className="shrink-0">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {mainNavLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cx(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/search"
                className="flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy"
                aria-label="Search products"
              >
                <Search className="size-5" aria-hidden="true" />
              </Link>

              <Link
                href="/cart"
                className="relative flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy"
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingCart className="size-5" aria-hidden="true" />
                {itemCount > 0 ? (
                  <span className="absolute -right-0.5 -top-0.5 flex min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">
                    {itemCount}
                  </span>
                ) : null}
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  );
}
