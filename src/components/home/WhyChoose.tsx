import { BadgePercent, Boxes, MessageCircle, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description: "Reliable products for construction, repairs and home improvement.",
  },
  {
    icon: BadgePercent,
    title: "Competitive Prices",
    description: "Fair pricing for individual and bulk orders.",
  },
  {
    icon: Boxes,
    title: "Bulk Orders",
    description: "Support for contractors and larger construction projects.",
  },
  {
    icon: MessageCircle,
    title: "Easy Ordering",
    description: "Select your products and send your order directly through WhatsApp.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose RUMISH LTD?"
          subtitle="A hardware partner you can rely on for every project."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
