import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { Video } from './type'

export type GetAllVideoResponse = {
  status: string
  data: Array<Video>
}

export type GetVideoResponse = {
  status: string
  data: Video
}

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
  }),
})

export const { useGetAllVideoQuery, useGetVideoQuery } = videoService
