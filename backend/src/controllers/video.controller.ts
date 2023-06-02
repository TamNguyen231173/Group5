import { NextFunction, Request, Response } from "express";
import {
  CreateVideoInput,
  DeleteVideoInput,
  GetVideoInput,
  UpdateVideoInput,
} from "../schema/video.schema";
import {
  createVideo,
  findAllVideos,
  findAndUpdateVideo,
  findOneAndDelete,
  findVideo,
  findVideoById,
} from "../services/video.service";
import { findUserById } from "../services/user.service";
import AppError from "../utils/appError";
