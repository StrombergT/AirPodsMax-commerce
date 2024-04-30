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
      <div className="flex items-center justify-center min-h-screen ">
        <div className="flex flex-col justify-center relative w-full m-auto max-w-[800px] ">
          <Link href="/products" className="mb-5 font-semibold">
            Back to Products
          </Link>
          <Image
            src={product?.image ?? ""}
            width={500}
            height={500}
            alt=""
            quality={100}
            className="w-auto rounded-xl"
          />
          <div className="flex flex-col items-start gap-4 mt-5">
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
