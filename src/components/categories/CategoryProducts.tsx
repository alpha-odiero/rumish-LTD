"use client";

import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchInput } from "@/components/ui/SearchInput";
import type { Product } from "@/types";

interface CategoryProductsProps {
  products: Product[];
}

export function CategoryProducts({ products }: CategoryProductsProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return products;
    return products.filter((product) =>
      [product.name, product.shortDescription, product.description]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query, products]);

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder={`Search ${products.length} products...`}
        aria-label="Search products in this category"
      />
      <p className="mt-4 text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>
      <div className="mt-6">
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <EmptyState
            icon={<PackageSearch className="size-7" aria-hidden="true" />}
            title="No products found"
            description="Try a different search term."
          />
        )}
      </div>
    </div>
  );
}
