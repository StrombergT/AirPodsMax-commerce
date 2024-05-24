"use client";

import AddToCart from "@/src/components/AddToCart";
import AlternativImage from "@/src/components/AlternativImage";

import Container from "@/src/components/Container";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  const data: Product = await res.json();
  console.log(data);
  return data;
};

export default function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    getData(params.id)
      .then((product) => {
        setSingleProduct(product);
        setCurrentImage(product.image || "/placeholder.jpg");
      })
      .catch(console.error);
  }, [params.id]);

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-6 mt-40 bg-[#0a0e13]">
      <Container>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-8">
          <div className="w-full lg:w-1/3">
            <Image
              src={currentImage}
              width={200}
              height={200}
              alt={singleProduct.name}
              quality={100}
              className="w-[350px] rounded-xl mb-5 h-[350px]"
            />
            <AlternativImage
              setCurrentImage={setCurrentImage}
              originalImage={singleProduct.image || ""}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Link
              className="text-gray-300 font-bold uppercase cursor-pointer hover:text-gray-600"
              href="/products"
            >
              Back to products
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-violet-600 mt-5 mb-5">
                {singleProduct.name}
              </h1>
            </div>
            <p className="text-gray-300">{singleProduct.description}</p>
            <h6 className="text-2xl font-semibold text-gray-300">
              {singleProduct.unit_amount} SEK
            </h6>
            <div className="flex justify-center">
              <AddToCart product={singleProduct} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
