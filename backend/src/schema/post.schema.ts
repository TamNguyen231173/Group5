import { array, boolean, object, string, TypeOf, z } from "zod";
import { SortEnum } from "../utils/type";

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

const query = {
  query: z
    .object({
      per_page: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z
          .number({ invalid_type_error: "PerPage must be a number" })
          .positive({ message: "PerPage must be a positive number" })
      ),
      page: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z
          .number({ invalid_type_error: "Page must be a number" })
          .positive({ message: "Page must be a positive number" })
      ),
      familyName: z.preprocess(
        (value) => z.string().parse(value),
        z.string({ invalid_type_error: "FamilyName must be a string" })
      ),
      habitat: z.preprocess(
        (value) => z.string().parse(value),
        z.string({ invalid_type_error: "Habitat must be a string" })
      ),
      region: z.preprocess(
        (value) => z.string().parse(value),
        z.string({ invalid_type_error: "Region must be a string" })
      ),
      keywords: z.preprocess(
        (value) => z.string().parse(value).split(","),
        z.array(z.string({ invalid_type_error: "Keywords must be a string" }))
      ),
      sort: z.nativeEnum(SortEnum, {
        invalid_type_error: "Sort must be 'des' or 'asc'",
      }),
    })
    .partial(),
};

export const getPostSchema = object({
  ...params,
});

export const getPaginationPostSchema = object({
  ...query,
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
export type GetPostPaginationInput = TypeOf<
  typeof getPaginationPostSchema
>["query"];
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>["params"];
