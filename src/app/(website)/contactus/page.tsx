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

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${!isDevice ? "mx-auto mt-16" : "mx-auto mt-28"}`}>
      <SubHeader title="Contact us" />
      <ContactForm />
     
    </div>
  );
}

export default page;
