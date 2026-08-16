"use client";

import { Suspense, useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";
import { SearchInput } from "@/components/ui/SearchInput";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const normalized = query.trim().toLowerCase();

  const matchedProducts = useMemo(() => {
    if (!normalized) return [];
    return products.filter((product) =>
      [product.name, product.shortDescription, product.description, product.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  const matchedCategories = useMemo(() => {
    if (!normalized) return [];
    return categories.filter((category) =>
      [category.name, category.shortDescription, category.description]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  const hasQuery = normalized.length > 0;
  const hasResults = matchedProducts.length > 0 || matchedCategories.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Search
        </h1>
        <p className="mt-3 text-slate-500">
          Find the products, materials or categories you need.
        </p>
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search for products, materials or categories..."
          autoFocus
          className="mt-8"
          aria-label="Search for products, materials or categories"
        />
      </div>

      {!hasQuery ? (
        <p className="mt-12 text-center text-sm text-slate-400">
          Start typing to search our catalogue.
        </p>
      ) : hasResults ? (
        <div className="mt-12 flex flex-col gap-12">
          {matchedProducts.length > 0 ? (
            <section aria-labelledby="search-products-heading">
              <h2
                id="search-products-heading"
                className="text-xl font-bold text-navy"
              >
                Products ({matchedProducts.length})
              </h2>
              <div className="mt-6">
                <ProductGrid products={matchedProducts} />
              </div>
            </section>
          ) : null}

          {matchedCategories.length > 0 ? (
            <section aria-labelledby="search-categories-heading">
              <h2
                id="search-categories-heading"
                className="text-xl font-bold text-navy"
              >
                Categories ({matchedCategories.length})
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {matchedCategories.map((category) => (
                  <CategoryCard key={category.slug} category={category} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      ) : (
        <div className="mt-12">
          <EmptyState
            icon={<SearchX className="size-7" aria-hidden="true" />}
            title={`We couldn't find anything matching "${query}".`}
            description="Check the spelling or try a more general search term."
            action={{ label: "Browse All Products", href: "/products" }}
          />
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingState label="Loading search..." />}>
      <SearchContent />
    </Suspense>
  );
}
