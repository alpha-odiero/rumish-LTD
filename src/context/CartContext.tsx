"use client";

import { createContext, useCallback, useMemo, type ReactNode } from "react";
import { useSyncExternalStore } from "react";
import {
  addCartItem as storeAddItem,
  clearCartItems as storeClearCart,
  getCartServerSnapshot,
  getCartSnapshot,
  removeCartItem as storeRemoveItem,
  subscribeCart,
  updateCartQuantity as storeUpdateQuantity,
} from "@/lib/cartStore";
import { getProduct } from "@/data/products";
import type { CartItem, Product } from "@/types";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  estimatedTotal: number;
  hasRequestPriceItems: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productSlug: string) => void;
  updateQuantity: (productSlug: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(
    subscribeCart,
    getCartSnapshot,
    getCartServerSnapshot
  );

  const addItem = useCallback((product: Product, quantity = 1) => {
    storeAddItem(product.slug, quantity);
  }, []);

  const removeItem = useCallback((productSlug: string) => {
    storeRemoveItem(productSlug);
  }, []);

  const updateQuantity = useCallback((productSlug: string, quantity: number) => {
    storeUpdateQuantity(productSlug, quantity);
  }, []);

  const clearCart = useCallback(() => {
    storeClearCart();
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const estimatedTotal = items.reduce((sum, item) => {
      const product = getProduct(item.productSlug);
      return sum + (product?.price ?? 0) * item.quantity;
    }, 0);
    const hasRequestPriceItems = items.some((item) => {
      const product = getProduct(item.productSlug);
      return product?.requestPrice === true;
    });

    return {
      items,
      itemCount,
      estimatedTotal,
      hasRequestPriceItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [items, addItem, removeItem, updateQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
