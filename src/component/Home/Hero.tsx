import { motion } from "framer-motion";
import homePageImage from "../../assets/home-page_02-10.jpg";
import { useRouter } from "next/navigation";

const Hero = () => {
   const router = useRouter();
  return (
    <section
      className="bg-blue-100 text-center py-20 relative bg-cover bg-center h-[550px] bg-no-repeat"
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      {/* Content wrapper */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-6 md:w-[60%] md:pl-16 text-left">
        {/* Title with animation */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Mineral Water With Great Quality
        </motion.h2>

        {/* Description with animation */}
        <motion.p
          className="text-base md:text-lg text-white mt-4 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Mineral water offers a refreshing and healthy option with a unique
          taste profile that can be quite appealing.
        </motion.p>

        {/* Button with animation */}
        <motion.button
          className="mt-8 px-6 py-3 bg-limeGreen text-white rounded-md hover:bg-limeGreen-600 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>   router.push('/aboutus')}
        >
          Read More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
