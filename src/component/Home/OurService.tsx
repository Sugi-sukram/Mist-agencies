import { useEffect, useState } from "react";
import OurServiceBG from "../../assets/OurServiceBG.jpg";
import { OurservicesRecord } from "@/config/OurService-config";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowRightWideFill, RiArrowDropRightLine } from "react-icons/ri";

const OurService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalWidth, settotalWidth] = useState<number>(0);
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
    settotalWidth(Math.round((element?.offsetWidth || 0) - 60) / 300);
  }, [currentIndex]);

  return (
    <section
      className="bg-blue-100 text-center py-20 relative bg-cover bg-center h-[650px] bg-no-repeat my-5"
      style={{
        backgroundImage: `url(${OurServiceBG.src})`,
      }}
    >
      <div className=" container flex justify-center items-center w-full gap-0 row-auto">
        <div className="w-[20%] h-[300px]" />
        <div className="container mx-auto  w-[65%] ">
          <div className="text-right mb-5">
            <div className="text-6xl font-semibold text-3xl pr-16 text-white ">
              Our Service
            </div>

            <div className="text-white pr-16 text-xl mt-2">Safe and healthy drinking water avability at home all the time.</div>
          </div>

          <div className="flex justify-between items-center w-full h-full gap-5">
            <div
              className={`w-[40px] h-[40px] rounded-full font-bold justify-center cursor-pointer justify-center  flex items-center rotate-[180deg] border-collapse text-white       ${
                currentIndex <= 0 && "hidden"
              } `}
              onClick={handlePrevious}
            >
              <MdArrowForwardIos fill="white" fontSize={30} fontWeight={600} />
            </div>

            {OurservicesRecord && OurservicesRecord.length > 0 ? (
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
                          : -(currentIndex * 300) - 45
                        : -(currentIndex * 300)
                    }px) `,
                  }}
                >
                  {OurservicesRecord.map((e) => (
                    <div
                      className={`mt-4  w-[300px] ${"cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col  "}`}
                      key={e.id}
                      onClick={() => console.log("Product clicked")}
                    >
                      <div className="justify-center items-center w-[100%]">
                        <Image
                          src={e.img}
                          alt="book"
                          width={280}
                          height={210}
                          className="bookListShadow shadow-xl"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {e.title}
                        </h3>
                        <p className="text-white mt-2">{e.description}</p>
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
              className={`w-[40px] h-[40px]  rounded-full font-bold justify-center flex  items-center cursor-pointer text-white     ${
                currentIndex + totalWidth - 1 >= OurservicesRecord.length - 1 &&
                "hidden"
              } `}
              onClick={handleNext}
            >
              <MdArrowForwardIos fill="white" fontSize={30} fontWeight={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
