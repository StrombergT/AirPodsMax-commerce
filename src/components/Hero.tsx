import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="py-8 md:py-0 md:h-[700px] relative overflow-hidden bg-[#000000]">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full xl:max-w-[600px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-4xl md:text-7xl text-secondary font-bold mb-3 md:mb-5">
              AirPodsMax PRO
            </h1>

            <span className="text-secondary text-lg md:text-5xl uppercase">
              Your ultimate audio experience starts here.
            </span>
            <Button variant={"secondary"} className="rounded-sm px-10 mt-5">
              BUY
            </Button>
          </div>
          <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-5 md:mt-0">
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
