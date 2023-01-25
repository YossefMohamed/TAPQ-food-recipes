import React from "react";
import Card from "../components/card/Card";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import Pagination from "../components/pagination/Pagination";

function Recipes() {
  return (
    <div>
      <div className="header mt-[80px] ">
        <div className="text-tmuted text-4xl">
          Welcome To{" "}
          <span className="text-main text-6xl font-semibold">TAPQ</span>
        </div>
      </div>
      <div className="landscape-card my-10">
        <LandscapeCard />
      </div>
      <div className="search my-10">
        <form>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-main focus:border-main outline-none"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-main rounded-r-lg border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      <div className="tags flex gap-4 flex-wrap">
        <div className="tag bg-main text-tsecondary">All Recipes</div>
        <div className="tag ">Meals</div>

        <div className="tag ">Deserts</div>

        <div className="tag ">Side Dish</div>
        <div className="tag ">Fast Food</div>
        <div className="tag ">Drinks</div>
        <div className="tag ">Fishes</div>
      </div>
      <div className="recipes my-6 flex flex-wrap justify-between">
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>{" "}
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>{" "}
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
        <div className="my-6">
          <Card />
        </div>
      </div>
      <div className="my-8 text-center flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default Recipes;
