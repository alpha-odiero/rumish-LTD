"use client";

import { useEffect, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export function AddToCartButton({
  product,
  quantity = 1,
  size = "md",
  fullWidth = false,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1600);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <Button
      type="button"
      onClick={() => {
        addItem(product, quantity);
        setAdded(true);
      }}
      variant={added ? "success" : "primary"}
      size={size}
      fullWidth={fullWidth}
      className={className}
      aria-label={`Add ${product.name} to cart`}
    >
      {added ? (
        <>
          <Check className="size-4.5" aria-hidden="true" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="size-4.5" aria-hidden="true" />
          Add to Cart
        </>
      )}
    </Button>
  );
}
