import React from "react";
import BureauofIndianStandards from "../../assets/BureauofIndianStandards.jpg";
import TNPCB from "../../assets/TNPCB.jpg";
import FSSAI from "../../assets/FSSAI.jpg";
import CentralGroundWaterBoard from "../../assets/CentralGroundWaterBoard.jpg";
import Image from "next/image";
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
        <h2 className="text-5xl  text-bluecolor">Our Certifications</h2>
        <p className="mt-2 text-black-600 text-xl">
          Safe and healthy drinking water available at home all the time.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center">
              <Image
                src={cert.img}
                alt={cert.name}
                // layout="fill"
                objectFit="cover"
                className="rounded-lg"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
