"use client";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Button, Drawer } from "antd";
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

  const menuItems = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    { name: "About Us", path: "/aboutus", icon: <AiOutlineInfoCircle /> },
    { name: "Products", path: "/products", icon: <AiOutlineAppstore /> },
    {
      name: "Services",
      path: "/services",
      icon: <MdOutlineMiscellaneousServices />,
    },
    { name: "Contact Us", path: "/contactus", icon: <AiOutlinePhone /> },
  ];

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

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

  const handleMenuClick = (path: string) => {
    router.push(path);
    closeDrawer();
  };

  return (
    <div className="fixed top-0  z-10 w-full bg-white shadow-md">
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
                key={item.path}
                className={`relative text-gray-700 text-lg font-semibold cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                  pathname?.includes(item.path) ? "text-blue-600" : ""
                }`}
                onClick={() => router.push(item.path)}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600 transition-transform duration-300 transform ${
                    pathname === item.path ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </p>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden bg-[#4d8fab]"
            onClick={showDrawer}
            type="primary"
          >
            <TiThMenuOutline className="text-2xl text-white" />
          </Button>
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          styles={{body: {padding: 0}}}
          width={300} 
          closeIcon={null}
          className="drawer-custom" // Custom class for additional styling
        >
          <Menu
            mode="inline"
            className="text-lg h-full bg-[#ffffff] text-white"
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.path}
                icon={item.icon}
                className={`hover:bg-[#4d8fab] ${
                  pathname === item.path ? "bg-[#1f566e] text-white" : ""
                } hover:text-white transition-all duration-300`}
                onClick={() => handleMenuClick(item.path)}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </header>
    </div>
  );
};

export default Header;
