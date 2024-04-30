import Image from "next/image";

export default function ProductHero() {
  return (
    <div className="py-48 md:py-0 md:h-[700px] relative overflow-hidden">
      <div className="hidden xl:flex">
        <div className="relative w-full ">
          <Image
            src="/hero/hero2.jpg"
            width={1200}
            height={800}
            alt=""
            quality={100}
            className="w-full h-full object-cover"
            layout="responsive"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-1/4 left-1/3 transform -translate-y-1/2 -translate-x-1/2 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mx-auto">
              Find Your Headphones
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Explore our latest products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
