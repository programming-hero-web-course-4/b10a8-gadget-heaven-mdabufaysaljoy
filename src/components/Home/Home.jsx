import React from "react";
import { Link, Outlet } from "react-router-dom";

import ProductContainer from "../ProductContainer/ProductContainer";
import Banner from "../../assets/banner.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-primary  text-white rounded-b-xl pt-12 pb-60 mb-96">
        <div className="container mx-auto px-4 text-center space-y-10">
          <h1 className="text-5xl font-bold leading-snug w-3/4 mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="w-1/2 mx-auto text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="bg-white px-4 py-2 rounded-full mt-4 text-primary font-bold">
              Shop Now
            </button>
          </Link>
        </div>
        <div className=" absolute -bottom-72 flex items-center">
          <span className="border-2 border-white rounded-xl p-4 w-2/3 mx-auto bg-white/15">
            <img src={Banner} alt="" className=" rounded-xl" />
          </span>
        </div>
      </div>

      <ProductContainer />
    </>
  );
};

export default Home;
