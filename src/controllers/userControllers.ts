import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User, { IUser } from "../models/userModel";
import { signIn } from "../middlewares/auth";
import { NotFoundError } from "../errors/not-found-error";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import Recipe from "../models/recipeModel";
import { ObjectId } from "mongodb";
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, isAdmin, password } = req.body;
    const user: IUser = await User.create({
      name,
      email,
      isAdmin: isAdmin ? isAdmin : false,
      password,
    });
    const token = signIn(user._id, email);

    req.session.user = user;

    res.status(201).json({
      status: "ok",
      data: {
        user: {
          _id: user._id,
          name,
          email,
          isAdmin: isAdmin ? isAdmin : false,
          token,
        },
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    data: {
      user: req.session.user,
    },
  });
};

export const editUser = async (req: Request, res: Response) => {
  req.session.user = req.session.user!;
  const name = req.body.name ? req.body.name : req.session.user.name;
  const user = await User.findByIdAndUpdate(
    req.session.user._id,
    {
      name,
    },
    {
      new: true,
    }
  );
  return res.status(200).json({
    status: "ok",
    data: { user },
  });
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user: any = await User.findOne({ email });
  req.session.user = user;
  if (user && (await user.matchPassword(password))) {
    const token = signIn(user._id, email);

    return res.status(200).json({
      status: "ok",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin ? user.isAdmin : false,
          gender: user.name,
          token,
        },
      },
    });
  }
  next(new NotFoundError("Email or password is wrong"));
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: userId } = req.params;

  if (mongoose.Types.ObjectId.isValid(userId)) {
    const user = await User.findById(new mongoose.Types.ObjectId(userId));
    if (user) {
      return res.status(200).json({
        status: "ok",
        data: user,
      });
    }
  }
  next(new Error("Email or password is wrong"));
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json({
    status: "ok",
    data: users,
  });
};

export const signout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    res.send(); // will always fire after session is destroyed
  });
};
