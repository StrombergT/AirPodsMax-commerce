"use client";

import Image from "next/image";
import Container from "@/src/components/Container";
import { ProductType } from "@/src/types/ProductType";
import Link from "next/link";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

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
                <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#0a0e13] shadow-md place-items-center">
                  <div className="relative mx-3 mt-3 flex h-[300px] overflow-hidden rounded-xl">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        className="peer h-full object-cover w-full"
                      />
                    )}
                    <img
                      className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                      src="https://fs.npstatic.com/userfiles/7734655/image/Apple-AirPods-Max-2-specs-price-release-date-features-design-w720h405.jpg"
                      alt="product image"
                    />
                    <svg
                      className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-10 mx-auto text-3xl text-white transition-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    ></svg>
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      IN STOCK
                    </span>
                  </div>
                  <div className="mt-4 px-5 pb-5">
                    <h5 className="text-xl tracking-tight ">{product.name}</h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-3xl font-bold">
                          {product.unit_amount} SEK
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
        <div className="flex justify-center items-center text-3xl font-bold mb-2 text-gray-300 ">
          <p>Accessories for noise-canceling headphones</p>
        </div>
        <div className="flex justify-center items-center underline">
          <Link href="#">Show accessories</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 bg-[#ddd5d507] ">
          <img src="/allColors.png" width={700} height={500} alt="" />
          <img src="/hero2.png" width={700} height={500} alt="" />
        </div>
      </div>
      <section className="bg-[#010409]">
        <div className="w-full px-4 min-h-[600px] mx-auto flex items-center justify-center">
          <Container>
            <div className="flex flex-col md:flex-row items-center text-gray-300">
              <img
                src="https://specials-images.forbesimg.com/imageserve/5fe5bee6b6006e878b897abf/960x0.png?cropX1=0&cropX2=940&cropY1=201&cropY2=906"
                width={600}
                height={600}
                alt=""
              />
              <p className="text-lg md:text-xl ml-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                illum eveniet dolores autem vitae corporis veniam quaerat
                inventore atque minima. Vel, sequi eius. Repellendus cum vel
                saepe molestiae eius facere?
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

/*
<div className="max-w-[500px] relative overflow-hidden rounded-lg flex flex-col items-center justify-center hover:opacity-80 ease duration-150">
                  <div className="relative w-[250px] h-[250px] bg-[#29272743] rounded-full overflow-hidden">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        className="rounded-lg items-center justify-center flex mx-auto mt-6"
                      />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <h3>{product.unit_amount} SEK</h3>
                  })
                </div>
*/
