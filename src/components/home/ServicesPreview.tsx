import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="More Than Just a Hardware Store"
          subtitle="Reliable supply support for homeowners, builders and contractors."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline" size="lg">
            Explore Our Services
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
