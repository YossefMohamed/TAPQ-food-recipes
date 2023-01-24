import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container flex justify-between p-4 font-bold items-center border-b-4">
      <div className="logo text-4xl">ٌطبق</div>
      <div className="menu flex justify-between items-center w-[33%]">
        <div className="item cursor-pointer">Recipes</div>
        <div className="item cursor-pointer">Lifestyle</div>
        <div className="item cursor-pointer">Blog</div>
      </div>

      <div className="btn-primary">Get Started</div>
    </div>
  );
};

export default Navbar;
