import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerCategoryLinks, quickLinks } from "@/lib/nav";
import {
  BUSINESS_HOURS,
  MAPS_DIRECTIONS_URL,
  SITE_ADDRESS,
  SITE_PHONE,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-slate-400">
              Quality building materials, roofing supplies, plumbing products,
              electrical equipment, paints, tools and general hardware - all in
              one place in Nakuru.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-whatsapp text-white transition-colors hover:bg-whatsapp-dark"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
              </a>
              <a
                href="tel:0733321945"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-primary hover:text-primary"
                aria-label="Call RUMISH LTD"
              >
                <Phone className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCategoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {SITE_ADDRESS}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:0733321945" className="hover:text-white">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-slate-300">Business Hours</p>
                  {BUSINESS_HOURS.map((hours) => (
                    <p key={hours.day} className="mt-0.5">
                      {hours.day}: {hours.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 RUMISH LTD. All rights reserved.</p>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Lower Bedi Rd, Nakuru, Kenya
          </a>
        </div>
      </div>
    </footer>
  );
}
