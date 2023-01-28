import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toLink }: { toLink: string }) => {
  return (
    <div className="header">
      <div className="text-tmuted text-4xl flex items-center">
        <span>
          Welcome To
          <span className="text-main text-6xl font-bold">TAPQ</span>
        </span>

        <Link to={toLink} className="btn btn-primary text-sm ml-auto">
          Create a recipe 👨‍🍳
        </Link>
      </div>
    </div>
  );
};

export default Header;
