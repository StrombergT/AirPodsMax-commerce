import Image from "next/image";
import Container from "@/src/components/Container";
import { ProductType } from "@/src/types/ProductType";
import Link from "next/link";
import { Product } from "@prisma/client";

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

export default async function ProductPage() {
  const products: Product[] = await getData();
  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-6  mt-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 relative pb-32">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="max-w-[500px] relative overflow-hidden rounded-lg flex flex-col items-center justify-center hover:opacity-80 ease duration-150">
                  {product.image && (
                    <div className="aspect-w-1 aspect-h-1">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <h3>{product.unit_amount} SEK</h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
        <div className="flex justify-center items-center text-3xl font-bold mb-2">
          <p>Accessories for noise-canceling headphones</p>
        </div>
        <div className="flex justify-center items-center underline">
          <Link href="#">Show accessories</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
          <img
            src="https://uhdwallpapers.org/uploads/converted/20/12/10/lady-with-airpods-max-3840x2160_579467-mm-90.webp"
            width={700}
            height={500}
            alt=""
          />
          <img
            src="https://www.macworld.com/wp-content/uploads/2021/03/airpods-max-colors-100870020-orig-5.jpg?resize=1024%2C683&quality=50&strip=all"
            width={700}
            height={500}
            alt=""
          />
        </div>
      </div>
      <section className="bg-[#f2f2f2]">
        <div className="w-full px-4 min-h-[600px] mx-auto flex items-center justify-center">
          <Container>
            <div className="flex flex-col md:flex-row items-center">
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
