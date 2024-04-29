import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-48 md:py-0 md:h-[800px] relative overflow-hidden bg-[#000000]">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="w-full xl:max-w-[600px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-7xl text-secondary font-bold mb-5">
              AirPodsMax PRO <br />
            </h1>
            <span className="text-secondary text-5xl uppercase">
              {" "}
              Din ultimata ljudupplevelse Börjar Här
            </span>
          </div>
          <div className="hidden xl:flex">
            <Image
              src="/hero/hero.jpg"
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
