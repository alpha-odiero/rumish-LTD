import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export function CategorySection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="category-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Shop by Category"
          subtitle="Find the right materials and supplies for your next project."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
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
