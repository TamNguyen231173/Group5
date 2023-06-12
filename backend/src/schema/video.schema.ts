import { array, number, object, string, TypeOf, z } from "zod";

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
      keywords: z.preprocess(
        (value) => z.string().parse(value).split(","),
        z.array(z.string({ invalid_type_error: "Keyword must be a string" }))
      ),
    })
    .partial(),
};

export const getVideoSchema = object({
  ...params,
});

export const getPaginationVideoSchema = object({
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
export type GetVideoPaginationInput = TypeOf<
  typeof getPaginationVideoSchema
>["query"];
export type UpdateVideoInput = TypeOf<typeof updateVideoSchema>;
export type DeleteVideoInput = TypeOf<typeof deleteVideoSchema>["params"];
