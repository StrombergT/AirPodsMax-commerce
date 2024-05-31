import React from "react";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = {
  variant: "primary" | "secondary" | "addToCart";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  width?: string;
} & MotionProps;

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = "",
  onClick,
  width = "auto",
  ...motionProps
}) => {
  let baseClass =
    "flex items-center justify-center text-center text-lg font-medium focus:outline-none cursor-pointer uppercase";
  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass =
        "rounded-full text-white border border-transparent bg-[#147ce5] hover:bg-[#1267bd] px-6 md:px-10 lg:px-16 py-3 sm:w-auto lg:w-40";
      break;
    case "secondary":
      variantClass =
        "rounded-full text-white border border-[#1267bd] bg-[#000000] hover:border-white/40 px-6 md:px-10 lg:px-10 py-3 sm:w-auto lg:w-40";
      break;
    case "addToCart":
      baseClass =
        "flex items-center justify-center text-center text-lg font-medium text-white focus:outline-none cursor-pointer uppercase";
      variantClass =
        "hover:border-white/40 rounded-full border border-transparent bg-[#147ce5] px-6 py-3 focus:outline-none focus:ring-4 focus:ring-blue-300";
      break;
  }

  return (
    <motion.a
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      style={{ width }}
      {...motionProps}
    >
      {children}
    </motion.a>
  );
};

export default Button;
