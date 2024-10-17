"use client";
import SubHeader from "@/component/common/SubHeader";
import ContactForm from "@/component/ContactUs/Contact";
import MapComponent from "@/component/MapComponent";
import React from "react";

function page() {
  return (
    <div>
      <SubHeader title="Contact us" />
      <ContactForm />
      <div className="">
        <MapComponent />
      </div>
    </div>
  );
}

export default page;
