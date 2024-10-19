"use client";
import SubHeader from "@/component/common/SubHeader";
import ServiceSection from "@/component/OurServices/ServiceSection";
import React, { useEffect } from "react";

function page() {
 
 
  return (
    <div>
      <SubHeader title="Our Services" />
      <ServiceSection />
    </div>
  );
}

export default page;
