// {
//     content: string;
//     recipe: PopulatedDoc<IRecipe>;
//     author: PopulatedDoc<IUser>;
//   }

import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Recipe from "../models/recipeModel";
import Review from "../models/reviewsModel";

export const addRating = async (req: Request, res: Response) => {
  const { content, rating } = req.body;
  const review = new Review({
    content,
    rating,
    recipe: req.params.id,
    author: req.session.user!._id,
  });
  review.save();
  const recipe = await Recipe.findById(new ObjectId(req.params.id)).sort({
    "reviews.createdAt": 1,
  });
  console.log(recipe!.reviews);

  res.status(200).json({
    status: "ok",
    data: recipe,
  });
};
