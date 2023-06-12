import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { GetAllVideoResponse, GetVideoResponse, QueryArgs, Video } from './type'

export const videoService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideo: builder.query<GetAllVideoResponse, void>({
      query: () => EndPoint.getAllVideo,
      keepUnusedDataFor: 10,
    }),

    getVideo: builder.query<GetVideoResponse, string>({
      query: (id) => EndPoint.getVideoById(id),
      keepUnusedDataFor: 10,
    }),

    geVideoPagination: builder.query<GetAllVideoResponse, QueryArgs>({
      query: (args) => EndPoint.getVideoPagination(args.page, args.per_page),
      keepUnusedDataFor: 10,
    }),
  }),
})

export const { useGetAllVideoQuery, useGetVideoQuery } = videoService
