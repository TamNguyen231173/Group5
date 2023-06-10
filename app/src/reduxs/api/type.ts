export interface Pokemon {
  name: string
  url: string
}

export interface PostDetail {
  id: number
  title: string
  body: string
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
}
