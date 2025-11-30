import SectionHeading from "@/components/common/SectionHeading";
import ArtworkGrid from "@/components/artworks/ArtworkGrid";
import { artworks } from "@/lib/data/artworks";

export default function ArtworksPage() {
  return (
    <section className="container py-16 space-y-8">
      <SectionHeading
        title="Gallery"
        subtitle="Browse our current selection of artworks."
      />
      <ArtworkGrid artworks={artworks} />
    </section>
  );
}
