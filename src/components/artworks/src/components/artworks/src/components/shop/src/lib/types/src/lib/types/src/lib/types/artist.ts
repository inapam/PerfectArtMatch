export interface Artist {
  id: string;
  name: string;
  slug: string;
  bio: string;
  statement?: string;
  location: string;
  website?: string;
  instagram?: string;
  image?: string;
  featured?: boolean;
  mediums: string[];
}
