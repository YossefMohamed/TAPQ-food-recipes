import React, { FormEvent, useState } from "react";
import FormInput from "../components/form/FormInput";

const CreateRecipe = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const addTagToArray = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTags((prev) => [...prev, tag]);
    setTag("");
  };
  return (
    <div>
      <div className="title">Create new recipe</div>
      <input
        placeholder="New recipe title here..."
        onChange={console.log}
        name="recipeName"
        type="text"
        className="text-4xl text-black w-full py-5 outline-none placeholder-tmuted font-bold"
      />
      <form className="flex items-center gap-2" onSubmit={addTagToArray}>
        {tags.length
          ? tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-gray-500 text-tsecondary p-2 rounded flex gap-4 items-center"
              >
                #{tag}{" "}
                <span
                  className="text-sm cursor-pointer"
                  onClick={() => {
                    setTags((tags) =>
                      tags.filter((currTag) => currTag !== tag)
                    );
                  }}
                >
                  X
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
    </div>
  );
};

export default CreateRecipe;
