import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { NotFoundError } from "../errors/not-found-error";
import Recipe from "../models/recipeModel";

export const createRecipe = async (req: Request, res: Response) => {
  const { title, ingrediantes, steps, tags } = req.body;
  const recipe = await new Recipe({
    title,
    ingrediantes,
    steps,
    tags,
    author: req.session.user!._id,
  });
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

  const recipe = await Recipe.findById(new ObjectId(id));
  if (recipe)
    return res.status(200).json({
      status: "ok",
      data: recipe,
    });

  next(new NotFoundError());
};
