"use client";

import { Suspense, useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "all";

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        !normalized ||
        [product.name, product.shortDescription, product.description, product.category]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Products
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Browse our collection of quality hardware and construction supplies.
        </p>
      </div>

      <ProductFilters
        query={query}
        onQueryChange={setQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        resultCount={filtered.length}
      />

      <div className="mt-8">
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <EmptyState
            icon={<PackageSearch className="size-7" aria-hidden="true" />}
            title="No products found"
            description="Try a different search term or category."
            action={{ label: "Browse All Products", href: "/products" }}
          />
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingState label="Loading products..." />}>
      <ProductsContent />
    </Suspense>
  );
}
