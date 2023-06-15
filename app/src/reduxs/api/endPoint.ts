export class EndPoint {
  // login
  static login = '/api/auth/login'
  // verify email
  static verify = (code: string) => `/api/auth/verifyemail/${code}`
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
  static getVideoPagination = (page?: number, perPage?: number) => {
    let buildEndPointString = '/api/videos?'

    if (!!page) buildEndPointString.concat(`&page${page}`)
    if (!!perPage) buildEndPointString.concat(`&per_page${perPage}`)

    return buildEndPointString
  }
}
