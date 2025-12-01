import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref
}: HeroProps) {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="container py-16 space-y-6">
        <h1 className="font-serif text-3xl md:text-4xl">{title}</h1>
        <p className="max-w-2xl text-sm md:text-base text-gray-700">
          {subtitle}
        </p>
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-xs uppercase tracking-wide hover:bg-gray-900 hover:text-white transition"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
