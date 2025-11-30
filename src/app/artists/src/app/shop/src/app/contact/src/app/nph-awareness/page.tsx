import SectionHeading from "@/components/common/SectionHeading";

export default function NphAwarenessPage() {
  return (
    <section className="container py-16 space-y-8">
      <SectionHeading
        title="NPH Awareness"
        subtitle="Using art to make Normal Pressure Hydrocephalus visible."
      />
      <div className="space-y-4 text-sm leading-relaxed max-w-3xl">
        <p>
          Normal Pressure Hydrocephalus (NPH) is a neurological condition that
          is often underdiagnosed or misunderstood. Through artworks, texts and
          public conversations, Perfect Art Match contributes to a more human
          understanding of this condition.
        </p>
        <p>
          This section will grow over time with visual works, short explanations
          and references – a living bridge between medical knowledge and lived
          experience.
        </p>
      </div>
    </section>
  );
}
