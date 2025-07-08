"use client";
import ProductCard from "@/component/products/ProductCard";
import productPh from "@/assets/dropWater.jpg"; // Adjust import path based on your project structure
import { IProduct } from "@/interface/product";
import SubHeader from "@/component/common/SubHeader";

import React, { useEffect, useState } from "react";
import axiosPrivate from "@/utils/axios";
import { Products } from "@prisma/client";
import { message } from "antd";

function Page() {
  const [isDevice, setIsDevice] = useState<boolean>(true);
  const [products, setProducts] = useState<Products[]>([]);

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

  const getProducts = async () => {
    try {
      const res = await axiosPrivate.get(`/api/v1/public/products`);
      if (res && res.data) {
        setProducts(res.data.products);
      }
    } catch (error) {
      message.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={`${!isDevice ? "mx-auto mt-16" : "mx-auto mt-25"}`}>
      <SubHeader title="Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-16 py-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
