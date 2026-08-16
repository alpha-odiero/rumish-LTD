import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductActions } from "@/components/products/ProductActions";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getCategory,
  getCategoryName,
} from "@/data/categories";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";
import { formatPrice } from "@/utils/helpers";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const category = getCategory(product.category);
  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: getCategoryName(product.category), href: `/categories/${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <ProductImage product={product} className="aspect-square" />
        </div>

        <div className="flex flex-col gap-5">
          {product.badge ? (
            <div>
              <Badge variant="accent">{product.badge}</Badge>
            </div>
          ) : null}

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
              {category?.name ?? getCategoryName(product.category)}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {product.name}
            </h1>
          </div>

          {typeof product.price === "number" ? (
            <div>
              <p className="text-3xl font-bold text-navy">
                {formatPrice(product.price)}
              </p>
              <p className="mt-1 text-sm text-slate-400">per {product.unit.toLowerCase()}</p>
            </div>
          ) : (
            <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-primary">
              Request Price - contact RUMISH LTD for pricing
            </div>
          )}

          <p className="text-base leading-relaxed text-slate-500">
            {product.description}
          </p>

          <ProductActions product={product} />

          <dl className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
            {product.brand ? (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Brand</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">{product.brand}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Unit</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">{product.unit}</dd>
            </div>
            {product.size ? (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Size</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">{product.size}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-navy">Product Description</h2>
          <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>
        </div>

        {Object.keys(product.specification).length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <h2 className="border-b border-slate-200 bg-soft px-5 py-4 text-lg font-bold text-navy">
              Specifications
            </h2>
            <dl>
              {Object.entries(product.specification).map(([key, value], index) => (
                <div
                  key={key}
                  className={
                    index > 0
                      ? "flex items-center justify-between border-t border-slate-100 px-5 py-3"
                      : "flex items-center justify-between px-5 py-3"
                  }
                >
                  <dt className="text-sm text-slate-500">{key}</dt>
                  <dd className="text-sm font-semibold text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>

      <div className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="You May Also Like"
          title="Related Products"
        />
        <div className="mt-8">
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
}
