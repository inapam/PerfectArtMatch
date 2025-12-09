// src/lib/types/product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: "CHF" | "EUR" | "USD" | string;
  category: string;
  image: string;
  relatedArtworkId?: string;
}
