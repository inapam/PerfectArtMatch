// src/lib/types/artwork.ts
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  artistId: string;
  year?: string;
  medium?: string;
  size?: string;
  priceCHF?: number;
  category?: string;
  image: string;
  isAvailable?: boolean;
}
