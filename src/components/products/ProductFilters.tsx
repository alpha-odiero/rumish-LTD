"use client";

import { SearchInput } from "@/components/ui/SearchInput";
import { categories } from "@/data/categories";
import { cx } from "@/utils/helpers";

interface ProductFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  resultCount: number;
}

export function ProductFilters({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
  resultCount,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-5">
      <SearchInput
        value={query}
        onChange={onQueryChange}
        placeholder="Search products..."
        aria-label="Search products"
      />

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter products by category"
      >
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={cx(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "border-primary bg-primary text-white"
              : "border-slate-300 bg-white text-slate-600 hover:border-primary hover:text-primary"
          )}
          aria-pressed={activeCategory === "all"}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => onCategoryChange(category.slug)}
            className={cx(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === category.slug
                ? "border-primary bg-primary text-white"
                : "border-slate-300 bg-white text-slate-600 hover:border-primary hover:text-primary"
            )}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-500">
        {resultCount} {resultCount === 1 ? "product" : "products"}
        {query ? ` for "${query}"` : ""}
      </p>
    </div>
  );
}
