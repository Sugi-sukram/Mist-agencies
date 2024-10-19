"use client";

import Image from "next/image";
import appIcon from "@/assets/appIcon.png";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Button, Drawer } from "antd";
import { useState } from "react";

import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const handleMenuClick = (path: string) => {
    router.push(path);
    closeDrawer();
  };

  return (
    <header className="bg-gradient-to-l to-white from-lightblueBG shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src={appIcon}
            alt="Mist Agencies Logo"
            width={40}
            height={40}
            className="w-10"
          />
          <h1 className="text-2xl font-bold text-gray-800">MIST AGENCIES</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <p
              key={item.path}
              className={`text-drackBlue text-xl font-semibold cursor-pointer hover:text-[#005dff] transition-colors duration-300 ${
                pathname === item.path ? "text-[#005dff]" : ""
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </p>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button className="md:hidden" onClick={showDrawer} type="primary">
          <TiThMenuOutline />
        </Button>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
      >
        <Menu>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.path}
              onClick={() => handleMenuClick(item.path)}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
