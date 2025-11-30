import Image from "next/image";
import { Artwork } from "@/lib/types/artwork";
import Link from "next/link";

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: Props) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="relative aspect-[3/4] bg-gray-100">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 text-sm">
        <h1 className="font-serif text-2xl">{artwork.title}</h1>
        <p className="text-gray-700">{artwork.artist}</p>
        <p className="text-gray-600">
          {artwork.year} · {artwork.medium} · {artwork.dimensions}
        </p>

        {artwork.price && (
          <p className="text-lg">
            {artwork.currency ?? "CHF"}{" "}
            {artwork.price.toLocaleString()}{" "}
            {artwork.available ? "" : "(sold)"}
          </p>
        )}

        <p className="leading-relaxed">{artwork.description}</p>

        <div className="border-l-2 border-primary pl-4 text-xs text-gray-700 space-y-2">
          <p>
            <strong>Art for Awareness:</strong> A portion of proceeds from this
            work can support NPH Awareness and related art-science projects.
          </p>
          <Link href="/nph-awareness" className="underline-offset-4 hover:underline">
            Learn more about the initiative →
          </Link>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-xs uppercase tracking-wide hover:bg-gray-900 hover:text-white transition"
        >
          Inquire about this artwork
        </a>
      </div>
    </div>
  );
}
