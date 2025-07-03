import { useEffect, useState } from "react";
import OurServiceBG from "../../assets/OurServiceBG.jpg";
import { OurservicesRecord } from "@/config/OurService-config";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const OurService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalWidth, setTotalWidth] = useState<number>(0);
  const [finalView, setFinalView] = useState<boolean>(false);

  const handleNext = () => {
    if (currentIndex + totalWidth - 1 >= OurservicesRecord.length - 1) {
      setFinalView(true);
      setTimeout(() => {
        setFinalView(false);
      }, 500);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex <= 0) {
      setFinalView(true);
      setTimeout(() => {
        setFinalView(false);
      }, 500);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const element = document.getElementById("books");
    setTotalWidth(Math.round((element?.offsetWidth || 0) - 60) / 300);
  }, [currentIndex]);

  return (
    <section
      className="bg-blue-100 text-center py-20 relative bg-cover bg-center h-[650px] bg-no-repeat my-5"
      style={{
        backgroundImage: `url(${OurServiceBG.src})`,
      }}
    >
      <div className="container flex justify-center items-center w-full gap-0 row-auto">
        <div className="w-[20%] h-[300px]" />
        <div className="container mx-auto w-[65%]">
          <div className="text-right mb-5">
            {/* Animating the section heading and description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-semibold pr-16 text-white"
            >
              Our Service
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white pr-16 text-xl mt-2"
            >
              Safe and healthy drinking water availability at home all the time.
            </motion.div>
          </div>

          <div className="flex justify-between items-center w-full h-full gap-5">
            {/* Previous Button Animation */}
            <motion.div
              className={`w-[40px] h-[40px] rounded-full font-bold justify-center cursor-pointer flex items-center rotate-[180deg] border-collapse text-white ${
                currentIndex <= 0 && "hidden"
              }`}
              onClick={handlePrevious}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdArrowForwardIos fill="white" fontSize={30} fontWeight={600} />
            </motion.div>

            {/* Image Slider with Staggered Animation on Scroll */}
            {OurservicesRecord && OurservicesRecord.length > 0 ? (
              <div className="w-full overflow-hidden h-fit flex gap-x-7" id="books">
                <motion.div
                  className="flex gap-x-7 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${
                      finalView
                        ? currentIndex <= 0
                          ? 45
                          : -(currentIndex * 300) - 45
                        : -(currentIndex * 300)
                    }px) `,
                  }}
                  animate={{
                    x: -(currentIndex * 300),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {OurservicesRecord.map((e, index) => (
                    <motion.div
                      key={e.id}
                      className="mt-4 w-[300px] cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col"
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 50 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2, // Staggered delay for each service item
                        type: "spring",
                        stiffness: 100,
                      }}
                      onClick={() => console.log("Service clicked")}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="justify-center items-center w-[100%]">
                        <Image
                          src={e.img}
                          alt="service"
                          width={280}
                          height={210}
                          className="bookListShadow shadow-xl"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{e.title}</h3>
                        <p className="text-white mt-2">{e.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className="h-[210px] w-full flex items-center justify-center text-textgrayPrimary">
                <p>No Services to show</p>
              </div>
            )}

            {/* Next Button Animation */}
            <motion.div
              className={`w-[40px] h-[40px] rounded-full font-bold justify-center flex items-center cursor-pointer text-white ${
                currentIndex + totalWidth - 1 >= OurservicesRecord.length - 1 && "hidden"
              }`}
              onClick={handleNext}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdArrowForwardIos fill="white" fontSize={30} fontWeight={600} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
