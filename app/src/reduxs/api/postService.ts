import { apiService } from './apiService'
import {
  ResponseGetPostGroupByCategory,
  Post,
  QueryArgs,
  RelatedPostsRequest,
} from './type'
import { EndPoint } from './endPoint'

export const postService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<Post[], QueryArgs>({
      query: (args) => {
        return {
          url: EndPoint.getAllPost,
          method: 'GET',
          params: args,
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

    updatePostViewById: builder.query<Post, string>({
      query: (id) => {
        return {
          url: EndPoint.getPostById(id),
          method: 'PATCH',
        }
      },
      keepUnusedDataFor: 10,
    }),

    getAllPostGroupByCategory: builder.query<
      ResponseGetPostGroupByCategory[],
      QueryArgs
    >({
      query: (args) => {
        return {
          url: EndPoint.getAllPost,
          method: 'GET',
          params: args,
        }
      },
      keepUnusedDataFor: 10,
      transformResponse: (response: any) => {
        let tempResponse: any = {}
        response.data.posts.forEach((element: any, index: number) => {
          if (tempResponse[element?.familyName.name]) {
            tempResponse[element?.familyName.name].subcategory.push(element)
          } else {
            tempResponse[element?.familyName.name] = {
              isExpanded: false,
              category: element?.familyName,
              subcategory: [element],
            }
          }
        })
        return Object.keys(tempResponse).map((value) => tempResponse[value])
      },
    }),
  }),
})

export const {
  useGetAllPostQuery,
  useLazyGetAllPostQuery,
  useLazyGetPostByIdQuery,
  useLazyGetRelatedPostsQuery,
  useLazyUpdatePostViewByIdQuery,
  useLazyGetAllPostGroupByCategoryQuery,
} = postService
