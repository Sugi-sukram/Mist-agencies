import homePageImage from "../../assets/home-page_02-10.jpg";

const Hero = () => {
  return (
    <section
      className="bg-blue-100 text-center py-20 relative bg-cover bg-center h-[550px] bg-no-repeat "
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      <div className="absolute w-[40%] pl-32 text-left justify-center">
        <h2 className="text-6xl font-bold text-white text-left ">
          Mineral Water With Great Quality
        </h2>
        <p className="text-lg text-white mt-4 text-left">
          Mineral water offers a refreshing and healthy option with a unique
          taste profile that can be quite appealing.
        </p>
          <button className="mt-8 px-6 py-2 bg-limeGreen text-white rounded-md hover:bg-limeGreen-600">
            Read More
          </button>
      </div>
    </section>
  );
};

export default Hero;
