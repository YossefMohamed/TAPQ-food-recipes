import React, { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../components/card/Card";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import { getFavorites } from "../redux/slices/favoritesSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Favorite() {
  const dispatch = useDispatch<AppDispatch>();

  const { userState } = useSelector((state: Rootstate) => state);
  const { favoritesState } = useSelector((state: Rootstate) => state);
  const navigate = useNavigate();
  useEffect(() => {
    userState.user._id
      ? dispatch(getFavorites())
      : navigate("/signin?to=favorite");
  }, []);
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
          {!favoritesState.favorites.length && (
            <div className="text-4xl ">There are no favorites recipes 🙄</div>
          )}
          {favoritesState.favorites.map((recipe: any, idx: number) => (
            <Card
              title={recipe.title}
              tags={recipe.tags}
              id={recipe._id}
              key={idx}
              time={recipe.time}
            />
          ))}
        </div>
      ) : (
        <div className="container flex flex-col gap-8">
          {favoritesState.favorites.map((recipe: any, idx: number) => (
            <LandscapeCard
              title={recipe.title}
              tags={recipe.tags}
              id={recipe._id}
              key={idx}
              time={recipe.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
