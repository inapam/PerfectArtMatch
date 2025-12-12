// src/app/terms/page.tsx
import SectionHeading from "@/components/common/SectionHeading";

const TERMS = `Terms & Conditions
Last updated: today

1. Service
Perfect Art Match (PAM) is a simple showcase and discovery platform for artists and collectors. PAM is not a marketplace and does not act as an agent.

2. Artist Rights & Responsibilities
Artists keep full copyright and control over their works.
Artists guarantee they own the rights to the submitted images and texts.
Submitted works must be lawful and respectful. PAM may refuse or remove content at any time.

3. Submissions & Moderation
One-time support fee of CHF 15 publishes up to 10 artworks per artist.
If unpaid after 72 hours (3 days), artworks may be hidden until payment is received.

4. Payments
Pay via PayPal → https://paypal.me/inaPAM
Swiss QR-bill transfer to InaPam GmbH (Küsnacht ZH) via PostFinance.
The fee covers platform maintenance and curation time; it is non-refundable.
Note: Stripe and credit card payments are no longer supported. Use PayPal or QR-bill transfer to InaPam GmbH, Küsnacht ZH.

5. Communication & Sales
Collectors contact artists directly (or via perfectartmatch@gmail.com). PAM is not a party to any transaction between artist and collector.

6. Privacy
We collect only the form fields you submit (name, email, artwork details, links). Data is used to display your submission and to contact you about curation. For removal or data requests, email perfectartmatch@gmail.com.

7. Liability
PAM is provided "as is". We do not guarantee uninterrupted availability. PAM is not liable for any indirect or consequential damages.

© Perfect Art Match · Shop
Active payment methods: PayPal • QR-bill • Twint (coming soon)
© Perfect Art Match · Shop – All rights reserved`;

export default function TermsPage() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
      <SectionHeading
        title="Terms & Conditions"
        subtitle="Perfect Art Match · Shop"
      />
      <pre className="whitespace-pre-wrap text-neutral-800 leading-relaxed">
        {TERMS}
      </pre>
    </section>
  );
}
