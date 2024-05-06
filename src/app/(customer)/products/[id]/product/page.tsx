import { Button } from "@/src/components/ui/button";
import { db } from "@/src/lib/db";

import Image from "next/image";
import Link from "next/link";

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 shadow-lg mt-14">
        <div className="flex justify-center items-center mx-auto">
          <Image
            src={product?.image ?? ""}
            width={500}
            height={500}
            alt=""
            quality={100}
            className="w-auto rounded-xl"
          />

          <div className="flex flex-col items-start gap-4 mt-5 ml-[2rem]">
            <Link
              href="/products"
              className="mb-5 font-semibold uppercase hover:underline"
            >
              Back to Products
            </Link>
            <h1 className="text-2xl font-bold uppercase ">{product?.name}</h1>
            <span className="font-semibold text-red-500 text-lg">
              {product?.unit_amount} SEK
            </span>
            <p className="text-black ">{product?.description}</p>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}
