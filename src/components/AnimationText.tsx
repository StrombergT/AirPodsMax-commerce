"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromTop } from "../utils/motion";

export default function AnimationText() {
  const [refTop, inViewTop] = useInView({ triggerOnce: true });

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-10 sm:mt-20 md:mt-40">
      <motion.blockquote
        ref={refTop}
        variants={slideInFromTop}
        initial="hidden"
        animate={inViewTop ? "visible" : "hidden"}
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-[90%] lg:max-w-[1200px] p-5 border-l-2 border-r-2 border-gray-500 Welcome-text"
      >
        "Experience Sound Like Never Before with AirPods and AirPods Max"
      </motion.blockquote>
    </div>
  );
}
