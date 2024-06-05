"use client";

import AddToCart from "@/src/components/shared/AddToCart";
import AdvertisementComponent from "@/src/components/AdvertisementComponent";
import AlternativImage from "@/src/components/AlternativImage";
import Container from "@/src/components/layout/Container";
import { H1, P, SPAN } from "@/src/components/ui/Text/TextComponent";
import { Product } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
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
    <div className="flex justify-center items-center min-h-screen mt-10">
      <Container>
        <div className="mb-8">
          <Link
            className="text-gray-300 font-bold uppercase cursor-pointer hover:text-gray-600 flex"
            href="/products"
          >
            <ArrowLeft />
            Back to products
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 mt-5">
          <div className="w-full lg:w-2/3">
            <div className="relative">
              <Image
                src={currentImage}
                layout="responsive"
                width={1500}
                height={1500}
                alt={singleProduct.name}
                quality={100}
                className="rounded-xl mb-5"
              />
            </div>
            <AlternativImage
              setCurrentImage={setCurrentImage}
              originalImage={singleProduct.image || ""}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <div className="mb-8">
              <H1>{singleProduct.name}</H1>
              <SPAN variant="secondary">{singleProduct.unit_amount} SEK</SPAN>
            </div>
            <div className="mb-8">
              <P>{singleProduct.description}</P>
            </div>

            <div className="mb-8">
              <P variant="shipping-info">Shipping Information</P>
              <P variant="shipping">Free shipping on orders over 1000 SEK</P>
            </div>
            <div className="mb-8">
              <AddToCart product={singleProduct} />
            </div>
          </div>
        </div>
        <AdvertisementComponent />
      </Container>
    </div>
  );
}
