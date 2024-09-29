"use client";

import Image from "next/image";
import Header from "../component/layout/Header";
import Products from "../component/Home/Products";
import Footer from "../component/layout/Footer";
import Hero from "../component/Home/Hero";
import Welcome from "../component/Home/Welcomecomp";
import OurService from "../component/Home/OurService";
import BestMineralWater from "../component/Home/BestMineralWater";
import Certifications from "../component/Home/CertificationsComp";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Products />
      <OurService />
      <Certifications />
      <BestMineralWater />
          
    </>
  );
}
