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
  return (
    <header className="bg-white py-3 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-7 h-8">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span>mistwateragencies@gmail.com</span>
          </div>
          {/* Phone Numbers */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-500" />
            <span>+91 99521 88999 | 90033 42551</span>
          </div>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 border border-gray-400 rounded-full p-2 hover:text-blue-600 hover:border-blue-600"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 border border-gray-400 rounded-full p-2 hover:text-pink-500 hover:border-pink-500"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 border border-gray-400 rounded-full p-2 hover:text-blue-700 hover:border-blue-700"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 border border-gray-400 rounded-full p-2 hover:text-red-600 hover:border-red-600"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 border border-gray-400 rounded-full p-2 hover:text-green-500 hover:border-green-500"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SocialMediaHeader;
