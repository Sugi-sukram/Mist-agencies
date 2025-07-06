"use client";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Drawer } from "antd";
import { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import SocialMediaHeader from "./SocialMediaHeader";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [isDevice, setIsDevice] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      setIsDevice(window.innerWidth >= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  const handleMenuClick = (path: string) => {
    router.push(path);
    setVisible(false);
  };

  const menuItems = [
    {
      key: "/",
      icon: <AiOutlineHome />,
      label: "Home",
      onClick: () => handleMenuClick("/"),
    },
    {
      key: "/aboutus",
      icon: <AiOutlineInfoCircle />,
      label: "About Us",
      onClick: () => handleMenuClick("/aboutus"),
    },
    {
      key: "/products",
      icon: <AiOutlineAppstore />,
      label: "Products",
      onClick: () => handleMenuClick("/products"),
    },
    {
      key: "/services",
      icon: <MdOutlineMiscellaneousServices />,
      label: "Services",
      onClick: () => handleMenuClick("/services"),
    },
    {
      key: "/contactus",
      icon: <AiOutlinePhone />,
      label: "Contact Us",
      onClick: () => handleMenuClick("/contactus"),
    },
  ];

  return (
    <div className="w-dvw ">
    <div className="fixed top-0 z-10 w-dvw bg-white shadow-md">
      {isDevice && <SocialMediaHeader />}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src={appIcon}
              alt="Mist Agencies Logo"
              width={40}
              height={40}
              className="w-10"
            />
            <h1 className="text-3xl font-bold text-gray-800">MIST AGENCIES</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <p
                key={item.key}
                className={`relative text-gray-700 text-lg font-semibold cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                  pathname === item.key ? "text-blue-600" : ""
                }`}
                onClick={item.onClick}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600 transition-transform duration-300 transform ${
                    pathname === item.key ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </p>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-[#4d8fab]"
            onClick={() => setVisible(true)}
          >
            <TiThMenuOutline className="text-2xl text-white" />
          </button>
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          styles={{ body: { padding: 0 } }}
          width={300}
          closeIcon={null}
          className="drawer-custom"
        >
          <Menu
            mode="inline"
            className="text-lg h-full bg-[#ffffff]"
            selectedKeys={[pathname || "/"]}
            items={menuItems}
          />
        </Drawer>
      </header>
    </div>
    </div>
  );
};

export default Header;
