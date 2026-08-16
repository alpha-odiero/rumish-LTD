import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductImage } from "@/components/products/ProductImage";
import { Badge } from "@/components/ui/Badge";
import { getCategory } from "@/data/categories";
import type { Product } from "@/types";
import { cx, formatPrice } from "@/utils/helpers";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const category = getCategory(product.category);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cx(
        "group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        <ProductImage product={product} />
        {product.badge || product.popular ? (
          <div className="absolute left-3 top-3">
            <Badge variant={product.badge ? "accent" : "default"}>
              {product.badge ?? (product.popular ? "Popular" : "")}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {category?.name ?? product.category}
        </span>
        <h3 className="text-base font-bold leading-snug text-navy">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-500">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div>
            {typeof product.price === "number" ? (
              <>
                <p className="text-lg font-bold text-navy">
                  {formatPrice(product.price)}
                </p>
                <p className="text-xs text-slate-400">{product.unit}</p>
              </>
            ) : (
              <>
                <p className="text-sm font-bold text-primary">Request Price</p>
                <p className="text-xs text-slate-400">{product.unit}</p>
              </>
            )}
          </div>
          <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
