import Link from "next/link";
import Image from "next/image";
import { Artwork } from "@/lib/types/artwork";

interface Props {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <Link href={`/artworks/${artwork.slug}`} className="group">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="mt-3 text-sm space-y-1">
        <div className="font-serif text-base">{artwork.title}</div>
        <div className="text-gray-700">{artwork.artist}</div>
        {artwork.price && (
          <div className="text-gray-900">
            {artwork.currency ?? "CHF"} {artwork.price.toLocaleString()}
          </div>
        )}
      </div>
    </Link>
  );
}
