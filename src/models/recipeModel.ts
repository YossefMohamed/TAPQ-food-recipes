import mongoose, { PopulatedDoc, Schema } from "mongoose";
import { IUser } from "./userModel";

export interface IRecipe extends Document {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  author: PopulatedDoc<IUser>;
  favorites: [PopulatedDoc<IUser>];
  image: string;
}

const recipeSchema: Schema<IRecipe> = new mongoose.Schema<IRecipe>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    tags: [
      {
        type: String,
        required: true,
      },
    ],

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Recipe = mongoose.model<IRecipe>("Recipe", recipeSchema);
export default Recipe;
