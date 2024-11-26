import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {
  const getproduct = useLoaderData();
  const params = useParams();
  const [product, setProduct] = useState(
    getproduct.find((pdct) => pdct.product_id === params.id) || {}
  );
  const [cart, setCart] = useState([]);
  const handleSetCart = (product_id) => {
   setCart([...cart, product_id]);
  };
  const {
    product_title,
    product_image,
    price,
    category,
    description,
    rating,
    availability,
    Specification,
  } = product;
  console.log(product);
  console.log(params);
  return (
    <div className="bg-primary text-white pt-12 pb-36 mb-96 rounded-b-xl">
      <div className="w-1/2 mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full absolute -translate-x-1/2 left-1/2 my-8">
        <div className="bg-white rounded-xl w-2/3 mx-auto flex items-start gap-4 p-4">
          <img src={product_image} alt="" className="h-96 rounded-xl" />
          <div className="text-black py-8 space-y-3">
            <h3 className="text-xl font-bold">{product_title}</h3>
            <h4 className="text-md font-semibold text-secondary/60">
              Price: ${price}
            </h4>
            <div>
              <span
                className={`border ${
                  availability
                    ? "border-green-500 bg-green-100 text-green-500"
                    : "border-red-500 bg-red-100 text-red-500"
                } px-2 py-1 rounded-full `}
              >
                {availability ? "InStock" : "Out Of Stock"}
              </span>
            </div>
            <p className="text-sm text-secondary/80">{description}</p>
            <div>
              <h3 className="text-xl font-bold">Specifications:</h3>
              <ol className="text-sm text-secondary/60 list-decimal space-y-1 py-2 ps-6">
                {Specification.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold">Ratings ⭐</h3>
              <div className="flex items-center gap-2">
                <p>⭐⭐⭐⭐⭐</p>
                <span className="text-[10px] bg-secondary/10 p-1 rounded-full">
                  {rating}
                </span>
              </div>
            </div>
            <div className="text-sm ">
              <button className="bg-primary rounded-full px-3 py-2 text-white">
                Add to cart <i className="ri-shopping-cart-2-line"></i>
              </button>
              <button className="bg-white px-2 py-1 rounded-full border ml-2">
                <i className="ri-heart-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
