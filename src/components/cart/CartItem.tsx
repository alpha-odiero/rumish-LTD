"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";
import { ProductImage } from "@/components/products/ProductImage";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";
import { formatPrice } from "@/utils/helpers";

interface CartItemProps {
  product: Product;
  quantity: number;
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <li className="flex gap-4 border-b border-slate-200 py-5 last:border-0">
      <Link
        href={`/products/${product.slug}`}
        className="size-20 shrink-0 overflow-hidden rounded-lg border border-slate-200"
      >
        <ProductImage product={product} className="size-20" />
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/products/${product.slug}`}
              className="font-semibold text-navy hover:text-primary"
            >
              {product.name}
            </Link>
            <p className="mt-0.5 text-sm text-slate-400">{product.unit}</p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.slug)}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
            aria-label={`Remove ${product.name} from cart`}
          >
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <QuantitySelector value={quantity} onChange={(value) => updateQuantity(product.slug, value)} size="sm" />
          <div className="text-right">
            {typeof product.price === "number" ? (
              <>
                <p className="font-bold text-navy">
                  {formatPrice(product.price * quantity)}
                </p>
                <p className="text-xs text-slate-400">
                  {formatPrice(product.price)} each
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-primary">Request Price</p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
