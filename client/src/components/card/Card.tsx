import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite } from "../../redux/slices/favoritesSlice";
import { AppDispatch, Rootstate } from "../../redux/store/store";

const Card: FC<{
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
    <div className="overflow-hidden rounded-2xl shadow-2xl  hover:shadow-xl hover:bg-gray-100 ">
      <div className="flex items-center h-[250px] overflow-hidden">
        <img
          src={`${
            imageName
              ? "http://localhost:5000/images/" + imageName
              : "/image2.png"
          }`}
          alt="Hamburger"
          className="w-full h-full"
        />
      </div>
      <div className="p-2">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <p className="text-tmuted uppercase text-sm last:hidden">
              {tags.map((tag: string, idx: number) => (
                <span key={idx}>{tag + " • "}</span>
              ))}{" "}
            </p>

            <Link to={`/recipes/${id}`}>
              <h2 className="mt-2 text-lg font-semibold text-gray-800">
                {title}
              </h2>
            </Link>
          </div>
          <span
            className="mt-2 inline-block rounded-full bg-main text-tsecondary p-3 text-sm font-medium cursor-pointer"
            onClick={addToFavoriteOnClick}
          >
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

export default Card;
