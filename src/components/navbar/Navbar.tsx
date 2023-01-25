import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container flex justify-between p-4 font-bold items-center border-b-4">
      <div className="logo text-4xl">
        <Link to="/">ٌطبق</Link>
      </div>

      <div className="items flex  gap-10 items-center">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="recipes">Recipes</Link>
        </div>

        <div className="item">
          <Link to="recipes">Blog</Link>
        </div>

        <Link to="signin">
          <div className="btn-primary">Signin</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
