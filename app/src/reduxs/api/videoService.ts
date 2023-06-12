import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import {
  GetAllVideoResponse,
  GetVideoResponse,
  QueryArgs,
  Video,
  RelatedVideosRequest,
} from './type'

export const videoService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideo: builder.query<GetAllVideoResponse, void>({
      query: () => EndPoint.getAllVideo,
      keepUnusedDataFor: 10,
    }),
    getRelatedVideos: builder.query<Video[], RelatedVideosRequest>({
      query: (input) => {
        return {
          url: EndPoint.getAllVideo,
          params: input,
        }
      },
      keepUnusedDataFor: 10,
      transformResponse: (response: any) => response.data,
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

export const {
  useGetAllVideoQuery,
  useGetVideoQuery,
  useLazyGetRelatedVideosQuery,
} = videoService
