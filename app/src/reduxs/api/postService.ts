import { apiService } from './apiService'
import { Post } from './type'

export const postService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<Post[], void>({
      query: () => '/api/posts',
      transformResponse: (response: any) => response.data.posts,
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/api/posts/${id}`,
      transformResponse: (response: any) => response.data.post,
    }),
  }),
})

export const { useGetAllPostQuery, useGetPostByIdQuery } = postService
