export interface Pokemon {
  name: string
  url: string
}

export interface User {
  id: string
  name: string
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
