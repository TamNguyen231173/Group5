export class EndPoint {
  // login
  static login = '/api/auth/login'

  // resgister
  static register = '/api/auth/register'

  // post
  static getAllPost = '/api/posts'
  static getPostById = (id: string) => `/api/posts/${id}`

  // category
  static getAllCategory = '/api/categories'
  static getCategoryById = (id: string) => `/api/categories/${id}`

  // video
  static getAllVideo = '/api/videos'
  static getVideoById = (id: string) => `/api/videos/${id}`
}