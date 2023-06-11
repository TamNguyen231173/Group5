import { NextFunction, Request, Response } from "express";
import {
  CreatePostInput,
  DeletePostInput,
  GetPostInput,
  GetPostPaginationInput,
  GetRelatedPostsInput,
  UpdatePostInput,
} from "../schema/post.schema";
import {
  createPost,
  findAllPosts,
  findAndUpdatePost,
  findOneAndDelete,
  findPostById,
  getAmountOfPosts,
} from "../services/post.service";
import { findUserById } from "../services/user.service";
import AppError from "../utils/appError";

export const createPostHandler = async (
  req: Request<{}, {}, CreatePostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_id = res.locals.user._id;

    const post = await createPost({ input: req.body, user_id });

    res.status(201).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err: any) {
    if (err.code === "23505") {
      return res.status(409).json({
        status: "fail",
        message: "Post with that title already exist",
      });
    }
    next(err);
  }
};

export const getPostHandler = async (
  req: Request<GetPostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await findPostById(req.params.postId);

    if (!post) {
      return next(new AppError("Post with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getPostsHandler = async (
  req: Request<{}, {}, GetRelatedPostsInput, GetPostPaginationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const perPage = req.query["per_page"] ?? 0;
    const page = req.query["page"] ?? 1;

    const familyName = req.body.familyName as string;
    const habitat = req.body.habitat as string;
    const region = req.body.region as string;
    const keywords = req.body.keywords as string[];

    const amountOfRecord = await getAmountOfPosts();

    //for case (amountOfRecord / perPage = 0)
    const amountOfPage = !isFinite(Math.floor(amountOfRecord / perPage))
      ? 1
      : Math.floor(amountOfRecord / perPage);

    const posts = await findAllPosts(
      { familyName, habitat, region, keywords },
      {
        skip: (page - 1) * perPage,
        limit: perPage,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updatePostHandler = async (
  req: Request<UpdatePostInput["params"], {}, UpdatePostInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedPost = await findAndUpdatePost(
      { _id: req.params.postId },
      req.body,
      {}
    );

    if (!updatedPost) {
      return next(new AppError("Post with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        post: updatedPost,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deletePostHandler = async (
  req: Request<DeletePostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await findOneAndDelete({ _id: req.params.postId });

    if (!post) {
      return next(new AppError("Post with that ID not found", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const parsePostFormData = (
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
