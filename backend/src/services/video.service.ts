import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import videoModel, { Video } from "../models/video.model";

export const createVideo = async ({
  input,
  user_id,
}: {
  input: Partial<Video>;
  user_id: string;
}) => {
  return videoModel.create({ ...input, user: user_id });
};

export const findVideoById = async (id: string) => {
  return videoModel.findById(id).lean();
};

export const findAllVideos = async () => {
  return videoModel.find().populate("user");
};

export const findVideo = async (
  query: FilterQuery<Video>,
  options: QueryOptions = {}
) => {
  return await videoModel.findOne(query, {}, options);
};

export const findAndUpdateVideo = async (
  query: FilterQuery<Video>,
  update: UpdateQuery<Video>,
  options: QueryOptions
) => {
  return await videoModel
    .findOneAndUpdate(query, update, options)
    .populate("user");
};

export const findOneAndDelete = async (
  query: FilterQuery<Video>,
  options: QueryOptions = {}
) => {
  return await videoModel.findOneAndDelete(query, options);
};
