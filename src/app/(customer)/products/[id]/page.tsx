/*import AddToCart from "@/src/components/AddToCart";
import { ProductType } from "@/src/types/ProductType";
import { OrderItem, Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  const data: Product = await res.json();
  console.log(data);
  return data;
};

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const singleProduct = await getData(params.id);

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 shadow-lg mt-16">
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={singleProduct.image || "/placeholder.jpg"}
            width={500}
            height={500}
            alt=""
            quality={100}
            className="w-full rounded-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 mt-5 lg:mt-0">
          <Link
            href="/products"
            className="mb-5 font-semibold uppercase hover:underline"
          >
            Back to Products
          </Link>
          <h1 className="text-2xl lg:text-4xl font-bold uppercase">
            {singleProduct.name}
          </h1>
          <span className="font-semibold text-red-500 text-lg">
            {singleProduct.unit_amount} SEK
          </span>
          <p className="text-black">{singleProduct.description}</p>
          <AddToCart product={singleProduct} />
        </div>
      </div>
    </div>
  );
}*/

import AddToCart from "@/src/components/AddToCart";
import AlternativImage from "@/src/components/AlternativImage";
import Container from "@/src/components/Container";
import { ProductType } from "@/src/types/ProductType";
import { OrderItem, Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  const data: Product = await res.json();
  console.log(data);
  return data;
};

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const singleProduct = await getData(params.id);

  return (
    <Container>
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center mt-16">
        <div className="flex flex-col gap-4 lg:w-1/4 mt-16">
          <Image
            src={singleProduct.image || "/placeholder.jpg"}
            width={500}
            height={500}
            alt=""
            quality={100}
            className="w-full h-full object-cover rounded-xl"
          />
          <AlternativImage />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              {singleProduct.name}
            </span>
            <h1 className="text-3xl font-bold">{singleProduct.name}</h1>
          </div>
          <p className="text-gray-700">{singleProduct.description}</p>
          <h6 className="text-2xl font-semibold">
            {" "}
            {singleProduct.unit_amount} SEK
          </h6>
          <div className="flex flex-row items-center gap-12 justify-center">
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </div>
    </Container>
  );
}
