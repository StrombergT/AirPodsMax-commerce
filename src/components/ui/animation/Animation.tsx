import React from "react";
import { Headphone_data } from "../../../constants";
import AnimationProvider from "./AnimationProvider";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Animation() {
  const [refTop, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="headphones"
      className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 lg:px-20 mb-10 lg:mb-10 w-full h-full relative z-[20] mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full max-w-[1500px] mx-auto">
        {Headphone_data.map((headphone, index) => (
          <motion.div
            key={index}
            ref={refTop}
            className="col-span-1 flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={
              index % 2 === 0 ? slideInFromLeft(index) : slideInFromRight(index)
            }
          >
            <AnimationProvider
              src={headphone.Image}
              width={800}
              height={800}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
