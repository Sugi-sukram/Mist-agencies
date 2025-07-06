import Image from "next/image"; // Import Next.js Image component
import { Card } from "antd";
import { Products } from "@/prisma/index";
// import React from "react";
interface props {
  // product: IProduct;
  product: Products;
}

function ProductCard({ product }: props) {
  return (
    <Card className="text-center rounded-lg w-full min-w-fit max-w-xl  p-4  bg-white shadow-md">
      <div>
        <Image
          src={product.ImageUrl}
          alt={product.description}
          width={200} // Define width explicitly
          height={200} // Define height explicitly
          className="rounded-lg object-cover w-full h-48"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-nowrap">
          {product.name}{" "}
          <span className="text-2xl  text-black font-bold">
            {product.volume}
            {product.unit}
          </span>
        </h3>
      </div>

      <p className="mt-2 text-sm text-textBlue">{product.description}</p>

      <div className="flex justify-center items-center mt-2 gap-2 text-center w-full m-auto">
        <p className="text-gray-500 line-through">₹{product.originalPrice}</p>
        <p className="text-2xl font-semibold text-gray-900">
          ₹{product.discountPrice}
        </p>
        <p className="ml-2 p-2 text-xs bg-textBlue rounded-full text-white flex items-center justify-center w-12 h-12">
          {`${(
            ((product.originalPrice - product.discountPrice) /
              product.originalPrice) *
            100
          ).toFixed(1)}%`}
        </p>
      </div>

      <div className="mt-4">
        <button className="text-lg! px-10 bg-lightgreen text-white rounded-md">
          BUY NOW
        </button>
      </div>
    </Card>
  );
}

export default ProductCard;
