export interface Artwork {
  id: string;
  slug: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price?: number;
  currency?: string;
  description: string;
  image: string;
  category: "painting" | "sculpture" | "photography" | "digital" | "mixed-media";
  available: boolean;
  featured?: boolean;
}
