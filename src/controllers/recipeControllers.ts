import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { NotFoundError } from "../errors/not-found-error";
import Recipe from "../models/recipeModel";

export const createRecipe = async (req: Request, res: Response) => {
  const { title, ingredients, steps, tags, description } = req.body;
  const recipe = new Recipe({
    title,
    ingredients,
    steps,
    tags,
    description,
    author: req.session.user!._id,
  });
  await recipe.save();
  res.status(200).json({
    status: "ok",
    data: recipe,
  });
};

export const getRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log(id);

  const recipe = await Recipe.findById(new ObjectId(id));
  console.log(id, recipe);

  if (recipe)
    return res.status(200).json({
      status: "ok",
      data: recipe,
    });

  next(new NotFoundError());
};

export const getRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log(id);

  const recipes = await Recipe.find({}).sort("-createdAt");

  return res.status(200).json({
    status: "ok",
    data: recipes,
  });
};
