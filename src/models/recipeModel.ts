import mongoose, { PopulatedDoc, Schema } from "mongoose";
import { IReview } from "./reviewsModel";
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
  reviews: any;
  time: number;
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
    time: {
      type: Number,
    },
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
      transform(doc, ret) {
        delete ret.__v;
      },
      virtuals: true,
    },
  }
);

recipeSchema.virtual("reviews", {
  localField: "_id",
  foreignField: "recipe",
  ref: "Review",
});

recipeSchema.pre(/^find/, async function (this, next: any) {
  this.populate([
    {
      path: "author",
    },
    {
      path: "reviews",
      populate: {
        path: "author",
      },
    },
  ]);
  next();
});

const Recipe = mongoose.model<IRecipe>("Recipe", recipeSchema);
export default Recipe;
