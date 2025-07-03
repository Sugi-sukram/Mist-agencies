import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { productscard } from "@/config/product-config";
import { useRouter } from "next/navigation";

const Products: React.FC<any> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalWidth, setTotalWidth] = useState<number>(0);
  const [finalView, setFinalView] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex + totalWidth - 1 >= productscard.length - 1) {
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
    const element = document.getElementById("products-list");
    setTotalWidth(Math.round((element?.offsetWidth || 0) - 60) / 200);
  }, [currentIndex]);

  return (
    <div>
      <h2 className="text-bluecolor text-2xl sm:text-3xl md:pl-16">
        Our Products
      </h2>
      <div className="flex justify-between items-center w-full h-full sm:gap-5 md:pl-16 md:pr-16">
        {/* Previous Button */}
        <motion.div
          className={`w-[30px] h-[30px] rounded-full font-bold justify-center flex items-center rotate-[180deg] border-[1px] border-black ${
            currentIndex <= 0 && "hidden"
          }`}
          onClick={handlePrevious}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p>{"➜"}</p>
        </motion.div>

        {/* Product List */}
        {productscard && productscard.length > 0 ? (
          <div
            className="w-full overflow-hidden h-fit flex gap-x-2 sm:gap-x-7"
            id="products-list"
          >
            <motion.div
              className="flex gap-x-2 sm:gap-x-7 transition-transform duration-500 ease-in-out"
              animate={{
                x: -(currentIndex * 200),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {productscard.map((e, index) => (
                <motion.div
                  key={e.id}
                  className={`mt-4 w-[150px] sm:w-[200px] cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2, // Staggered delay for each product
                    type: "spring",
                    stiffness: 100,
                  }}
                  onClick={() => console.log("Product clicked")}
                >
                  <div className="justify-center items-center w-[100%]">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={e.img}
                        alt="Product"
                        width={300}
                        height={210}
                        className="shadow-xl rounded-md"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mt-3">
                      {e.name}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-500">
                      {e.size}
                    </p>
                    <button
                      onClick={() => {
                        router.push("/contactus");
                      }}
                      className="mt-3 px-4 sm:px-6 py-2 bg-white border-2 border-lime-600 text-lime-600 rounded-md hover:bg-lime-600 hover:text-white"
                    >
                      Contact Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="h-[210px] w-full flex items-center justify-center text-textgrayPrimary">
            <p>No Products to show</p>
          </div>
        )}

        {/* Next Button */}
        <motion.div
          className={`w-[30px] h-[30px] rounded-full font-bold justify-center flex items-center cursor-pointer border-[1px] border-black ${
            currentIndex + totalWidth - 1 >= productscard.length - 1 &&
            "hidden"
          }`}
          onClick={handleNext}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {"➜"}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
