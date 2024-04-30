import Container from "@/src/components/Container";
import { ProductCard } from "@/src/components/ProductCard";
import ProductHero from "@/src/components/ProductHero";
import { db } from "@/src/lib/db";
import { Product } from "@prisma/client";
import Link from "next/link";

async function getPopularProducts(): Promise<Product[]> {
  const products = await db.product.findMany({
    orderBy: { orders: { _count: "desc" } },
  });
  return products;
}

type ProductGridProps = {
  productsFetch: () => Promise<Product[]>;
  title: string;
  subtitle: string;
};

async function ProductsGrid({
  productsFetch,
  title,
  subtitle,
}: ProductGridProps) {
  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="container mx-auto mb-4 text-3xl font-extrabold ">
            {title}
          </h2>
          <p className="text-xs">{subtitle}</p>
        </div>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 relative pb-32">
            {(await productsFetch()).map((product) => (
              <ProductCard key={product.id} {...product} />
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

export default function ProductPage() {
  return (
    <main className=" uppercase">
      <ProductHero />
      <ProductsGrid
        title="Headphones"
        subtitle="Free standard delivery for orders of 539 SEK or more | Free returns | 90-day trial period with no commitment | 2-year warranty | Free support"
        productsFetch={getPopularProducts}
      />
    </main>
  );
}
