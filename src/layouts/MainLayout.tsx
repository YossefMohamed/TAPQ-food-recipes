import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mx-[150px]">
      <Navbar />

      <div className="my-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
