"use client";

import { useEffect } from "react";
import { MapPin, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SITE_ADDRESS, SITE_PHONE, WHATSAPP_NUMBER } from "@/lib/site";
import { mainNavLinks } from "@/lib/nav";
import { cx } from "@/utils/helpers";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <div
      className={cx(
        "fixed inset-0 z-50 overflow-hidden lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cx(
          "absolute inset-0 bg-navy/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cx(
          "absolute inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile menu">
          <ul className="flex flex-col">
            {mainNavLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cx(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-slate-800 hover:bg-slate-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-slate-200 px-5 py-5">
          <Button
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            variant="whatsapp"
            size="lg"
            fullWidth
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4.5" aria-hidden="true" />
            Chat on WhatsApp
          </Button>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:0733321945" className="hover:text-primary">
                {SITE_PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{SITE_ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
