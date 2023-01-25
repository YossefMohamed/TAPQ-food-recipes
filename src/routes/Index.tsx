import React from "react";
import Card from "../components/card/Card";
import FeaturedCard from "../components/featuredCard/FeaturedCard";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import Slider from "../components/slider/Slider";

function Index() {
  return (
    <>
      <div className="main-screen flex justify-between">
        <div className="left flex flex-col justify-center flex-wrap flex-1 gap-5">
          <div className="typo text-8xl">
            Good <span className="text-main font-semibold">Food</span>
            <br />
            Good Mood
          </div>
          <span className="btn-primary">Get Started</span>
        </div>

        <div className="right flex items-center justify-between ">
          <div className="image-container ">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-3xl overflow-hidden">
              <div className="image1 w-[300px] h-[200px]"></div>
              <div className="image2 w-[300px] h-[200px]"></div>
              <div className="image3 w-[300px] h-[200px]"></div>
              <div className="image4 w-[300px] h-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured my-[50px]">
        <div className="title"> Featured recipes :</div>
        <div className="slider">
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
      <div className="landscape-recipe">
        <div className="title">Recipe Of The day:</div>
        <div className="landscape-card my-10">
          <LandscapeCard />
        </div>
      </div>
      <div className="products">
        <div className="title">TABQ Recipes :</div>
        <div className="tags flex gap-4 flex-wrap">
          <div className="tag bg-main text-tsecondary">All Recipes</div>
          <div className="tag ">Meals</div>

          <div className="tag ">Deserts</div>

          <div className="tag ">Side Dish</div>
          <div className="tag ">Fast Food</div>
          <div className="tag ">Drinks</div>
          <div className="tag ">Fishes</div>
        </div>
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
    </>
  );
}

export default Index;
