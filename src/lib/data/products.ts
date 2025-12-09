// src/lib/data/products.ts
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Light Over the Lake – Fine Art Print",
    slug: "light-over-the-lake-print",
    description:
      "Museum-quality giclée print on archival paper, based on the original painting.",
    price: 240,
    currency: "CHF",
    category: "Print",
    image: "/images/artworks/light-over-the-lake.jpg",
    relatedArtworkId: "a1",
  },
];
