"use client";

import { ArrowLeft, MessageCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { getProduct } from "@/data/products";
import { buildOrderMessage } from "@/lib/whatsapp";
import { formatPrice } from "@/utils/helpers";

export function CartSummary() {
  const { items, estimatedTotal, hasRequestPriceItems, clearCart } = useCart();

  const sendOrder = () => {
    const orderItems = items
      .map((item) => {
        const product = getProduct(item.productSlug);
        return product ? { product, quantity: item.quantity } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (orderItems.length === 0) return;

    const message = buildOrderMessage(orderItems);
    window.open(
      `https://wa.me/254733321945?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-bold text-navy">Order Summary</h2>

      <dl className="space-y-3">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-slate-500">Items</dt>
          <dd className="text-sm font-medium text-slate-900">{items.length}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3">
          <dt className="text-sm font-medium text-slate-700">Estimated Total</dt>
          <dd className="text-2xl font-bold text-navy">
            {formatPrice(estimatedTotal)}
          </dd>
        </div>
      </dl>

      {hasRequestPriceItems ? (
        <p className="rounded-lg bg-blue-50 px-3.5 py-2.5 text-xs leading-relaxed text-blue-700">
          Some items are marked &quot;Request Price&quot;. RUMISH LTD will
          confirm final pricing for these items.
        </p>
      ) : null}

      <Button
        type="button"
        onClick={sendOrder}
        variant="whatsapp"
        size="lg"
        fullWidth
      >
        <MessageCircle className="size-4.5" aria-hidden="true" />
        Send Order via WhatsApp
      </Button>

      <Button href="/products" variant="outline" fullWidth>
        <ArrowLeft className="size-4" aria-hidden="true" />
        Continue Shopping
      </Button>

      <button
        type="button"
        onClick={clearCart}
        className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-red-600"
      >
        <Trash2 className="size-4" aria-hidden="true" />
        Clear cart
      </button>
    </div>
  );
}
