import Image from "next/image";
import { Product } from "@/lib/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="space-y-3 text-sm">
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="font-serif text-base">{product.name}</div>
      <div className="text-gray-700">{product.category}</div>
      <div className="text-gray-900">
        {product.currency ?? "CHF"} {product.price.toLocaleString()}
      </div>
      <p className="text-gray-600 line-clamp-3">{product.description}</p>
    </div>
  );
}
