import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "../types/ProductCardType";

export function ProductCard({
  id,
  name,
  unit_amount,
  image,
}: ProductCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center hover:opacity-80 ease duration-150"
      href={`/products/${id}/product`}
    >
      <div className="max-w-[500px] bg-[#f8f8f8]">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            quality={100}
            className="w-auto object-cover"
            priority={true}
          />
        ) : (
          <div>No Image Available</div>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <h3>{unit_amount} SEK</h3>
    </Link>
  );
}
