import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="Featured Products"
          subtitle="Popular products for construction, repairs and home improvement."
        />
        <div className="mt-12">
          <ProductGrid products={getFeaturedProducts()} />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/products" variant="outline" size="lg">
            View All Products
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
