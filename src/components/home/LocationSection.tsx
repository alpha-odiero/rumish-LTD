import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  BUSINESS_HOURS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  SITE_ADDRESS,
  SITE_PHONE,
} from "@/lib/site";
import { buildGeneralInquiryMessage } from "@/lib/whatsapp";

export function LocationSection() {
  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Location"
          title="Visit RUMISH LTD"
          subtitle="Find us in Nakuru for all your hardware and building supplies."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Address</h3>
                <p className="mt-1 text-slate-500">{SITE_ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Phone</h3>
                <a
                  href="tel:0733321945"
                  className="mt-1 inline-block text-slate-500 hover:text-primary"
                >
                  {SITE_PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                href={MAPS_DIRECTIONS_URL}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </Button>
              <WhatsAppButton message={buildGeneralInquiryMessage()}>
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
            aria-label="Map location"
          >
            <iframe
              src={MAPS_EMBED_URL}
              title={`Map showing ${SITE_ADDRESS}`}
              className="h-full min-h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
