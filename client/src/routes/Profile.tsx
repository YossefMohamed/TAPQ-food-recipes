import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import { AppDispatch, Rootstate } from "../redux/store/store";
import Model from "../components/model/Model";
import { useEffect, useState } from "react";
import FormInput from "../components/form/FormInput";
import { editUser } from "../redux/slices/userSlice";
import { addToaster } from "../redux/slices/ToasterSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user } = useSelector((state: Rootstate) => state.userState);
  const { favorites } = useSelector((state: Rootstate) => state.favoritesState);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const submitEdit = () => {
    if (!name)
      return dispatch(
        addToaster(
          "<span className='font-bold'> " + "Name must be valid" + " :</span> "
        )
      );
    dispatch(editUser({ name }));
    setShowModal(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    !user._id && navigate("/signin?to=profile");
  }, []);
  return (
    <div>
      <Model
        showModal={showModal}
        setShowModal={setShowModal}
        title="Change user name"
        onSubmit={submitEdit}
      >
        <FormInput
          label="Name"
          handleonchange={(e) => setName(e.target.value)}
          name="name"
          type="input"
          value={name}
        />
      </Model>
      <div className="header flex items-center border pr-5 rounded py-5">
        <div className="flex items-center space-x-4 flex-1">
          <img
            src={`https://api.dicebear.com/5.x/croodles/svg?seed=${user.name}`}
            alt={user.name}
            className="w-[100px] h-[100px] object-none"
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
        <button
          className="edit btn-primary ml-auto"
          onClick={() => setShowModal(true)}
        >
          Edit 📝
        </button>
      </div>

      <div className="title">Favorite Recipes :</div>
      {!favorites.length && (
        <div className="text-2xl ">There are no favorites recipes 🙄</div>
      )}

      <div className="flex gap-3 flex-col">
        {favorites.map((recipe: any) => (
          <LandscapeCard
            title={recipe.title}
            tags={recipe.tags}
            id={recipe._id}
            time={recipe.time}
          />
        ))}
      </div>

      <div className="title mt-[150px]">Recipes Created :</div>
      {!favorites.length && (
        <div className="text-2xl ">There are no favorites recipes 🙄</div>
      )}
      <div className="flex gap-3 flex-col">
        {favorites.map((recipe: any) => (
          <LandscapeCard
            title={recipe.title}
            tags={recipe.tags}
            id={recipe._id}
            time={recipe.time}
          />
        ))}
      </div>
    </div>
  );
};
