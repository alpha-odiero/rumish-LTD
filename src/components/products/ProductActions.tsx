"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { AddToCartButton } from "@/components/products/AddToCartButton";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { buildProductInquiryMessage } from "@/lib/whatsapp";
import type { Product } from "@/types";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-slate-600">Quantity</span>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <AddToCartButton product={product} quantity={quantity} size="lg" fullWidth className="sm:flex-1" />
        <Button
          href={`https://wa.me/254733321945?text=${encodeURIComponent(
            buildProductInquiryMessage(product)
          )}`}
          variant="outline"
          size="lg"
          fullWidth
          target="_blank"
          rel="noopener noreferrer"
          className="sm:flex-1"
        >
          <MessageCircle className="size-4.5" aria-hidden="true" />
          Ask on WhatsApp
        </Button>
      </div>
    </div>
  );
}
