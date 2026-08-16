import { ArrowRight, Boxes, Building2, Check, HardHat, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About RUMISH LTD",
  description:
    "A Nakuru-based hardware business helping homeowners, builders, contractors and developers access reliable construction materials.",
};

const served = [
  { icon: Building2, label: "Homeowners" },
  { icon: HardHat, label: "Builders" },
  { icon: Users, label: "Contractors" },
  { icon: Boxes, label: "Businesses" },
  { icon: Building2, label: "Property Developers" },
];

const reasons = [
  "Wide range of products",
  "Competitive pricing",
  "Convenient ordering",
  "Bulk supply support",
  "Customer-focused service",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          About RUMISH LTD
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
          RUMISH LTD is a Nakuru-based hardware business committed to helping
          homeowners, builders, contractors, businesses and property developers
          access reliable construction materials and quality hardware supplies.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-slate-200 bg-soft p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          To provide reliable hardware products, quality building materials and
          convenient service for construction, repair and improvement projects.
        </p>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Who We Serve" title="Who We Serve" />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {served.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
            >
              <item.icon className="size-4.5 text-primary" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose RUMISH LTD?"
        />
        <ul className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-3.5 text-primary" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Browse Our Products
        </h2>
        <p className="mt-3 text-slate-500">
          Explore our full range of quality hardware and building supplies.
        </p>
        <Button href="/products" size="lg" className="mt-6">
          Browse Products
          <ArrowRight className="size-4.5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
