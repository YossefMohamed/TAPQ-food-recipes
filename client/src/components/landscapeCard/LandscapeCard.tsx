import React, { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite } from "../../redux/slices/favoritesSlice";
import { AppDispatch, Rootstate } from "../../redux/store/store";

const LandscapeCard: FC<{
  title?: string;
  tags?: string[];
  id?: string;
  imageName?: string;
  time: number;
}> = ({ title = "Beef Burger", tags = ["Beef"], id, imageName, time }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoritesState = useSelector(
    (state: Rootstate) => state.favoritesState
  );

  const addToFavoriteOnClick = () => {
    id && dispatch(addToFavorite({ id }));
  };
  return (
    <div className="flex h-[250px] items-center relative bg-white border border-gray-200 rounded-lg shadow flex-row">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={addToFavoriteOnClick}
      >
        <span className="mt-2 inline-block rounded-full bg-main text-tsecondary p-3 text-sm font-medium">
          {" "}
          {favoritesState.loading ? (
            <BiLoader />
          ) : (
            <>
              {favoritesState.favorites
                .map((fav: any) => {
                  return fav._id === id;
                })
                .includes(true) ? (
                <AiFillHeart />
              ) : (
                <AiOutlineHeart />
              )}
            </>
          )}
        </span>
      </div>
      <img className="object-cover w-1/3 h-full" src="/image2.png" alt="" />
      <div className="flex-1 flex justify-around flex-col  p-4 leading-normal">
        <Link to={`/recipes/${id}`}>
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            <span className="text-main uppercase"> Top liked recipe : </span>
            {title}
          </h2>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {tags.map((tag: string, idx: number) => (
            <span key={idx}>{tag + " • "}</span>
          ))}
        </p>
        <hr className="my-4 text-tmuted" />
        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-main"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 text-gray-600">{time} Mins</span>
            <span className="mx-2">•</span>
            <span className="text-tmuted">1Km</span>
          </p>
          <p className="inline-flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-main"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="ml-2 "> 5.0 (2.5k) </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandscapeCard;
