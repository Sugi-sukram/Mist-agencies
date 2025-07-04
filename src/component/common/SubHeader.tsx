"use client";

import React from "react";
import { motion } from "framer-motion";
import TitleBG from "../../assets/TitleBG.png";

interface Props {
  title: string;
}

const SubHeader: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="bg-bluecolor text-center py-20 relative bg-cover bg-center h-[150px] mb-10 p-5 bg-no-repeat text-white flex flex-col justify-center"
      style={{
        backgroundImage: `url(${TitleBG.src})`,
      }}
    >
      {/* Motion component for title animation */}
      <motion.h2
        className="text-5xl pl-16 font-bold text-[#082763] text-left"
        initial={{ opacity: 0, x: "40vw" }} // Start off-screen from the right side
        animate={{ opacity: 1, x: 0 }} // Animate to the left, staying left-aligned
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SubHeader;
