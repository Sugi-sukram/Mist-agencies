import { motion } from "framer-motion";
import Image from "next/image";
import appIcon from "../../assets/dropWater.jpg"; // Correct way to import an image

const Welcome = () => {
  return (
    <section className="p-16 bg-gray-50 text-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between text-left md:gap-[5%] px-4 md:px-0">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-[55%] text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-bluecolor text-3xl md:text-4xl">Welcome to</h2>
          <h2 className="text-4xl md:text-6xl text-limeGreen">
            Mist Drinking Water
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Mist Agencies is a premier packaged drinking water brand dedicated
            to offering the purest taste enriched with all the essential
            goodness. With our expertise, knowledge, and experience, we
            guarantee the highest quality water.
          </p>
          <motion.button
            className="mt-6 px-6 py-2 bg-bluecolor text-white rounded-none hover:bg-bluecolor"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Know More {"➙"}
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-[40%] flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
            <Image
              src={appIcon}
              alt="Mist Agencies Product"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
