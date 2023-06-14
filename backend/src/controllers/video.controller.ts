import { NextFunction, Request, Response } from "express";
import {
  CreateVideoInput,
  DeleteVideoInput,
  GetVideoInput,
  GetVideoPaginationInput,
  UpdateVideoInput,
} from "../schema/video.schema";
import {
  createVideo,
  findAllVideos,
  findAndUpdateVideo,
  findOneAndDelete,
  findVideo,
  findVideoById,
  getAmountOfRecord,
} from "../services/video.service";
import { findUserById } from "../services/user.service";
import AppError from "../utils/appError";

export const createVideoHandler = async (
  req: Request<{}, {}, CreateVideoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_id = res.locals.user._id;

    const Video = await createVideo({ input: req.body, user_id });

    res.status(201).json({
      status: "success",
      data: Video,
    });
  } catch (err: any) {
    if (err.code === "23505") {
      return res.status(409).json({
        status: "fail",
        message: "Video with that title already exist",
      });
    }
    next(err);
  }
};

export const getVideoHandler = async (
  req: Request<GetVideoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const Video = await findVideoById(req.params.VideoId);

    if (!Video) {
      return next(new AppError("Video with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: Video,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getVideosHandler = async (
  req: Request<{}, {}, {}, GetVideoPaginationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const perPage = req.query["per_page"] ?? 0;
    const page = req.query["page"] ?? 1;

    const familyName = req.query.familyName as string;
    const habitat = req.query.habitat as string;
    const keywords = req.query.keywords as string[];

    const amountOfRecord = await getAmountOfRecord();

    //for case (amountOfRecord / perPage = 0)
    const amountOfPage = !isFinite(Math.floor(amountOfRecord / perPage))
      ? 1
      : Math.floor(amountOfRecord / perPage);

    const Videos = await findAllVideos(
      { familyName, habitat, keywords },
      {
        skip: perPage * (page - 1),
        limit: perPage,
      }
    );

    res.status(200).json({
      status: "success",
      data: Videos,
      records: Videos.length,
      pages: amountOfPage,
      current_page: Number(page) > amountOfPage ? amountOfPage : Number(page),
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateVideoHandler = async (
  req: Request<UpdateVideoInput["params"], {}, UpdateVideoInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedVideo = await findAndUpdateVideo(
      { _id: req.params.VideoId },
      req.body,
      { returnDocument: "after" }
    );

    if (!updatedVideo) {
      return next(new AppError("Video with that ID not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: updatedVideo,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteVideoHandler = async (
  req: Request<DeleteVideoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const Video = await findOneAndDelete({ _id: req.params.VideoId });

    if (!Video) {
      return next(new AppError("Video with that ID not found", 404));
    }

    res.status(204).json({
      status: "success",
      data: "Video deleted successfully",
    });
  } catch (err: any) {
    next(err);
  }
};

export const parseVideoFormData = (
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
