import { AiOutlineHeart } from "react-icons/ai";

function FeaturedCard() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100 ">
      <div className="flex items-center h-[300px] overflow-hidden">
        <img src="/image2.png" alt="Hamburger" className="w-full h-full" />
      </div>
      <div className="py-5">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="text-center flex-1">
            <h2 className="mt-2  text-xl font-semibold text-gray-800">
              Easy To Use
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
