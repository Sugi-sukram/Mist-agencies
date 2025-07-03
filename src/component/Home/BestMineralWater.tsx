import { motion } from "framer-motion";
import dropWater from "../../assets/dropWater.jpg";

const BestMineralWater = () => {
  const features = [
    {
      id: 1,
      title: "Source and Purity",
      description:
        "Mineral water is collected from natural underground sources and the purity of the water is paramount.",
      positionClass: "top-10 left-10 md:left-40 text-left md:text-right", // Adjust positioning for mobile screens
      direction: "left", // Direction for left-side animation
    },
    {
      id: 2,
      title: "Mineral Content",
      description:
        "Each bottle is enriched with calcium, magnesium, sodium, and potassium. These vital minerals add numerous health benefits.",
      positionClass: "top-[30%] left-10 text-left md:text-right", // Adjust for mobile
      direction: "left", // Direction for left-side animation
    },
    {
      id: 3,
      title: "pH Level",
      description:
        "A slightly alkaline pH level of water (above 7) is better for health compared to its potential health benefits.",
      positionClass: "bottom-20 left-10 md:left-40 text-left md:text-right", // Adjust for mobile
      direction: "left",
    },
    {
      id: 4,
      title: "Taste",
      description:
        "Taste varies from very light to distinctly delicious, offering customers various taste profiles depending on the source.",
      positionClass: "top-10 right-10 md:right-40 text-left", // Adjust for mobile
      direction: "right", // Direction for right-side animation
    },
    {
      id: 5,
      title: "Certifications and Testing",
      description:
        "Our bottled water undergoes rigorous testing to meet national safety standards for consumers.",
      positionClass: "top-[30%] right-10 text-left", // Adjust for mobile
      direction: "right",
    },
    {
      id: 6,
      title: "Packaging",
      description:
        "Eco-friendly practices make the packaging sustainable, enhancing the overall drinking experience.",
      positionClass: "bottom-20 right-10 md:right-40 text-left", // Adjust for mobile
      direction: "right",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl text-bluecolor">Best Mineral Water</h2>
        <div className="mt-8 gap-8">
          <div
            className="relative bg-contain bg-no-repeat bg-center h-[500px] sm:h-[600px] w-full"
            style={{
              backgroundImage: `url(${dropWater.src})`,
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`absolute w-[200px] sm:w-[250px] ${feature.positionClass}`}
                initial={{
                  opacity: 0,
                  x: feature.direction === "left" ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2, // Stagger animation for each item
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h3 className="text-lg md:text-xl text-lightgreen font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMineralWater;
