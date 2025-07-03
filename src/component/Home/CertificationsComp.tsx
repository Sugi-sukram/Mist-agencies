import React from "react";
import BureauofIndianStandards from "../../assets/BureauofIndianStandards.jpg";
import TNPCB from "../../assets/TNPCB.jpg";
import FSSAI from "../../assets/FSSAI.jpg";
import CentralGroundWaterBoard from "../../assets/CentralGroundWaterBoard.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    { id: 1, img: BureauofIndianStandards, name: "Bureau of Indian Standards" },
    { id: 2, img: CentralGroundWaterBoard, name: "Central Ground Water Board" },
    { id: 3, img: TNPCB, name: "TNPCB" },
    { id: 4, img: FSSAI, name: "FSSAI" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl text-bluecolor"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Certifications
        </motion.h2>
        <motion.p
          className="mt-2 text-black-600 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Safe and healthy drinking water available at home all the time.
        </motion.p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Stagger animation for each item
                type: "spring",
                stiffness: 100,
              }}
            >
              <Image
                src={cert.img}
                alt={cert.name}
                objectFit="cover"
                className="rounded-lg"
                width={200}
                height={200}
              />
              <p className="mt-2 text-lg text-gray-700">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
