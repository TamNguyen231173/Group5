import { NextFunction, Request, Response } from "express";
import {
  CreateCategoryInput,
  DeleteCategoryInput,
  GetCategoryInput,
  UpdateCategoryInput,
} from "../schema/category.schema";
import {
  createCategory,
  findAllCategories,
  findAndUpdateCategory,
  findOneAndDelete,
  findCategory,
  findCategoryById,
} from "../services/category.service";
import { findUserById } from "../services/user.service";
import AppError from "../utils/appError";

export const createCategoryHandler = async (
  req: Request<{}, {}, CreateCategoryInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_id = res.locals.user._id;

    const Category = await createCategory({ input: req.body, user_id });

    res.status(201).json({
      status: "success",
      data: {
        Category,
      },
    });
  } catch (err: any) {
    if (err.code === "23505") {
      return res.status(409).json({
        status: "fail",
        message: "Category with that title already exist",
      });
    }
    next(err);
  }
};

export const getCategoryHandler = async (
  req: Request<GetCategoryInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const Category = await findCategoryById(req.params.CategoryId);

    if (!Category) {
      return next(new AppError("Category with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        Category,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getCategorysHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Categories = await findAllCategories();

    res.status(200).json({
      status: "success",
      data: {
        Categories,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateCategoryHandler = async (
  req: Request<UpdateCategoryInput["params"], {}, UpdateCategoryInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedCategory = await findAndUpdateCategory(
      { _id: req.params.CategoryId },
      req.body,
      {}
    );

    if (!updatedCategory) {
      return next(new AppError("Category with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        Category: updatedCategory,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteCategoryHandler = async (
  req: Request<DeleteCategoryInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const Category = await findOneAndDelete({ _id: req.params.CategoryId });

    if (!Category) {
      return next(new AppError("Category with that ID not found", 404));
    }

    res.status(204).json({
      status: "success",
      data: "Category deleted successfully",
    });
  } catch (err: any) {
    next(err);
  }
};

export const parseCategoryFormData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.data) return next();
    const parsedBody = { ...JSON.parse(req.body.data) };
    if (req.body.image) {
      parsedBody["image"] = req.body.image;
    }

    if (req.body.images) {
      parsedBody["images"] = req.body.images;
    }

    req.body = parsedBody;
    next();
  } catch (err: any) {
    next(err);
  }
};
