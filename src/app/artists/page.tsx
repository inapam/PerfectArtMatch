import SectionHeading from "@/components/common/SectionHeading";
import { artists } from "@/lib/data/artists";

export default function ArtistsPage() {
  return (
    <section className="container py-16 space-y-8">
      <SectionHeading
        title="Artists"
        subtitle="Selected artists from the Perfect Art Match ecosystem."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {artists.map((artist) => (
          <div key={artist.id} className="space-y-2 text-sm">
            <h3 className="font-serif text-lg">{artist.name}</h3>
            <p className="text-gray-600">{artist.location}</p>
            <p className="text-gray-700 line-clamp-4">{artist.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
