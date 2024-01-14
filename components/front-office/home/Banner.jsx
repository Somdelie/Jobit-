"use client";
import { motion } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  const h1Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.3, // Set the delay before the animation starts (in seconds)
      },
    },
  };

  const pVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.5, // Set a different delay for the <p> element
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8, // Adjust the delay to control when the button appears
      },
    },
  };

  return (
    <div className="banner relative text-center sm:h-[80vh] py-20 px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={h1Variants}
        className="text-white p-8"
      >
        <motion.h1 className="text-3xl sm:text-7xl font-bold css-3d-text">
          Your Big Banner Text
        </motion.h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pVariants}
        className="text-white p-8"
      >
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
        </p>
      </motion.div>
      <motion.button
        className="flex items-center mt-4 font-semibold border-2 border-white hover:border-purple-600 transition gap-2 text-white bg-teal-600 px-4 py-2 mx-auto rounded-[10px]"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        EXPLORE MORE <MdArrowOutward />
      </motion.button>
      
    </div>
  );
};

export default Banner;
