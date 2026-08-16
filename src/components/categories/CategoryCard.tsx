import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CategoryIcon } from "@/components/ui/icons";
import { getCategoryImage } from "@/data/images";
import type { Category } from "@/types";
import { cx } from "@/utils/helpers";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const image = getCategoryImage(category.slug);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cx(
        "group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-0 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm",
        className
      )}
    >
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-slate-100">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mt-5 flex size-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <CategoryIcon name={category.icon} className="size-6" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold text-navy">{category.name}</h3>
          <ArrowRight
            className="size-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-slate-500">{category.shortDescription}</p>
      </div>
    </Link>
  );
}
