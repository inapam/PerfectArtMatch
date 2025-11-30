import { Artwork } from "@/lib/types/artwork";

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "light-over-the-lake",
    title: "Light Over the Lake",
    artist: "Ina Pam",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: "60 × 70 cm",
    price: 4800,
    currency: "CHF",
    description:
      "A luminous abstraction of a lakeside horizon, where water, sky and memory dissolve into layered color.",
    image: "https://images.unsplash.com/photo-1513351792231-157b19f84725?w=800",
    category: "painting",
    available: true,
    featured: true
  },
  {
    id: "2",
    slug: "urban-dream-fragment",
    title: "Urban Dream (Fragment)",
    artist: "Ina Pam",
    year: 2023,
    medium: "Mixed media on glass",
    dimensions: "100 × 100 cm",
    price: 6200,
    currency: "CHF",
    description:
      "Part of the Urban Dream series, this piece turns reflections, grids and city lights into a floating mental map.",
    image: "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800",
    category: "mixed-media",
    available: true,
    featured: true
  }
];
