export interface Category {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  tint: string;
  featured?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price?: number;
  unit: string;
  brand?: string;
  size?: string;
  requestPrice?: boolean;
  featured?: boolean;
  popular?: boolean;
  badge?: string;
  specification: Record<string, string>;
}

export interface Service {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export interface CartItem {
  productSlug: string;
  quantity: number;
}
