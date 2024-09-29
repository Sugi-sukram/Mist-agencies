import homePageImage from "../../assets/footerBG.png";
import appIcon from "../../assets/appIcon.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer
      className="text-center py-20 relative bg-cover bg-center h-[700px] bg-no-repeat text-white flex flex-col justify-center pr-32 "
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      <div className=" container flex justify-end items-center row-auto gap-1 text-3xl">
        <div>
          <Image
            src={appIcon}
            alt="Mist Agencies Logo"
            width={100}
            height={100} 
          />
        </div>
        <div className=" text-left mt-5">
          <h3 className="text-5xl font-family: ui-sans-serif, sans-serif,">MIST AGENCIES</h3>
          <p className="text-2xl">Implement for Better Future</p>
        </div>
      </div>

      <div className="container flex justify-end items-start row-auto gap-10  text-2xl w-[100%]">
        <div className="w-[200px]">
          <ul className="text-left text-white text-1xl">
            <li className="mt-3">
              <a href="#about" className="hover:underline ">
                About Us
              </a>
            </li>
            <li className="mt-3">
              <a href="#products" className="hover:underline">
                Product
              </a>
            </li>
            <li className="mt-3">
              <a href="#services" className="hover:underline">
                Service
              </a>
            </li>
            <li className="mt-3">
              <a href="#services" className="hover:underline">
                Gallery
              </a>
            </li>
            <li className="mt-3">
              <a href="#services" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-left w-[400px]">
          <div className="flex justify-left items-center row-auto gap-5 mt-3">
            <IoLocationOutline fill="white" fontSize={60} />
            <p>No.34, New Balaji Nagar, Kottai Palayam, Coimbatore, TamilNadu 641109</p>
          </div>
          <div className="flex justify-left items-center row-auto gap-5 mt-3">
            <BiPhoneCall fill="white" fontSize={30} />
            <p>+91 99521 68989 / 90033 42551</p>
          </div>
          <div className="flex justify-left items-center row-auto gap-5 mt-3">
            <TfiEmail fill="white" fontSize={25} />
            <p>mistwateragencies@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="text-right mt-8  text-2xl mr-28">
        <p>© 2024 MIST AGENCIES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
