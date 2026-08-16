import { ServiceCard } from "@/components/services/ServiceCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services",
  description:
    "Supporting homeowners, builders, contractors and businesses with reliable hardware supplies and convenient service.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Our Services
        </h1>
        <p className="mt-4 text-slate-500">
          Supporting homeowners, builders, contractors and businesses with
          reliable hardware supplies and convenient service.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-soft p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Need Something Specific?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Can&apos;t find what you need? Talk to RUMISH LTD directly and we
          will help source the right products for your project.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            message="Hello RUMISH LTD, I have a question about your services."
            size="lg"
          >
            Chat with Us
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
