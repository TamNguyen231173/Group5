export enum EndPoint {
  // login
  login = '/api/auth/login',

  // resgister
  register = '/api/auth/register',

  // post
  getAllPost = '/api/posts',
  getPostById = '/api/posts/:id',

  // category
  getAllCategory = '/api/categories',
  getCategoryById = '/api/categories/:id',

  // video
  getAllVideo = '/api/videos',
  getVideoById = '/api/videos/:id',
}
