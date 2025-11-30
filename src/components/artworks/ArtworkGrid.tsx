import { Artwork } from "@/lib/types/artwork";
import ArtworkCard from "./ArtworkCard";

interface Props {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: Props) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
