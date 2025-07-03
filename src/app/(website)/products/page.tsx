"use client";
import ProductCard from "@/component/products/ProductCard";
import productPh from "@/assets/dropWater.jpg"; // Adjust import path based on your project structure
import { IProduct } from "@/interface/product";
import SubHeader from "@/component/common/SubHeader";

import React, { useEffect, useState } from "react";

function Page() {
  const products: IProduct[] = [
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 20 Bottles",
      quantity: 100,
      volume: 250,
      unit: "ML",
      originalPrice: 1320,
      discountPrice: 999,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 15 Bottles",
      quantity: 100,
      volume: 500,
      unit: "ML",
      originalPrice: 1500,
      discountPrice: 1200,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 10 Bottles",
      quantity: 100,
      volume: 1,
      unit: "L",
      originalPrice: 2000,
      discountPrice: 1800,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 12 Bottles",
      quantity: 100,
      volume: 500,
      unit: "ML",
      originalPrice: 1600,
      discountPrice: 1400,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 8 Bottles",
      quantity: 100,
      volume: 750,
      unit: "ML",
      originalPrice: 1400,
      discountPrice: 1200,
    },
  ];
  const [isDevice, setIsDevice] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDevice(false);
      } else {
        setIsDevice(true);
      }
    };

    handleResize(); // Set initial image on component mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);
  return (
    <div className={`${!isDevice ? "mx-auto mt-16" : "mx-auto mt-28"}`}>
      <SubHeader title="Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-16 py-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
