import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { store } from "./redux/store/store";
import CreateRecipe from "./routes/CreateRecipe";
import Favorite from "./routes/Favorite";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Recipe from "./routes/Recipe";
import Recipes from "./routes/Recipes";
import { Provider } from "react-redux";
import { Profile } from "./routes/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error Not Found 404</div>,
    children: [
      { index: true, element: <Index /> },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/:recipeId",
        element: <Recipe />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/create-recipe",
        element: <CreateRecipe />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
