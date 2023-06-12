import { apiService } from './apiService'
import { Post, RelatedPostsRequest } from './type'
import { EndPoint } from './endPoint'

export const postService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<Post[], void>({
      query: () => {
        return {
          url: EndPoint.getAllPost,
          method: 'GET',
        }
      },
      keepUnusedDataFor: 10,
      transformResponse: (response: any) => response.data.posts,
    }),
    getRelatedPosts: builder.query<Post[], RelatedPostsRequest>({
      query: (input) => {
        return {
          url: EndPoint.getAllPost,
          params: input,
        }
      },
      keepUnusedDataFor: 10,
      transformResponse: (response: any) => response.data.posts,
    }),
    getPostById: builder.query<Post, string>({
      query: (id: string) => EndPoint.getPostById(id),
      keepUnusedDataFor: 10,
      transformResponse: (response: any) => response.data.post,
    }),
  }),
})

export const {
  useGetAllPostQuery,
  useLazyGetPostByIdQuery,
  useLazyGetRelatedPostsQuery,
} = postService
