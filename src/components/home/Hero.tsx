import Image from "next/image";
import { BadgePercent, Boxes, ShieldCheck, Truck } from "lucide-react";
import cement from "@/assets/cement.jpg";
import electricCable from "@/assets/electric cable.jpg";
import ironSheet from "@/assets/iron sheet.jpg";
import wheelbarrow from "@/assets/wheelbarrow.jpg";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProduct } from "@/data/products";

const trustIndicators = [
  { icon: ShieldCheck, label: "Quality Products" },
  { icon: BadgePercent, label: "Competitive Prices" },
  { icon: Boxes, label: "Bulk Orders" },
  { icon: Truck, label: "Delivery Available" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="RUMISH LTD"
            title="Everything You Need to Build, Repair and Improve."
            align="left"
            as="h1"
            className="gap-4"
          />
          <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            RUMISH LTD provides quality building materials, roofing supplies,
            plumbing products, electrical equipment, paints, tools and general
            hardware products &mdash; all in one place.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/products" size="lg">
              Shop Products
            </Button>
            <Button href="/quote" variant="outline" size="lg">
              Request a Quote
            </Button>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {trustIndicators.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <item.icon className="size-4.5 text-primary" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

const heroImages = {
  "portland-cement": cement,
  "corrugated-iron-sheets": ironSheet,
  "electrical-cable": electricCable,
  wheelbarrow,
} as const;

function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {(
          Object.entries(heroImages) as [
            keyof typeof heroImages,
            (typeof heroImages)[keyof typeof heroImages],
          ][]
        ).map(([slug, image]) => {
          const product = getProduct(slug);
          if (!product) return null;
          return (
            <div
              key={slug}
              className="flex flex-col gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 25vw, 320px"
                  className="object-cover"
                />
              </div>
              <span className="truncate text-xs font-semibold text-slate-500">
                {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
