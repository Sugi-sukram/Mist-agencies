import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const SocialMediaHeader = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/",
      colorClass: "hover:text-blue-600 hover:border-blue-600",
    },
    {
      icon: FaInstagram,
      href: "#",
      colorClass: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      colorClass: "hover:text-blue-700 hover:border-blue-700",
    },
    {
      icon: FaYoutube,
      href: "#",
      colorClass: "hover:text-red-600 hover:border-red-600",
    },
    {
      icon: FaWhatsapp,
      href: "#",
      colorClass: "hover:text-green-500 hover:border-green-500",
    },
  ];

  return (
    <header className="bg-white py-2 border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-7 space-y-2 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span className="text-sm md:text-base">
              mistwateragencies@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-500" />
            <span className="text-sm md:text-base">
              +91 99521 88999 | 90033 42551
            </span>
          </div>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex items-center space-x-3">
          {socialIcons.map(({ icon: Icon, href, colorClass }, idx) => (
            <a
              key={idx}
              href={href}
              className={`text-gray-600 border border-gray-400 rounded-full p-1 ${colorClass}`}
            >
              <Icon className="w-2 h-2 md:w-4 md:h-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default SocialMediaHeader;