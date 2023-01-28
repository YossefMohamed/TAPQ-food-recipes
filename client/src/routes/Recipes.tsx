import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import LandscapeCard from "../components/landscapeCard/LandscapeCard";
import Pagination from "../components/pagination/Pagination";
import { SearchInput } from "../components/searchInput/SearchInput";
import Tag from "../components/tag/Tag";
import { getRecipes, getTags } from "../redux/slices/recipeSlice";
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
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTags());
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
            <LandscapeCard />
          </div>
        </>
      ) : (
        <div className="text-tmuted text-4xl">
          Heres The Results For
          <span className="text-main font-bold">
            {searchParams.get("search")}
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
            <Tag content={"All Recipes"} selected />
            {getTagStatus.tags.map((tag: string, idx: number) => (
              <Tag content={tag} key={idx} />
            ))}
          </>
        )}
      </div>
      {getRecipesState.loading ? (
        <div>loading.....</div>
      ) : (
        <div className="recipes my-6 grid grid-cols-3 grid-rows-3 gap-5">
          {console.log(getRecipesState)}
          {getRecipesState.recipes.map((recipe: any, idx: number) => (
            <div className="my-6" key={idx}>
              <Card />
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
