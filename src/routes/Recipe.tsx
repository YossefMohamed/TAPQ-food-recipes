import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Recipe() {
  const { recipeId } = useParams();

  return (
    <div className=" mt-[80px]">
      <div className="recipe-header h-[500px] rounded-t-2xl overflow-hidden">
        <img src="/image2.png" className="w-full h-full object-cover" />
      </div>
      <div className="description flex m-10">
        <div className="left flex flex-col flex-1 gap-10">
          <div className="rating flex gap-2 items-center">
            Review by 150 People{" "}
            <div className="text-main flex items-center">
              <AiFillStar /> <AiFillStar /> <AiFillStar />
              <AiFillStar /> <AiOutlineStar />
            </div>
            4
          </div>
          <div className="brive italic text-xl font-semibold text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            voluptate reiciendis impedit dicta est aspernatur maiores alias,
            veritatis illo molestias accusantium iusto. Et id, nemo possimus
            maiores neque voluptatum velit!
          </div>
          <div className="author">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn.dribbble.com/users/806561/avatars/small/6b21bead9a025f3cf4b9d4cf942f5707.png?1619421975"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                25 Recipes
              </div>
            </div>
          </div>
        </div>
        <div className="right w-[30%]">a</div>
      </div>
    </div>
  );
}

export default Recipe;
