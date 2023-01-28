import React, { useEffect, useLayoutEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "../components/card/Card";
import Comment from "../components/comments/Comment";
import Slider from "../components/slider/Slider";
import { getRecipe } from "../redux/slices/recipeSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Recipe() {
  const { recipeId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useLayoutEffect(() => {
    dispatch(
      getRecipe({
        id: recipeId!,
      })
    );
  }, [recipeId]);

  const { getRecipe: getRecipeState } = useSelector(
    (state: Rootstate) => state.recipeState
  );
  console.log(getRecipeState);

  return (
    <>
      {getRecipeState.loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <nav className="flex mt-[80px] mb-[20px]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    to="/recipes"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Recipes
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Beef Hamburger
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="recipe-header h-[500px] rounded-t-2xl overflow-hidden">
            <img src="/image2.png" className="w-full h-full object-cover" />
          </div>
          <div className="description flex m-10">
            <div className="left flex flex-col flex-1 gap-10 px-5 border-x py-5">
              <div className="rating flex gap-2 items-center text-tmuted">
                Review by 150 People{" "}
                <div className="text-main flex items-center">
                  <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar /> <AiOutlineStar />
                </div>
                4
              </div>
              <div className="brive italic text-xl font-semibold text-gray-800">
                {getRecipeState.recipe.description}
              </div>
              <div className="author border-y py-5">
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
              <div className="ingrediats flex flex-col gap-5">
                <div className="title">Ingrediats</div>
                {getRecipeState.recipe.ingredients.map(
                  (ingredient: string, idx: number) => (
                    <div className="item flex gap-1 items-center" key={idx}>
                      <div className="number border px-4 py-2  mr-4 rounded-[100%]">
                        {idx + 1}
                      </div>
                      {ingredient}
                    </div>
                  )
                )}
              </div>

              <div className="steps flex flex-col gap-10">
                <div className="title">Steps</div>

                <div className="items-container flex flex-col gap-10 border-l-4 translate-x-4">
                  {getRecipeState.recipe.steps.map(
                    (step: string, idx: number) => (
                      <div className="item flex gap-1 items-center" key={idx}>
                        <div className="number border px-4 py-2  mr-4 rounded-[100%] -translate-x-6 bg-white">
                          {idx + 1}
                        </div>
                        {step}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="comments">
                <Comment />
              </div>
            </div>
            <div className="right w-[30%] px-5 relative py-5">
              <div className="sticky top-5">
                <Card />
              </div>
            </div>
          </div>

          <div className="related">
            <div className="title">Related Recipes :</div>
            <div className="recipes my-10">
              <Slider>
                <div className="keen-slider__slide ">
                  <Card />
                </div>{" "}
                <div className="keen-slider__slide">
                  <Card />
                </div>{" "}
                <div className="keen-slider__slide">
                  <Card />
                </div>{" "}
                <div className="keen-slider__slide">
                  <Card />
                </div>{" "}
                <div className="keen-slider__slide">
                  <Card />
                </div>{" "}
                <div className="keen-slider__slide">
                  <Card />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recipe;
