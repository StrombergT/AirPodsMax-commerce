import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "../types/ProductCardType";
import { Skeleton } from "./ui/skeleton";

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
      <div className="max-w-[500px] bg-[#f8f8f8] relative overflow-hidden rounded-lg">
        {image ? (
          <div className="aspect-w-1 aspect-h-1">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-[500px]">
            No Image Available
          </div>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <h3>{unit_amount} SEK</h3>
    </Link>
  );
}
