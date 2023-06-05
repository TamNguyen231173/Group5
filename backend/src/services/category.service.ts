import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import categoryModel, { Category } from "../models/category.model";

export const createCategory = async ({
  input,
  user_id,
}: {
  input: Partial<Category>;
  user_id: string;
}) => {
  return categoryModel.create({ ...input, user: user_id });
};

export const findCategoryById = async (id: string) => {
  return categoryModel.findById(id).lean();
};

export const findAllCategories = async () => {
  return categoryModel.find();
};

export const findCategory = async (
  query: FilterQuery<Category>,
  options: QueryOptions = {}
) => {
  return await categoryModel.findOne(query, {}, options);
};

export const findAndUpdateCategory = async (
  query: FilterQuery<Category>,
  update: UpdateQuery<Category>,
  options: QueryOptions
) => {
  return await categoryModel.findOneAndUpdate(query, update, options);
};

export const findOneAndDelete = async (
  query: FilterQuery<Category>,
  options: QueryOptions = {}
) => {
  return await categoryModel.findOneAndDelete(query, options);
};
