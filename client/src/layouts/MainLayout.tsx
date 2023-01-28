import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import Toaster from "../components/toaster/Toaster";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../redux/store/store";
import { getCurrentUser } from "../redux/slices/userSlice";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    document.querySelectorAll(".tag").forEach((el) => {
      el.addEventListener("click", (e: any) => {
        navigate("/recipes?search=" + el.innerHTML);
      });
    });
    window.scrollTo({ top: 0 });
    dispatch(getCurrentUser());
  }, [location]);
  const { errors }: any = useSelector<Rootstate>((state) => state.toasterState);
  return (
    <div className="mx-[150px]">
      <Navbar />
      <div className="fixed toaster-container top-[100px] right-[150px] flex flex-col gap-1 z-50">
        {errors.map((err: string) => (
          <Toaster message={err} />
        ))}
      </div>
      <div className="my-[80px] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
