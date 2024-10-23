import homePageImage from "../../assets/home-page_02-10.jpg";

const Hero = () => {
  return (
    <section
      className="bg-blue-100 text-center py-20 relative bg-cover bg-center h-[550px] bg-no-repeat"
      style={{
        backgroundImage: `url(${homePageImage.src})`,
      }}
    >
      {/* Content wrapper */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-6 md:w-[60%] md:pl-16 text-left">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Mineral Water With Great Quality
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-white mt-4 leading-relaxed">
          Mineral water offers a refreshing and healthy option with a unique
          taste profile that can be quite appealing.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-limeGreen text-white rounded-md hover:bg-limeGreen-600 transition-colors duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Hero;
