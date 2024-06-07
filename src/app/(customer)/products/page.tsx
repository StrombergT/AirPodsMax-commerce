"use client";
import Image from "next/image";
import Container from "@/src/components/layout/Container";
import Link from "next/link";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { H5, SPAN } from "@/src/components/ui/Text/TextComponent";

const getData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/products",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getData().then(setProducts);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-6 mt-16 text-gray-300">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 relative pb-32 place-items-center">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#131416] shadow-md place-items-center hover:shadow-lg">
                  <div className="relative mx-3 mt-3 flex h-[300px] overflow-hidden rounded-xl transition-transform duration-300 transform-gpu group-hover:scale-105">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={800}
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        className="peer h-full object-cover w-full"
                      />
                    )}
                    <SPAN className="absolute top-0 left-0 m-2 px-2 text-sm font-medium">
                      IN STOCK
                    </SPAN>
                  </div>
                  <div className="mt-4 px-5 pb-5">
                    <H5>{product.name}</H5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <span className="text-3xl font-bold">
                        {product.unit_amount} SEK
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_eq__bw20hke6z1ea_xlarge.jpg"
            className="w-full h-auto"
            alt="Audio quality"
          />
          <img
            src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_noise_cancellation__bly3c9di4wwi_xlarge.jpg"
            className="w-full h-auto"
            alt="Noise cancellation"
          />
        </div>
      </div>
    </>
  );
}
