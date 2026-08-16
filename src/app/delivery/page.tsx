import { MapPin, MessageCircle, PackageCheck, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { buildDeliveryInquiryMessage } from "@/lib/whatsapp";

export const metadata = {
  title: "Delivery & Collection",
  description:
    "Delivery options and collection arrangements from RUMISH LTD in Nakuru.",
};

const sections = [
  {
    icon: Truck,
    title: "Local Delivery",
    description:
      "Delivery can be arranged within Nakuru and surrounding areas. Speak to us about the areas we cover and delivery times.",
  },
  {
    icon: MapPin,
    title: "Project Site Delivery",
    description:
      "Bulk materials can be delivered directly to project sites depending on order requirements. Ideal for ongoing construction works.",
  },
  {
    icon: Wrench,
    title: "Delivery Charges",
    description:
      "Delivery costs may depend on the distance, delivery location, size of the order and the type of products being delivered.",
  },
  {
    icon: PackageCheck,
    title: "Collection",
    description:
      "Customers can contact RUMISH LTD to arrange product collection from our premises on Lower Bedi Rd, Nakuru.",
  },
];

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Delivery &amp; Collection
        </h1>
        <p className="mt-4 text-slate-500">
          Flexible delivery and collection options to suit your project,
          wherever it is in and around Nakuru.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-slate-200 bg-white p-7"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <section.icon className="size-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-navy">{section.title}</h2>
            <p className="mt-2 leading-relaxed text-slate-500">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-xl bg-soft p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Arrange Your Delivery
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Send us a message on WhatsApp and we will help arrange delivery or
          collection for your order.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton message={buildDeliveryInquiryMessage()} size="lg">
            Ask About Delivery
          </WhatsAppButton>
          <Button
            href={`https://wa.me/254733321945?text=${encodeURIComponent(
              "Hello RUMISH LTD, I would like to place an order. Please assist me with delivery."
            )}`}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4.5" aria-hidden="true" />
            Order via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
