import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.session, req.session.user);
  console.log("herrrre");

  if (req.session && req.session.user) {
    console.log(req.session);

    return next();
  } else {
    return next(new NotAuthorizedError("Kindly login"));
  }
};
