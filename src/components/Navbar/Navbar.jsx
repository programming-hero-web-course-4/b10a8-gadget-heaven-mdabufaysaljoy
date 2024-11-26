import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-primary text-white"
          : "bg-white text-black"
      } py-4 rounded-t-xl`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to='/'>
          <h1 className="text-2xl font-bold">Gadget Heaven</h1>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <div className="text-[#3A3A3A]">
          <button className="bg-white px-2 py-1 rounded-full">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
