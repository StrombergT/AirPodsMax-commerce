"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Hear the Difference, Feel the Music.",
      image: "/hero/hero.jpg",
    },
    {
      id: 2,
      title: "Immerse Yourself in Pure Sound.",
      image: "/hero/hero2.jpg",
    },
    {
      id: 3,
      title: "Elevate Your Audio Experience.",
      image: "/hero/hero3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-secondary">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-black font-bold">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl"
          >
            {data[currentSlide].title}
          </motion.h1>
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white text-md p-3 w-32 bg-black mt-4 font-semibold hover:bg-buttonHover ease duration-150 uppercase rounded-lg"
        >
          Read more
        </motion.button>
      </div>
      <div className="w-full flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data[currentSlide].image}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
