"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import Container from "./Container";

export default function Hero() {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 lg:px-20 mt-20 lg:mt-40 mb-20 lg:mb-40 w-full h-full relative z-[20]"
      >
        <div className="flex flex-col gap-5 justify-center m-auto text-center lg:text-left w-full lg:w-1/2">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl lg:text-8xl font-bold text-white"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              HeadPhones
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-base md:text-lg lg:text-xl text-gray-400 my-5 max-w-[700px] mx-auto lg:mx-0"
          >
            AirPods and AirPods Max, offering a wide selection of products and
            accessories. Explore our store to find the perfect pair and check
            out our latest deals and reviews.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(0.5)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg mx-auto lg:mx-0 max-w-[200px] uppercase"
          >
            Buy
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
        >
          <Image
            src="https://wallpapers.com/images/hd/anti-noise-airpods-pro-jy2lr059dmp8z8lv.jpg"
            alt="Headphones"
            height={500}
            width={500}
            className="max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}