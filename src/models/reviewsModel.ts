import mongoose, { PopulatedDoc, Schema } from "mongoose";
import { IRecipe } from "./recipeModel";
import { IUser } from "./userModel";
export interface IReview extends Document {
  content: string;
  recipe: PopulatedDoc<IRecipe>;
  author: PopulatedDoc<IUser>;
  rating: Number;
}
const reviewSchema: Schema<IReview> = new mongoose.Schema<IReview>(
  {
    content: {
      type: String,
    },
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
    rating: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Review = mongoose.model<IReview>("Review", reviewSchema);
export default Review;
