import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BUSINESS_HOURS, MAPS_DIRECTIONS_URL, SITE_ADDRESS, SITE_PHONE } from "@/lib/site";
import { buildGeneralInquiryMessage } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact RUMISH LTD",
  description:
    "Get in touch with RUMISH LTD in Nakuru for hardware and building supplies.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Contact RUMISH LTD
        </h1>
        <p className="mt-4 text-slate-500">
          Reach out for products, quotes, deliveries or any other inquiry.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-bold text-navy">Contact Information</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Visit Us</h3>
                  <p className="mt-1 text-slate-500">{SITE_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Call Us</h3>
                  <a
                    href="tel:0733321945"
                    className="mt-1 inline-block text-slate-500 hover:text-primary"
                  >
                    {SITE_PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <WhatsAppIcon />
                </div>
                <div>
                  <h3 className="font-bold text-navy">WhatsApp</h3>
                  <p className="mt-1 text-slate-500">{SITE_PHONE}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Business Hours</h3>
                  <ul className="mt-1 space-y-0.5 text-slate-500">
                    {BUSINESS_HOURS.map((hours) => (
                      <li key={hours.day}>
                        {hours.day}:{" "}
                        <span className={hours.hours === "Closed" ? "text-red-500" : ""}>
                          {hours.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="tel:0733321945" variant="secondary">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </Button>
              <WhatsAppButton message={buildGeneralInquiryMessage()}>
                Chat on WhatsApp
              </WhatsAppButton>
              <Button
                href={MAPS_DIRECTIONS_URL}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="sr-only">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}
