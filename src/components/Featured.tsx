import Image from "next/image";
import { featuredProducts } from "../data";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-black mt-20">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-indigo-200 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="text-white text-sm p-3 w-32 bg-black mt-4 font-semibold hover:bg-buttonHover ease duration-150 uppercase rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
