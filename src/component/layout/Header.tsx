'use client'

import Image from "next/image";
import appIcon from "../../assets/appIcon.png"; // Correct way to import an image
import { useRouter} from 'next/navigation'

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
          <a href="#home" className=" text-drackBlue text-xl font-semibold hover:text-blue-500" onClick={()=>navicate.push('/')}>
            Home
          </a>
          <a href="#about" className="text-drackBlue text-xl font-semibold hover:text-blue-500" onClick={()=>navicate.push('/aboutus')}>
            About Us
          </a>
          <a href="#products" className="text-drackBlue text-xl font-semibold hover:text-blue-500" onClick={()=>navicate.push('/products')}>
            Products
          </a>
          <a href="#services" className="text-drackBlue text-xl font-semibold hover:text-blue-500" onClick={()=>navicate.push('/services')}>
            Services
          </a>
          <a href="#contact" className="text-drackBlue text-xl font-semibold hover:text-blue-500" onClick={()=>navicate.push('/contactus')}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
