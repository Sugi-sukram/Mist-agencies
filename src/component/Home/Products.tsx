

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import expand from "@/asset/school/expand.svg";
import { productscard } from "../../config/Product-config";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Products: React.FC<any> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalWidth, settotalWidth] = useState<number>(0);
  const [finalView, setFinalView] = useState<boolean>(false);
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
    const element = document.getElementById("books");
    settotalWidth(Math.round((element?.offsetWidth || 0) - 60) / 200);
  }, [currentIndex]);

  return (
    <div>
      <h2 className="text-bluecolor text-3xl px-32">Our Products</h2>
      <div className="flex justify-between items-center w-full h-full px-32 gap-5">
        <div
          className={`w-[30px] h-[30px] rounded-full font-bold justify-center cursor-pointer justify-center  flex items-center rotate-[180deg] border-collapse border-[1px] border-black       ${
            currentIndex <= 0 && "hidden"
          } `}
          onClick={handlePrevious}
        >
          <p>{"➜"}</p>
        </div>

        {productscard && productscard.length > 0 ? (
          <div
            className={`w-full overflow-hidden h-fit flex gap-x-7`}
            id="books"
          >
            <div
              className="flex gap-x-7 transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(${
                  finalView
                    ? currentIndex <= 0
                      ? 45
                      : -(currentIndex * 200) - 45
                    : -(currentIndex * 200)
                }px) `,
              }}
            >
              {productscard.map((e) => (
                <div
                  className={`mt-4  w-[200px] ${
                    //   onBookClick &&
                    "cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col  "
                  }`}
                  key={e.id}
                  onClick={() => console.log("Product clicked")}
                >
                  <div className="justify-center items-center w-[100%]">
                    <Image
                      src={e.img}
                      alt="book"
                      width={300}
                      height={210}
                      className="bookListShadow shadow-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mt-3">
                      {e.name}
                    </h3>
                    <p className="text-blue-500">{e.size}</p>
                    <button className="mt-3 px-6 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600">
                      Contact Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[210px] w-full flex items-center justify-center text-textgrayPrimary">
            <p>No Books to show</p>
          </div>
        )}

        <div
          className={`w-[30px] h-[30px]  rounded-full font-bold justify-center flex  items-center cursor-pointer border-[1px] border-black     ${
            currentIndex + totalWidth - 1 >= productscard.length - 1 && "hidden"
          } `}
          onClick={handleNext}
        >
          {"➜"}
        </div>
      </div>
    </div>
  );
};

export default Products;
