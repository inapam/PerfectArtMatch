import Hero from "@/components/common/Hero";
import SectionHeading from "@/components/common/SectionHeading";
import ArtworkGrid from "@/components/artworks/ArtworkGrid";
import { artworks } from "@/lib/data/artworks";

export default function HomePage() {
  const featured = artworks.filter((a) => a.featured).slice(0, 6);

  return (
    <>
      <Hero
        title="Where Artists and Art Lovers Connect"
        subtitle="Perfect Art Match Zürich – we are the match-makers of the Art World. Discover unique contemporary artworks in our infinite gallery."
        ctaLabel="Explore the Gallery"
        ctaHref="/artworks"
      />

      <section className="container py-16 space-y-8">
        <SectionHeading
          title="Featured Artworks"
          subtitle="A curated selection from our growing collection."
        />
        <ArtworkGrid artworks={featured} />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container space-y-4">
          <SectionHeading
            title="NPH Awareness"
            subtitle="Art as a bridge to understanding Normal Pressure Hydrocephalus."
          />
          <p className="max-w-3xl text-sm leading-relaxed">
            A part of Perfect Art Match is dedicated to raising awareness for
            Normal Pressure Hydrocephalus (NPH). Through exhibitions, digital
            galleries and storytelling, we connect medical realities with human
            experience.
          </p>
          <a
            href="/nph-awareness"
            className="inline-flex items-center text-primary font-medium underline-offset-4 hover:underline"
          >
            Learn more about our NPH initiative →
          </a>
        </div>
      </section>
    </>
  );
}
