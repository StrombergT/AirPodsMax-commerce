import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const AnimationProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.7;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.5 }}
      className="relative w-full h-0 pb-[65%] shadow-lg rounded-lg overflow-hidden"
    >
      <Image
        src={src}
        alt="headphone image"
        fill
        sizes="(max-width: 600px) 100vw, 50vw"
        className="object-cover rounded-lg"
      />
    </motion.div>
  );
};

export default AnimationProvider;
