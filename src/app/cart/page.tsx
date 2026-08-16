"use client";

import { ShoppingCart } from "lucide-react";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/ui/EmptyState";
import { useCart } from "@/hooks/useCart";
import { getProduct } from "@/data/products";

export default function CartPage() {
  const { items } = useCart();

  const cartProducts = items
    .map((item) => {
      const product = getProduct(item.productSlug);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Your Cart
      </h1>
      <p className="mt-3 text-slate-500">
        Review your items and send your order via WhatsApp when ready.
      </p>

      {cartProducts.length === 0 ? (
        <div className="mt-12">
          <EmptyState
            icon={<ShoppingCart className="size-7" aria-hidden="true" />}
            title="Your cart is empty."
            description="Browse our products and add the materials you need for your project."
            action={{ label: "Browse Products", href: "/products" }}
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-5 sm:px-7">
              {cartProducts.map(({ product, quantity }) => (
                <CartItem key={product.slug} product={product} quantity={quantity} />
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
