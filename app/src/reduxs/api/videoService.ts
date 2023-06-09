import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { Video } from './type'

export interface GetAllVideoResponse {}

export const videoService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideo: builder.query<Video[], any>({
      query: () => EndPoint.getAllVideo,
      keepUnusedDataFor: 5,
    }),

    getVideo: builder.query<Video, any>({
      query: (id: string) => EndPoint.getVideoById(id),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetAllVideoQuery, useGetVideoQuery } = videoService
