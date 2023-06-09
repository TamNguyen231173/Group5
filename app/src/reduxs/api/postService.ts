import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { PostDetail } from './type'

export const postService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getDetailPost: builder.query<PostDetail, any>({
      query: (id: string) => EndPoint.getPostById(id),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetDetailPostQuery } = postService
