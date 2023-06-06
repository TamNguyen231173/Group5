import { bool } from "sharp";
import { array, boolean, object, string, TypeOf } from "zod";
import { User } from "../models/user.model";

export const createPostSchema = object({
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }),
    image: string({
      required_error: "Image is required",
    }),
    images: array(
      string({
        required_error: "Images is required",
      })
    ),
    rare: boolean({
      required_error: "Rare is required",
    }),
  }),
});

const params = {
  params: object({
    postId: string(),
  }),
};

export const getPostSchema = object({
  ...params,
});

export const updatePostSchema = object({
  ...params,
  body: object({
    title: string(),
    description: string(),
    images: array(string()),
    image: string(),
    rare: boolean(),
  }).partial(),
});

export const deletePostSchema = object({
  ...params,
});

export type CreatePostInput = TypeOf<typeof createPostSchema>["body"];
export type GetPostInput = TypeOf<typeof getPostSchema>["params"];
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>["params"];
