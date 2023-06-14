import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import postModel, { Post } from "../models/post.model";

export const createPost = async ({
  input,
  user_id,
}: {
  input: Partial<Post>;
  user_id: string;
}) => {
  return postModel.create({ ...input, author: user_id });
};

export const findPostById = async (id: string) => {
  return postModel
    .findById(id)
    .populate("author", "_id name photo")
    .populate("familyName")
    .populate("habitat")
    .populate("region")
    .lean()
    .lean();
};

export const findAllPosts = async (
  input: {
    familyName?: string;
    habitat?: string;
    region?: string;
    keywords?: string[];
  },
  options: QueryOptions = {}
) => {
  return postModel
    .find(
      {
        $or: [
          input.familyName ? { familyName: input.familyName } : {},
          input.habitat ? { habitat: input.habitat } : {},
          input.region ? { region: input.region } : {},
          input.keywords ? { keywords: { $in: input.keywords } } : {},
        ],
      },
      {},
      options
    )
    .populate("author", "_id name photo")
    .populate("familyName")
    .populate("habitat")
    .populate("region")
    .lean();
};

export const findPost = async (
  query: FilterQuery<Post>,
  options: QueryOptions = {}
) => {
  return await postModel
    .findOne(query, {}, options)
    .populate("author", "_id name photo")
    .populate("familyName")
    .populate("habitat")
    .populate("region")
    .lean();
};

export const findAndUpdatePost = async (
  query: FilterQuery<Post>,
  update: UpdateQuery<Post>,
  options: QueryOptions
) => {
  return await postModel
    .findOneAndUpdate(query, update, options)
    .populate("author", "_id name photo")
    .populate("familyName")
    .populate("habitat")
    .populate("region")
    .lean();
};

export const findOneAndDelete = async (
  query: FilterQuery<Post>,
  options: QueryOptions = {}
) => {
  return await postModel.findOneAndDelete(query, options);
};

export const getAmountOfPosts = async () => {
  return await postModel.count();
};
