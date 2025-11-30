import { notFound } from "next/navigation";
import ArtworkDetail from "@/components/artworks/ArtworkDetail";
import { artworks } from "@/lib/data/artworks";

interface Props {
  params: { slug: string };
}

export default function ArtworkPage({ params }: Props) {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) return notFound();

  return (
    <section className="container py-16">
      <ArtworkDetail artwork={artwork} />
    </section>
  );
}
