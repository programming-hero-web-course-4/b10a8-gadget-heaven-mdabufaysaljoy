import React from "react";
import "./ProductContainer.css";
import { NavLink, Outlet } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";

const ProductContainer = () => {

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="text-3xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-4 items-start">
        <div className="categories flex flex-col gap-4 bg-white rounded-xl p-4">
          <NavLink to="/">All Products</NavLink>
          <NavLink to="/laptop">Laptops</NavLink>
          <NavLink to="/phone">Phones</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
          <NavLink to="/smart-watch">Smart Watches</NavLink>
          <NavLink to="/mac">MacBook</NavLink>
          <NavLink to="/ios">Iphone</NavLink>
        </div>
        <Outlet/>
        {/* <Products products={products} /> */}
      </div>
    </div>
  );
};

export default ProductContainer;
