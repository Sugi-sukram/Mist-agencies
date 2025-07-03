import React from "react";

const ServiceSection = () => {
  return (
    <div className="container mx-auto  p-12">
      {/* Wrapper div */}
      <div className="space-y-10">
        {/* Commercial Area */}
        <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg"></div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Commercial Area</h3>
            <p className="text-gray-600 my-4">
              At our disposal, we specialize in providing premium packaging
              solutions for commercial needs. From offices to shopping malls, we
              deliver exceptional services.
            </p>
            <button className="px-12 py-2 bg-[#94C245] text-white rounded">
              Contact Now
            </button>
          </div>
        </div>

        {/* Industrial Area */}
        <div className="flex flex-col md:flex-row-reverse items-start md:space-x-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg"></div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Industrial Area</h3>
            <p className="text-gray-600 my-4">
              Use dynamically reactive custom packaging strategies to ensure
              industrial safety and efficiency. Tailored to manufacturing sites,
              we guarantee secure operations.
            </p>
            <button className="px-12 py-2 bg-[#94C245] text-white rounded">
              Contact Now
            </button>
          </div>
        </div>

        {/* Marriage Hall */}
        <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg"></div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Marriage Hall</h3>
            <p className="text-gray-600 my-4">
              Our marriage hall packaging solutions ensure everything is taken
              care of to provide a memorable experience for your special day.
            </p>
            <button className="px-12 py-2 bg-[#94C245] text-white rounded">
              Contact Now
            </button>
          </div>
        </div>

        {/* Hotels & Restaurant */}
        <div className="flex flex-col md:flex-row-reverse items-start md:space-x-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg"></div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold">Hotels & Restaurant</h3>
            <p className="text-gray-600 my-4">
              Provide the best hospitality packaging solutions for hotels and
              restaurants, enhancing both customer service and operational
              efficiency.
            </p>
            <button className="px-12 py-2 bg-[#94C245] text-white rounded">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
