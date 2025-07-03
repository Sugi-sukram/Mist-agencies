import { motion } from "framer-motion";
import dropWater from "../../assets/dropWater.jpg";

const BestMineralWater = () => {
  const features = [
    {
      id: 1,
      title: "Source and Purity",
      description:
        "Mineral water is collected from natural underground sources and the purity of the water is paramount.",
      positionClass: "top-10 left-40 text-right", // Unique position class
      direction: "left", // Added direction for left-side animation
      positionClass: "top-10 left-10 md:left-40 text-left md:text-right", // Adjust positioning for mobile screens
    },
    {
      id: 2,
      title: "Mineral Content",
      description:
        "Each bottle is enriched with calcium, magnesium, sodium, and potassium. These vital minerals add numerous health benefits.",
      positionClass: "top-[40%] left-10 text-right", // Unique position class
      direction: "left", // Added direction for left-side animation
      positionClass: "top-[30%] left-10 text-left md:text-right", // Adjust for mobile
    },
    {
      id: 3,
      title: "pH Level",
      description:
        "A slightly alkaline pH level of water (above 7) is better for health compared to its potential health benefits.",
      positionClass: "bottom-20 left-10 md:left-40 text-left md:text-right", // Adjust for mobile
    },
    {
      id: 4,
      title: "Taste",
      description:
        "Taste varies from very light to distinctly delicious, offering customers various taste profiles depending on the source.",
      positionClass: "top-10 right-10 md:right-40 text-left", // Adjust for mobile
    },
    {
      id: 5,
      title: "Certifications and Testing",
      description:
        "Our bottled water undergoes rigorous testing to meet national safety standards for consumers.",
      positionClass: "top-[30%] right-10 text-left", // Adjust for mobile
    },
    {
      id: 6,
      title: "Packaging",
      description:
        "Eco-friendly practices make the packaging sustainable, enhancing the overall drinking experience.",
      positionClass: "bottom-20 right-10 md:right-40 text-left", // Adjust for mobile
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl text-bluecolor">
          Best Mineral Water
        </h2>
        <div className="mt-8 gap-8">
          <div
            className="relative bg-contain bg-no-repeat bg-center h-[500px] sm:h-[600px] w-full"
            style={{
              backgroundImage: `url(${dropWater.src})`,
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`absolute w-[200px] sm:w-[250px] ${feature.positionClass}`}
              >
                <h3 className="text-lg md:text-xl text-lightgreen font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMineralWater;
