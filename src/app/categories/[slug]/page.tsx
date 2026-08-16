import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CategoryProducts } from "@/components/categories/CategoryProducts";
import { CategoryIcon } from "@/components/ui/icons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { categories, getCategory } from "@/data/categories";
import { getCategoryImage } from "@/data/images";
import { getProductsByCategory } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: category.name,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);
  const categoryImage = getCategoryImage(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
      />

      {categoryImage ? (
        <div className="relative mt-8 aspect-[16/5] w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={categoryImage}
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
        <div
          className={`flex size-16 shrink-0 items-center justify-center rounded-xl ${category.tint}`}
        >
          <CategoryIcon name={category.icon} className="size-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-2xl text-slate-500">{category.description}</p>
        </div>
      </div>

      <div className="mt-10">
        <CategoryProducts products={categoryProducts} />
      </div>
    </div>
  );
}
