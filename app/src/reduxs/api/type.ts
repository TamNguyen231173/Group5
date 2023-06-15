export interface Pokemon {
  name: string
  url: string
}

export interface User {
  _id: string
  name: string
  email: string
  password: string
  role: string
  photo: string
  verified: boolean
  posts_saved: Array<Post>
  video_saved: Array<Video>
  createdAt?: Date
  updateAt?: Date
  id: string
}
export interface LoginBody{
  email: string
  password: string
}
export interface RegisterBody{
  name: string
  email: string
  password: string
  passwordConfirm: string
  photo?: string
}
export interface GetRegisterResponse{
  status: string
  message: string
  error: Array<object>
}
export interface GetLoginResponse{
  status: string
  access_token: string
  user: User
}
export interface GetVerifyResponse{
  status: string
  message: string
}
export interface Post {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  like: number
  familyName: Category
  region: Category
  habitat: Category
  rare: boolean
  author: User
  views: number
  keywords: string[]
}

export interface ResponseGetPostGroupByCategory {
  isExpanded: boolean
  category: Category
  subcategory: Array<Post>
}

export interface Video {
  _id: string
  title: string
  description: string
  thumbnail: string
  url: string
  like: number
  keywords: Array<string>
  familyName: Category
  habitat: Category
  author: Author
  created_at: Date
  updated_at: Date
  id: string
}

export interface Category {
  _id: string
  name: string
  description: string
  type: string
  created_at: Date
  updated_at: Date
  id: string
}

export interface Author {
  _id: string
  name: string
  photo: string
}

export interface RelatedPostsRequest {
  familyName?: string
  habitat?: string
  region?: string
  keywords?: string[]
  page: number
  per_page: number
}

export interface RelatedVideosRequest {
  familyName?: string
  habitat?: string
  keywords?: string[]
  per_page: number
  page: number
}

export type GetAllVideoResponse = {
  status: string
  data: Array<Video>
  records?: number
  pages?: number
  current_page?: number
}

export type GetVideoResponse = {
  status: string
  data: Video
}

export type QueryArgs = {
  page?: number
  per_page?: number
  sort?: ViewSort
}

/**
 * @enum: asc: sắp xếp tăng dần
 * @enum: des: sắp xếp giảm dần
 */
export type ViewSort = 'asc' | 'des'
