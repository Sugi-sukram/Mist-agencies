import Image from "next/image";
import appIcon from "../../assets/dropWater.jpg"; // Correct way to import an image

const Welcome = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container pl-32 flex  justify-between text-left gap-[5%]">
        <div className=" mx-auto  w-[55%] text-left">
          <h2 className="text-bluecolor text-3xl">Welcome to</h2>
          <h2 className="text-6xl  text-limeGreen">Mist Drinking Water</h2>
          <p className="mt-4 text-gray-600">
            Mist Agencies is a premier packaged drinking water brand dedicated
            to offering the purest taste enriched with all the essential
            goodness. With our expertise, knowledge, and experience, we
            guarantee the highest quality water.
          </p>
          <button className="mt-6 px-6 py-2 bg-bluecolor text-white rounded-none hover:bg-bluecolor ">
            Know More {"➙"}
          </button>
        </div>
        <div className="w-[40%] flex justify-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center w-[300px] h-[300px] relative">
            <Image
              src={appIcon}
              alt="Mist Agencies Product"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
