"use client";

import Image from "next/image";
import VisionIcon from "@/assets/VisionIcon.png";
import MissionIcon from "@/assets/MissionIcon.png";
import MissionIcon2 from "@/assets/MissionIcon2.png";
import { ContactDetails } from "@/config/Contact-details";
import React from "react";
import { IoMdPlay } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="bg-gray-50   space-y-12">
      {/* Header Section */}
      <div className="p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#94C245] mb-4">
          Mist Agencies - Mineral Drinking Water
        </h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 space-y-4 text-gray-700">
            <p>
              Mist Agencies is a premium packaged drinking water that embodies
              quality and safety, committed to delivering superior taste,
              hydration, and purity. At Mist Agencies, we take pride in
              maintaining the utmost safety standards for healthy living by
              combining skill, knowledge, and technology in water treatment.
            </p>
            <p>
              Understanding the critical need for safe and pure health, Mist
              Agencies guarantees to be the leading agency of safe mineral
              water, where TDS of minerals are well-maintained. Mist Agencies
              takes pride in offering a powerful hydration solution, compliant
              with the safety standards, which is a great fit for every age and
              multiple drinking stages.
            </p>
          </div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gray-200 rounded-md flex items-center justify-center mt-4 lg:mt-0">
            {/* Placeholder for image */}
          </div>
        </div>
      </div>

      {/* Why Mist Agencies Section */}
      <div className="bg-[#E7FFBE] sm:p-8">
        <h2 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4 p-6">
          Why Mist Agencies - Drinking Water
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 p-6">
          <ul className="flex-1 list-disc list-inside space-y-2 text-gray-700">
            <li>We deliver the best.</li>
            <li>We are ISI Certified.</li>
            <li>We help to bridge every gap for any condition you need.</li>
            <li>Mist Agencies packaged drinking water is the ideal answer.</li>
            <li>We make your regular water routine a priority.</li>
            <li>
              We ensure meticulous precision in the quality of our product. Our
              state-of-the-art technology ensures the water is delivered
              purified to balance, chill, and taste great.
            </li>
          </ul>
          <div className="w-96 h-32 sm:w-40 sm:h-40 lg:w-96 lg:h-56 bg-white rounded-2xl flex items-center justify-center">
            <IoMdPlay size={50} />
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="sm:px-8    ">
        <div className=" text-[#3A82D7] text-3xl">Vision & Mission</div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Vision */}
          <div className="space-y-4">
            <div className="flex justify-start text-3xl sm:text-4xl text-green-600">
              <Image
                src={VisionIcon}
                alt="Mist Agencies Logo"
                width={200} // Set width in pixels
                height={200} // Set height in pixels
                className="w-10"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#A7CD67]">
              Vision
            </h3>
            <p className="text-gray-600">
              Our goal is to deliver healthier, safer, and great-tasting water
              for every person in every situation.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <div className="flex justify-start text-3xl sm:text-4xl text-green-600">
              <Image
                src={MissionIcon}
                alt="Mist Agencies Logo"
                width={200} // Set width in pixels
                height={200} // Set height in pixels
                className="w-10"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#A7CD67]">
              Mission
            </h3>
            <p className="text-gray-600">
              We are committed to maintaining the highest standards of hygiene
              and quality in every drop of water we produce, leading to a
              healthier community.
            </p>
          </div>

          {/* Mission 2 */}
          <div className="space-y-4">
            <div className="flex justify-start text-3xl sm:text-4xl text-green-600">
              <Image
                src={MissionIcon2}
                alt="Mist Agencies Logo"
                width={200} // Set width in pixels
                height={200} // Set height in pixels
                className="w-10"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#A7CD67]">
              Mission
            </h3>
            <p className="text-gray-600">
              Our vision makes water safe, tasty, and balanced by following
              standards to ensure the highest level of trust.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 sm:mt-12 text-left text-4xl sm:p-8">
        <div className="text-gray-600">Questions? Reach Out To Us </div>
        <div className="text-gray-600">At {ContactDetails.email}</div>
      </div>
    </div>
  );
};

export default AboutSection;
