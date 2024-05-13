import Image from "next/image";

export default function ExtraNews() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/background-extra.jpg')] md:h-[70vh] mt-20">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          New Release
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>

        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/airpods.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
