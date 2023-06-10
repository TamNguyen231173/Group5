import { array, number, object, string, TypeOf } from "zod";

export const createVideoSchema = object({
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }),
    thumbnail: string({
      required_error: "Image is required",
    }),
    url: string({
      required_error: "Url is required",
    }),
  }),
});

const params = {
  params: object({
    VideoId: string(),
  }),
};

const query = {
  query: object({
    per_page: number(),
    page: number(),
  }).partial(),
};

export const getVideoSchema = object({
  ...params,
  ...query,
});

export const updateVideoSchema = object({
  ...params,
  body: object({
    title: string(),
    description: string(),
    thumbnail: string(),
    url: string(),
  }).partial(),
});

export const deleteVideoSchema = object({
  ...params,
});

export type CreateVideoInput = TypeOf<typeof createVideoSchema>["body"];
export type GetVideoInput = TypeOf<typeof getVideoSchema>["params"];
export type GetVideoPaginationInput = TypeOf<typeof getVideoSchema>["query"];
export type UpdateVideoInput = TypeOf<typeof updateVideoSchema>;
export type DeleteVideoInput = TypeOf<typeof deleteVideoSchema>["params"];
