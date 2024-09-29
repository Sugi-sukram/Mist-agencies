"use client";
import ProductCard from "@/component/products/ProductCard";
import React from "react";
import productPh from "@/assets/dropWater.jpg"; // Adjust import path based on your project structure
import { IProduct } from "@/interface/product";
import SubHeader from "@/component/common/SubHeader";

function Page() {
  const products: IProduct[] = [
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 20 Bottles",
      quantity: 100,
      size: "250",
      unit: "ML",
      originalPrice: 1320,
      discountPrice: 999,
      discountPercentage: 24,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 15 Bottles",
      quantity: 100,
      size: "500",
      unit: "ML",
      originalPrice: 1500,
      discountPrice: 1200,
      discountPercentage: 20,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 10 Bottles",
      quantity: 100,
      size: "1",
      unit: "L",
      originalPrice: 2000,
      discountPrice: 1800,
      discountPercentage: 10,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 12 Bottles",
      quantity: 100,
      size: "500",
      unit: "ML",
      originalPrice: 1600,
      discountPrice: 1400,
      discountPercentage: 12,
    },
    {
      image: productPh.src,
      title: "Drinking Water",
      description: "Pack Of 8 Bottles",
      quantity: 100,
      size: "750",
      unit: "ML",
      originalPrice: 1400,
      discountPrice: 1200,
      discountPercentage: 14,
    },
  ];

  return (
    <div className="container mx-auto">
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
