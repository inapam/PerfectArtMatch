import SectionHeading from "@/components/common/SectionHeading";

export default function AboutPage() {
  return (
    <section className="container py-16 space-y-10">
      <SectionHeading
        title="About Perfect Art Match"
        subtitle="Match-makers of the Art World, based in Zürich since 2017."
      />

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-sm leading-relaxed">
          <h2 className="font-serif text-xl">Our Mission</h2>
          <p>
            We are the match-makers of the Art World. Perfect Art Match Zürich
            connects exceptional artists with passionate collectors through our
            “infinite gallery” concept. Every artist we work with is published
            and promoted to our large and ever-growing network of art lovers.
          </p>
          <p>
            Unlike a traditional white cube gallery, we see ourselves as
            connectors – bringing the right work to the right person, across
            borders, disciplines and formats.
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <h2 className="font-serif text-xl">Zürich & Beyond</h2>
          <p>
            Based in Zürich, we work with artists locally and internationally.
            Our projects move between physical exhibitions, digital platforms
            and experimental formats that mix art, architecture and science.
          </p>
          <p>
            Perfect Art Match is an evolving ecosystem – a place where artists,
            collectors, institutions and curious visitors meet around strong,
            meaningful works.
          </p>
        </div>
      </div>
    </section>
  );
}
