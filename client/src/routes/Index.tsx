import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import Slider from "../components/slider/Slider";
import Tag from "../components/tag/Tag";
import { getHomeData, getTags } from "../redux/slices/recipeSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { getHomeData: getHomeDataState, getTags: getTagStatus } = useSelector(
    (state: Rootstate) => state.recipeState
  );
  useEffect(() => {
    dispatch(getTags());

    dispatch(getHomeData());
  }, []);

  return !getHomeDataState.loading ? (
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
            {getHomeDataState.recipes.map((recipe: any) => (
              <div className="keen-slider__slide">
                <Card
                  title={recipe.title}
                  tags={recipe.tags}
                  id={recipe._id}
                  imageName={recipe.image}
                  time={recipe.time}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="landscape-recipe">
        <div className="title">Recipe Of The day:</div>
        <div className="landscape-card my-10">
          <LandscapeCard
            title={getHomeDataState.recipes[0].title}
            tags={getHomeDataState.recipes[0].tags}
            id={getHomeDataState.recipes[0]._id}
            imageName={getHomeDataState.recipes[0].image}
            time={getHomeDataState.recipes[0].time}
          />
        </div>
      </div>
      <div className="products">
        <div className="title">TABQ Recipes :</div>
        <div className="tags flex gap-4 flex-wrap">
          {getTagStatus.loading ? (
            <div>Loading.....</div>
          ) : (
            <>
              <Tag content={"All Recipes"} selected to={"/recipes"} />
              {getTagStatus.tags.map((tag: string, idx: number) => (
                <Tag content={tag} key={idx} to={`/recipes?search=${tag}`} />
              ))}
            </>
          )}
        </div>
        <div className="recipes my-10">
          <Slider>
            {getHomeDataState.recipes.map((recipe: any) => (
              <div className="keen-slider__slide">
                <Card
                  title={recipe.title}
                  tags={recipe.tags}
                  id={recipe._id}
                  imageName={recipe.image}
                  time={recipe.time}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  ) : (
    <div>Loading.....</div>
  );
}

export default Index;
