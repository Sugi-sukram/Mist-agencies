"use client";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" },
  ];

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
          {menuItems.map((item) => (
            <div key={item.path} className="relative group">
              <p
                className={`text-drackBlue text-xl font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-300 ${
                  pathname === item.path ? "text-[rgb(53,140,216)]" : ""
                }`}
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </p>
              {/* Animated underline */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 ${
                  pathname === item.path ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              />
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
