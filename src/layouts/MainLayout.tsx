import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.querySelectorAll(".tag").forEach((el) => {
      el.addEventListener("click", (e: any) => {
        navigate("/recipes?search=" + el.innerHTML);
      });
    });
    window.scrollTo({ top: 0 });
  }, [location]);
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
