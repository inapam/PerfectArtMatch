export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency?: string;
  category: string;
  image: string;
  relatedArtworkId?: string;
}
