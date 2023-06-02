import { bool } from "sharp";
import { array, boolean, object, string, TypeOf } from "zod";

export const createCategorySchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    type: string({
      required_error: "Type is required",
    }),
  }),
});

const params = {
  params: object({
    CategoryId: string(),
  }),
};

export const getCategorySchema = object({
  ...params,
});

export const updateCategorySchema = object({
  ...params,
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    type: string({
      required_error: "Type is required",
    }),
  }).partial(),
});

export const deleteCategorySchema = object({
  ...params,
});

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>["body"];
export type GetCategoryInput = TypeOf<typeof getCategorySchema>["params"];
export type UpdateCategoryInput = TypeOf<typeof updateCategorySchema>;
export type DeleteCategoryInput = TypeOf<typeof deleteCategorySchema>["params"];
