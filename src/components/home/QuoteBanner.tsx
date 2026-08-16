import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function QuoteBanner() {
  return (
    <section className="bg-navy py-16 sm:py-20" aria-labelledby="quote-banner-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2
              id="quote-banner-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Planning a Bigger Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Send us the materials and quantities you need and request a
              quotation from RUMISH LTD.
            </p>
          </div>
          <Button href="/quote" size="lg" className="shrink-0">
            Request a Quote
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
