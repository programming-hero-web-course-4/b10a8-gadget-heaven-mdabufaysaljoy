import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_title,
    product_image,
    price,
    category,
    description,
    rating,
    availability,
    Specification,
    product_id,
  } = product;
  return (
    <div className="bg-white rounded-xl p-4 w-80 border flex flex-col justify-start items-center">
      <img src={product_image} alt="" className="w-10/12" />
      <div className="flex w-full flex-col gap-2 items-start">
        <h3 className="text-lg font-bold">{product_title}</h3>
        <p className="text-sm text-secondary/70">Price: ${price}</p>
        <Link to={`/product/${product_id}`}>
          <button className="border-primary border text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
