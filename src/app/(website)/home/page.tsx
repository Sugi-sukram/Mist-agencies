"use client";
import BestMineralWater from "@/component/Home/BestMineralWater";
import Certifications from "@/component/Home/CertificationsComp";
import Hero from "@/component/Home/Hero";
import OurService from "@/component/Home/OurService";
import Products from "@/component/Home/Products";
import Welcome from "@/component/Home/Welcomecomp";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDevice, setIsDevice] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDevice(false);
      } else {
        setIsDevice(true);
      }
    };

    handleResize(); // Set initial image on component mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);
  return (
    <div className={`${!isDevice ? "mx-auto mt-16" : "mx-auto mt-25"}`}>
      <Hero />
      <Welcome />
      {/* <Products /> */}
      <OurService />
      <Certifications />
      <BestMineralWater />
    </div>
  );
}
