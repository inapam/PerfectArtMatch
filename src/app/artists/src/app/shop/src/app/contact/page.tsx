import SectionHeading from "@/components/common/SectionHeading";
import ContactForm from "@/components/common/ContactForm";

export default function ContactPage() {
  return (
    <section className="container py-16 space-y-10">
      <SectionHeading
        title="Contact"
        subtitle="Get in touch about artworks, collaborations or NPH Awareness."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="text-sm space-y-3">
          <p>
            For inquiries regarding artworks, exhibitions, commissions or
            collaborations, feel free to reach out. We are happy to connect
            artists and art lovers worldwide.
          </p>
          <p>
            Email: <a href="mailto:hello@perfectartmatch.com">
              hello@perfectartmatch.com
            </a>
          </p>
          <p>Zürich, Switzerland</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
