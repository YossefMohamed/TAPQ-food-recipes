import React, { FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRecipe, resetRecipe } from "../redux/slices/recipeSlice";
import { AppDispatch, Rootstate } from "../redux/store/store";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  const addTagToArray = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    tag && setTags((prev) => [...prev, tag]);
    tag && setTag("");
  };
  const dispatch = useDispatch<AppDispatch>();
  const { addRecipe: addRecipeState } = useSelector(
    (state: Rootstate) => state.recipeState
  );

  const { user } = useSelector((state: Rootstate) => state.userState);
  const onSubmitRecipe = () => {
    const formData = new FormData();

    formData.append("image", image);
    dispatch(
      addRecipe({
        title,
        tags,
        ingredients,
        steps,
        description,
        formData,
        time,
      })
    );
  };
  useEffect(() => {
    dispatch(resetRecipe());
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user._id) {
      navigate("/signin?to=create-recipe");
    }
    if (addRecipeState.recipe) {
      const recipe = addRecipeState.recipe;
      dispatch(resetRecipe());
      navigate("/recipes/" + recipe);
    }
  }, [addRecipeState, user]);

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const addIngrediantToArray = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ingredient && setIngredients((prev) => [...prev, ingredient]);
    ingredient && setIngredient("");
  };
  const [time, setTime] = useState<number>();

  const [steps, setSteps] = useState<string[]>([]);
  const [step, setStep] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>();
  const onChangePicture = (e: any) => {
    console.log("picture: ", e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const addStepToArray = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    step && setSteps((prev) => [...prev, step]);
    step && setStep("");
  };
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <div className="title">Create new recipe</div>

      <input
        type="file"
        className="hidden image-input"
        ref={ref}
        onChange={onChangePicture}
      />
      <div
        className="image w-full bg-main h-[500px] rounded-t-2xl hover:opacity-75 relative cursor-pointer transition overflow-hidden"
        onClick={() => ref.current?.click()}
      >
        {image && <img src={image} className="w-full h-full object-cover" />}
        <span className="text-4xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-light">
          <BsCameraFill />
        </span>
      </div>
      <input
        placeholder="New recipe title here..."
        onChange={(e) => setTitle(e.target.value)}
        name="recipeName"
        type="text"
        value={title}
        className="text-4xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
      />

      <textarea
        name=""
        id=""
        placeholder="Add description..."
        className="w-full  outline-none py-4 text-xl  "
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>

      <form className="flex items-center gap-2" onSubmit={addTagToArray}>
        {tags.length
          ? tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-gray-500 text-tsecondary p-2 px-3 rounded flex gap-4 items-center"
              >
                #{tag}
                <span
                  className="text-sm cursor-pointer"
                  onClick={() => {
                    setTags((tags) =>
                      tags.filter((currTag, indx) => indx !== idx)
                    );
                  }}
                >
                  <AiOutlineClose />
                </span>
              </div>
            ))
          : ""}
        <input
          placeholder={tags.length === 4 ? "" : "Add up to four tags"}
          onChange={(e) => setTag(e.target.value)}
          name="recipeName"
          type="text"
          value={tag}
          disabled={tags.length === 4}
          className="text-xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
        />
      </form>
      <input
        placeholder={"Time in minutes needed to be cooked 🧭"}
        onChange={(e) => setTime(Number(e.target.value))}
        name="time"
        type="number"
        value={time}
        className="text-xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
      />
      <div className="ingredients">
        <div className="title text-lg ">Add ingredients</div>
        <div className="flex flex-col gap-5">
          {" "}
          {ingredients.length
            ? ingredients.map((ingredient, idx) => (
                <div className="item flex gap-1 items-center" key={idx}>
                  <div className="number border px-4 py-2  mr-4 rounded-[100%]">
                    {idx + 1}
                  </div>
                  {ingredient}
                  <span
                    className="text-sm cursor-pointer ml-auto"
                    onClick={() => {
                      setIngredients((ingredients) =>
                        ingredients.filter(
                          (currIgrediant, indx) => indx !== idx
                        )
                      );
                    }}
                  >
                    <AiOutlineClose />
                  </span>
                </div>
              ))
            : ""}
        </div>
        <form
          className="flex items-center gap-2"
          onSubmit={addIngrediantToArray}
        >
          <input
            placeholder={"Add you ingredients"}
            onChange={(e) => setIngredient(e.target.value)}
            name="recipeName"
            type="text"
            value={ingredient}
            className="text-xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
          />
        </form>
      </div>

      <div className="steps">
        <div className="title text-lg ">Add Steps</div>

        <div className="items-container flex flex-col gap-10 border-l-4 translate-x-4">
          {" "}
          {steps.length
            ? steps.map((step, idx) => (
                <div className="item flex gap-1 items-center" key={idx}>
                  <div className="number border px-4 py-2  mr-4 rounded-[100%] -translate-x-6 bg-white">
                    {idx + 1}
                  </div>
                  {step}
                  <span
                    className="text-sm cursor-pointer ml-auto"
                    onClick={() => {
                      setSteps((steps) =>
                        steps.filter((currStep, indx) => indx !== idx)
                      );
                    }}
                  >
                    <AiOutlineClose />
                  </span>
                </div>
              ))
            : ""}
        </div>
        <form className="flex items-center gap-2" onSubmit={addStepToArray}>
          <input
            placeholder={"Add you Steps"}
            onChange={(e) => setStep(e.target.value)}
            name="recipeName"
            type="text"
            value={step}
            className="text-xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
          />
        </form>
      </div>
      <button className="btn-primary my-10" onClick={onSubmitRecipe}>
        Submit your Recipe 😊
      </button>
    </div>
  );
};

export default CreateRecipe;
