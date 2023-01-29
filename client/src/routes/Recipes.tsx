import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import Pagination from "../components/pagination/Pagination";
import { SearchInput } from "../components/searchInput/SearchInput";
import Tag from "../components/tag/Tag";
import { getHomeData, getRecipes, getTags } from "../redux/slices/recipeSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

function Recipes() {
  const [search, setSearch] = useState("");
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onSubmitSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/recipes?search=${search}`);
  };

  const dispatch = useDispatch<AppDispatch>();
  const { getRecipes: getRecipesState, getTags: getTagStatus } = useSelector(
    (state: Rootstate) => state.recipeState
  );

  const { getHomeData: getHomeDataState } = useSelector(
    (state: Rootstate) => state.recipeState
  );

  useEffect(() => {
    dispatch(getRecipes({ search: searchParams.get("search") || "all" }));
    dispatch(getTags());
    dispatch(getHomeData());
  }, [searchParams]);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {!searchParams.get("search") ? (
        <>
          <Header toLink="/create-recipe" />
          <div className="landscape-card my-10">
            {getHomeDataState.loading ? (
              <div>Loading...</div>
            ) : (
              <LandscapeCard
                title={getHomeDataState.recipes[0].title}
                tags={getHomeDataState.recipes[0].tags}
                id={getHomeDataState.recipes[0]._id}
                imageName={getHomeDataState.recipes[0].image}
                time={getHomeDataState.recipes[0].time}
              />
            )}
          </div>
        </>
      ) : (
        <div className="text-tmuted text-4xl">
          Heres The Results For
          <span className="text-main font-bold">
            {" " + searchParams.get("search")}
          </span>
        </div>
      )}

      <div className="mt-10 mb-4">
        <SearchInput
          onChangeSearchInput={onChangeSearchInput}
          searchValue={search}
          onSubmitSearchForm={onSubmitSearchForm}
        />
      </div>
      <div className="tags flex gap-2 flex-wrap">
        {getTagStatus.loading ? (
          <div>Loading.....</div>
        ) : (
          <>
            <Tag content={"All Recipes"} selected to={`/recipes`} />
            {getTagStatus.tags.map((tag: string, idx: number) => (
              <Tag content={tag} key={idx} to={`/recipes?search=${tag}`} />
            ))}
          </>
        )}
      </div>
      {getRecipesState.loading ? (
        <div>loading.....</div>
      ) : (
        <div className="recipes my-6 grid grid-cols-3 grid-rows-3 gap-5">
          {!getRecipesState.recipes.length && (
            <div className="my-8 text-2xl">There's no results 😥</div>
          )}
          {getRecipesState.recipes.map((recipe: any, idx: number) => (
            <div className="my-6" key={idx}>
              <Card
                title={recipe.title}
                tags={recipe.tags}
                id={recipe._id}
                imageName={recipe.image}
                time={recipe.time}
              />
            </div>
          ))}
        </div>
      )}
      <div className="my-8 text-center flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default Recipes;
