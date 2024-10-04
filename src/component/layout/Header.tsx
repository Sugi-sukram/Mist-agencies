"use client";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png"; 
import { useRouter } from "next/navigation";

const Header = () => {
  const navicate = useRouter();

  return ( 
    <header className="bg-gradient-to-l to-white from-lightblueBG shadow-md ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src={appIcon}
            alt="Mist Agencies Logo"
            width={40} // Set width in pixels
            height={40} // Set height in pixels
            className="w-10"
          />
          <h1 className="text-2xl font-bold text-gray-800">MIST AGENCIES</h1>
        </div>
        <nav className="flex space-x-6">
          <p
            className=" text-drackBlue text-xl font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navicate.push("/")}
          >
            Home
          </p>
          <p
            className="text-drackBlue text-xl font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navicate.push("/aboutus")}
          >
            About Us
          </p>
          <p
            className="text-drackBlue text-xl font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navicate.push("/products")}
          >
            Products
          </p>
          <p
            className="text-drackBlue text-xl font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navicate.push("/services")}
          >
            Services
          </p>
          <p
            className="text-drackBlue text-xl font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navicate.push("/contactus")}
          >
            Contact Us
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
