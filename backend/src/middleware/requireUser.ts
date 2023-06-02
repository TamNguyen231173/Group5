import { NextFunction, Request, Response } from "express";
import AppError from "../utils/appError";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    if (!user) {
      return next(new AppError(`Invalid token or session has expired`, 401));
    }

    next();
  } catch (err: any) {
    next(err);
  }
};

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    if (!user) {
      return next(new AppError(`Invalid token or session has expired`, 401));
    }

    if (user.role !== "admin") {
      return next(new AppError(`You do not have permission`, 403));
    }

    next();
  } catch (err: any) {
    next(err);
  }
};
