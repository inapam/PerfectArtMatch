// src/lib/data/artworks.ts
import { Artwork } from "../types/artwork";

export const artworks: Artwork[] = [
  {
    id: "a1",
    title: "Light Over the Lake",
    slug: "light-over-the-lake",
    artistId: "ina",
    year: "2020",
    medium: "Acrylic on canvas",
    size: "60 × 70 cm",
    priceCHF: 2400,
    category: "Painting",
    image: "/images/artworks/light-over-the-lake.jpg",
    isAvailable: true,
  },
  {
    id: "a2",
    title: "NPH Awareness – Brain in Motion",
    slug: "nph-awareness-brain",
    artistId: "ina",
    year: "2023",
    medium: "Digital print on glass",
    size: "80 × 80 cm",
    category: "Glass",
    image: "/images/artworks/nph-awareness-brain.jpg",
    isAvailable: true,
  },
];
