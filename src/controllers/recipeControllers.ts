import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { NotFoundError } from "../errors/not-found-error";
import Recipe, { IRecipe } from "../models/recipeModel";
import User from "../models/userModel";
import sharp from "sharp";

export const createRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, ingredients, steps, tags, description, time } = req.body;
    const recipe = new Recipe({
      title,
      ingredients,
      steps,
      tags,
      description,
      author: req.session.user!._id,
      time,
    });
    await recipe.save();
    res.status(200).json({
      status: "ok",
      data: recipe,
    });
  } catch (error: any) {
    console.log(error.message);

    next(new NotFoundError());
  }
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

export const getRecipes = async (req: Request, res: Response) => {
  const recipes = await Recipe.find(
    req.query.search && req.query.search !== "all"
      ? {
          $or: [
            { title: { $regex: req.query.search, $options: "i" } },
            {
              tags: {
                $elemMatch: { $regex: req.query.search || "", $options: "i" },
              },
            },
          ],
        }
      : {}
  ).sort("-createdAt");

  return res.status(200).json({
    status: "ok",
    data: recipes,
  });
};

export const getTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tags = await Recipe.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: { total: { $sum: 1 } }, tags: { $addToSet: "$tags" } } },
  ]);
  res.status(200).json({
    status: "ok",
    data: tags[0].tags,
  });
};

export const addRecipeToFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let user = await User.findById(req.session.user!._id).populate("favorites");

  const isHereOp = user!.favorites
    .map((recipe: any) => `${recipe._id}` === id)
    .includes(true)
    ? "$pull"
    : "$addToSet";

  const recipe = await Recipe.findByIdAndUpdate(
    new ObjectId(id),
    {
      [isHereOp]: { favorites: req.session.user!._id },
    },
    {
      new: true,
    }
  );

  if (recipe) {
    user = await User.findById(req.session.user!._id).populate("favorites");
    req.session.user = user!;
    return res.status(200).json({
      status: "ok",
      data: user!.favorites,
    });
  }

  return next(new NotFoundError());
};

export const getMyFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.session.user!._id).populate("favorites");
  res.status(200).json({
    status: "ok",
    data: user!.favorites,
  });
};

export const uploadRecipeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name = `${req.params.id}-${Date.now()}.png`;
    sharp(req.file!.buffer)
      .resize(800, 400)
      .toFormat("png")
      .png({ quality: 52 })
      .toFile(`public/images/${name}`);

    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        image: name,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "ok",
      data: recipe,
    });
  } catch (error: any) {
    console.log(error.message);

    next(new Error(error.message));
  }
};

export const getMetaData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const metaData = await Recipe.find().sort({ favorites: -1 }).limit(8);

  res.status(200).json({
    status: "ok",
    data: metaData,
  });
};
