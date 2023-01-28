import { useSelector } from "react-redux";
import moment from "moment";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import { Rootstate } from "../redux/store/store";

export const Profile = () => {
  const { user } = useSelector((state: Rootstate) => state.userState);
  const { favorites } = useSelector((state: Rootstate) => state.favoritesState);
  return (
    <div>
      <div className="header flex items-center border pr-5 rounded">
        <div className="flex items-center space-x-4">
          <img
            src={`https://api.dicebear.com/5.x/croodles/svg?seed=${user.name}`}
            alt={user.name}
          />
          <div className="font-medium  text-xl flex flex-col gap-2">
            <div className="font-bold">{user.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {moment(user.createdAt).format("LL")}
            </div>
            <div className="font-medium  text-sm ">
              {" "}
              Recipes created : 5 recipes
            </div>
          </div>
        </div>{" "}
        <div className="edit btn-primary ml-auto">Edit 📝</div>
      </div>

      <div className="title">Favorite Recipes :</div>
      {!favorites.length && (
        <div className="text-4xl ">There are no favorites recipes 🙄</div>
      )}

      <div className="flex gap-3 flex-col">
        {favorites.map((recipe: any) => (
          <LandscapeCard
            title={recipe.title}
            tags={recipe.tags}
            id={recipe._id}
          />
        ))}
      </div>

      <div className="title mt-[150px]">Recipes Created :</div>
      {!favorites.length && (
        <div className="text-4xl ">There are no favorites recipes 🙄</div>
      )}
      <div className="flex gap-3 flex-col">
        {favorites.map((recipe: any) => (
          <LandscapeCard
            title={recipe.title}
            tags={recipe.tags}
            id={recipe._id}
          />
        ))}
      </div>
    </div>
  );
};
