"use client";
import SubHeader from "@/component/common/SubHeader";
import ContactForm from "@/component/ContactUs/Contact";
import MapComponent from "@/component/MapComponent";
import React, { useEffect, useState } from "react";

function page() {
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
    <div className={`${!isDevice ? "mx-auto mt-16" : "mx-auto mt-28"}`}>
      <SubHeader title="Contact us" />
      <ContactForm />
      <div className="">
        <MapComponent />
      </div>
    </div>
  );
}

export default page;
