"use client";

import type { CartItem } from "@/types";

const STORAGE_KEY = "rumish-cart";

const EMPTY_SNAPSHOT: CartItem[] = [];

let snapshot: CartItem[] = EMPTY_SNAPSHOT;
const listeners = new Set<() => void>();
let loaded = false;

function load(): CartItem[] {
  if (loaded || typeof window === "undefined") return snapshot;
  loaded = true;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    snapshot = stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    snapshot = [];
  }
  return snapshot;
}

function persist(next: CartItem[]) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage failures (e.g. private mode).
  }
  listeners.forEach((listener) => listener());
}

export function subscribeCart(listener: () => void): () => void {
  load();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getCartSnapshot(): CartItem[] {
  return load();
}

export function getCartServerSnapshot(): CartItem[] {
  return EMPTY_SNAPSHOT;
}

export function addCartItem(productSlug: string, quantity: number) {
  const safeQuantity = Math.max(1, Math.floor(quantity));
  load();
  const next = [...snapshot];
  const index = next.findIndex((item) => item.productSlug === productSlug);
  if (index >= 0) {
    next[index] = { ...next[index], quantity: next[index].quantity + safeQuantity };
  } else {
    next.push({ productSlug, quantity: safeQuantity });
  }
  persist(next);
}

export function removeCartItem(productSlug: string) {
  load();
  persist(snapshot.filter((item) => item.productSlug !== productSlug));
}

export function updateCartQuantity(productSlug: string, quantity: number) {
  load();
  persist(
    snapshot.map((item) =>
      item.productSlug === productSlug
        ? { ...item, quantity: Math.max(1, Math.floor(quantity)) }
        : item
    )
  );
}

export function clearCartItems() {
  load();
  persist([]);
}
