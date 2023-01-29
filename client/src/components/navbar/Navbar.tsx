import { BsHeartFill, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeToDarkTheme,
  changeToLightTheme,
} from "../../redux/slices/ThemeSlice";
import { AppDispatch, Rootstate } from "../../redux/store/store";
import "./navbar.css";
import { signoutCurrentUser } from "./../../redux/slices/userSlice";
const Navbar = () => {
  const { themeState } = useSelector((state: Rootstate) => state);

  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: Rootstate) => state.userState);

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

        <div className="item ">
          <Link to="/favorite" className="flex gap-2 items-center ">
            Favorites
          </Link>
        </div>
        {userState.user._id && (
          <div className="item ">
            <Link to="/profile" className="flex gap-2 items-center ">
              Profile
            </Link>
          </div>
        )}
        <div className="item cursor-pointer">
          {themeState.theme === "light" ? (
            <span
              onClick={() => dispatch(changeToDarkTheme())}
              className=" flex gap-2 items-center"
            >
              <BsMoonFill /> Dark
            </span>
          ) : (
            <span
              onClick={() => dispatch(changeToLightTheme())}
              className=" flex gap-2 items-center"
            >
              <BsSunFill />
              Light
            </span>
          )}
        </div>
        {!userState.user._id ? (
          <Link to="signin">
            <div className="btn-primary"> Signin 😊</div>
          </Link>
        ) : (
          <div
            className="btn-primary"
            onClick={() => dispatch(signoutCurrentUser())}
          >
            {" "}
            Logout 👋
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
