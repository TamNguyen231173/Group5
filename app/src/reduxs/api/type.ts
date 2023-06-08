export interface Pokemon {
  name: string
  url: string
}

export interface User {
  id: string
  name: string
}

export interface Category {
  id: string
  name: string
  description: string
  type: string
}

export interface Post {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  like: number
  familyName: Category
  category: Category
  rare: boolean
  author: User
  views: number
  keywords: string[]
}
