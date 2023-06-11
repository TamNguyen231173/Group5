import { apiService } from './apiService'
import { Post } from './type'
import { EndPoint } from './endPoint'

export const postService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<Post[], void>({
      query: () => EndPoint.getAllPost,
      transformResponse: (response: any) => response.data.posts,
    }),
    getPostById: builder.query<Post, string>({
      query: (id: string) => EndPoint.getPostById(id),
      transformResponse: (response: any) => response.data.post,
    }),
  }),
})

export const { useGetAllPostQuery, useLazyGetPostByIdQuery } = postService
