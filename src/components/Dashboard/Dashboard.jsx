import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [cartToggle, setCartToggle] = useState("wishlist");
  return (
    <div className="bg-primary flex justify-center items-center text-white">
      <div className="space-y-4 py-12 text-center">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p className="text-[16px] font-[400]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 items-center justify-center">
          <NavLink
            className={
              cartToggle === "cart"
                ? `bg-white px-12 py-2 rounded-full mt-4 text-primary font-bold`
                : `border border-white px-12 py-2 rounded-full mt-4 text-white font-semibold`
            }
            onClick={() => setCartToggle("cart")}
          >
            Cart
          </NavLink>
          <NavLink
            className={
              cartToggle === "cart"
                ? `border border-white px-12 py-2 rounded-full mt-4 text-white font-semibold`
                : `bg-white px-12 py-2 rounded-full mt-4 text-primary font-bold`
            }
            onClick={() => setCartToggle("wishlist")}
          >
            Wishlist
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
