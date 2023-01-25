import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container flex justify-between p-4 font-bold items-center border-b-4">
      <div className="logo text-4xl">ٌطبق</div>

      <div className="btn-primary">Get Started</div>
    </div>
  );
};

export default Navbar;
