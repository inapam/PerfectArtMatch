import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/lib/data/products";

export default function ShopPage() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <SectionHeading
        title="Shop – Fine Art Prints"
        subtitle="Museum-quality giclée prints on archival paper, based on original PerfectArtMatch paintings."
      />

      <p className="text-neutral-700 max-w-3xl mb-10">
        For questions about framing, shipping or special editions, please contact Ina directly via the contact form.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
