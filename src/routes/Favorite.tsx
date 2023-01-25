import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";

import Card from "../components/card/Card";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";

function Favorite() {
  const [grid, setGrid] = useState(true);

  return (
    <div className="my-[80px]">
      <div className="fav-header flex justify-between flex-wrap items-center">
        <div className="title"> Your Favorite Recipes :</div>
        <div className="btn-group flex gap-3 mb-5 h-fit">
          <div
            className={`button btn-primary text-2xl ${
              grid && "bg-tmuted hover:bg-main"
            } `}
            onClick={(e) => setGrid(false)}
          >
            <AiOutlineUnorderedList />
          </div>
          <div
            className={`button btn-primary text-2xl ${
              !grid && "bg-tmuted hover:bg-main"
            } `}
            onClick={(e) => setGrid(true)}
          >
            <BiGridAlt />
          </div>
        </div>
      </div>
      {grid ? (
        <div className="container flex flex-row flex-wrap justify-between gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <div className="container flex flex-col gap-8">
          <LandscapeCard />
          <LandscapeCard />
          <LandscapeCard />
          <LandscapeCard />
          <LandscapeCard />
        </div>
      )}
    </div>
  );
}

export default Favorite;
