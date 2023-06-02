import { array, object, string, TypeOf } from "zod";

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
    familyName: string({
      required_error: "Family name is required",
    }),
    url: string({
      required_error: "Url is required",
    }),
    habitat: string({
      required_error: "Habitat is required",
    }),
  }),
});

const params = {
  params: object({
    VideoId: string(),
  }),
};

export const getVideoSchema = object({
  ...params,
});

export const updateVideoSchema = object({
  ...params,
  body: object({
    title: string(),
    description: string(),
    thumbnail: string(),
    familyName: string(),
    url: string(),
    habitat: string(),
  }).partial(),
});

export const deleteVideoSchema = object({
  ...params,
});

export type CreateVideoInput = TypeOf<typeof createVideoSchema>["body"];
export type GetVideoInput = TypeOf<typeof getVideoSchema>["params"];
export type UpdateVideoInput = TypeOf<typeof updateVideoSchema>;
export type DeleteVideoInput = TypeOf<typeof deleteVideoSchema>["params"];
