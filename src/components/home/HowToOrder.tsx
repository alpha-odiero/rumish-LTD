import { CheckCircle, ClipboardList, PackageCheck, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Browse",
    description: "Explore products and categories.",
  },
  {
    icon: PackageCheck,
    step: "2",
    title: "Add to Cart",
    description: "Select products and quantities.",
  },
  {
    icon: ClipboardList,
    step: "3",
    title: "Send Your Order",
    description: "Review your cart and send the order through WhatsApp.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Confirmation",
    description: "RUMISH LTD confirms availability, pricing and delivery details.",
  },
];

export function HowToOrder() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="How to Order"
          subtitle="Ordering from RUMISH LTD is simple and convenient."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </div>
                <span className="text-4xl font-extrabold text-slate-100">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
