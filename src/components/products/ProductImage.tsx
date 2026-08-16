import Image from "next/image";
import { CategoryIcon } from "@/components/ui/icons";
import { getCategory } from "@/data/categories";
import { getCategoryImage, getProductImage } from "@/data/images";
import type { Product } from "@/types";
import { cx } from "@/utils/helpers";

interface ProductImageProps {
  product: Product;
  className?: string;
  iconClassName?: string;
}

export function ProductImage({
  product,
  className,
  iconClassName,
}: ProductImageProps) {
  const category = getCategory(product.category);
  const tint = category?.tint ?? "bg-slate-100 text-slate-600";
  const image = getProductImage(product.slug) ?? getCategoryImage(product.category);

  if (image) {
    return (
      <div
        className={cx(
          "relative aspect-square w-full overflow-hidden bg-slate-100",
          className
        )}
        role="img"
        aria-label={`${product.name} visual`}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cx(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden",
        tint,
        className
      )}
      role="img"
      aria-label={`${product.name} visual`}
    >
      <svg
        className="absolute inset-0 size-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`dots-${product.slug}`}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${product.slug})`} />
      </svg>
      <CategoryIcon
        name={category?.icon ?? "Package"}
        className={cx("relative size-16 text-current sm:size-20", iconClassName)}
      />
    </div>
  );
}
