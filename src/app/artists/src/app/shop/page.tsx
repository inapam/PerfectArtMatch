import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/lib/data/products";

export default function ShopPage() {
  return (
    <section className="container py-16 space-y-8">
      <SectionHeading
        title="Shop"
        subtitle="Prints, editions and selected objects."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="text-xs text-gray-500">
        Online payments and full cart will be added later; for now, please use
        the contact form to inquire about any item.
      </p>
    </section>
  );
}
