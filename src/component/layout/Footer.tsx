"use client";

import { useEffect, useState } from "react";
import webfooterBG from "../../assets/footerBG.png";
import mobilefooterBG from "../../assets/mobilefolder.png";
import appIcon from "../../assets/appIcon.png";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { ContactDetails } from "@/config/Contact-details";
import { useRouter } from "next/navigation";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  const navigator = useRouter();
  const [bgImage, setBgImage] = useState(webfooterBG.src);
  const [isDevice, setIsDevice] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDevice(false);
        setBgImage(mobilefooterBG.src); // Mobile view
      } else {
        setIsDevice(true);
        setBgImage(webfooterBG.src); // Web view
      }
    };

    handleResize(); // Set initial image on component mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <footer
      className={`text-center py-20 relative bg-cover bg-center h-[700px] bg-no-repeat text-white flex flex-col justify-center ${
        isDevice ? "pr-32" : "pr-0"
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container flex justify-end items-center row-auto gap-1 text-3xl">
        <div>
          <Image
            src={appIcon}
            alt="Mist Agencies Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="text-left mt-5">
          <h3 className="text-5xl font-family: ui-sans-serif, sans-serif,">
            MIST AGENCIES
          </h3>
          <p className="text-2xl">Implement for Better Future</p>
        </div>
      </div>

      <div className="container flex justify-end items-start row-auto gap-10 text-2xl w-[100%]">
        {true && (
          <div className="w-[200px]">
            <ul className="text-left text-white text-1xl">
              <li className="mt-3">
                <p
                  onClick={() => navigator.push("/")}
                  className="hover:underline "
                >
                  About Us
                </p>
              </li>
              <li className="mt-3">
                <p
                  onClick={() => navigator.push("/aboutus")}
                  className="hover:underline"
                >
                  Product
                </p>
              </li>
              <li className="mt-3">
                <p
                  onClick={() => navigator.push("/products")}
                  className="hover:underline"
                >
                  Service
                </p>
              </li>
              <li className="mt-3">
                <p
                  onClick={() => navigator.push("/services")}
                  className="hover:underline"
                >
                  Gallery
                </p>
              </li>
              <li className="mt-3">
                <p
                  onClick={() => navigator.push("/contactus")}
                  className="hover:underline"
                >
                  Contact Us
                </p>
              </li>
            </ul>
          </div>
        )}
        <div className="text-left w-[400px]">
          <div className="flex justify-start items-start row-auto gap-5 mt-3">
            <MdOutlineLocationOn
              color="white"
              className="font-semibold mt-[-6px]"
              size={60}
            />
            <p className="text-white text-lg leading-snug">
              {ContactDetails.address}
            </p>
          </div>

          <div className="flex justify-start items-start row-auto gap-5 mt-3">
            <BiPhoneCall fill="white" fontSize={30} />
            <p className="text-white text-lg leading-snug">
              +91{" "}
              {ContactDetails.phoneNumber.map((pn, int) => (
                <span key={int}>
                  {pn}
                  {int !== ContactDetails.phoneNumber.length - 1 && " / "}
                </span>
              ))}
            </p>
          </div>

          <div className="flex justify-start items-start row-auto gap-5 mt-3">
            <MdOutlineEmail fill="white" fontSize={25} />
            <p className="text-white text-lg leading-snug">
              mistwateragencies@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="text-right mt-8 text-2xl mr-28">
        <p>© 2024 MIST AGENCIES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
